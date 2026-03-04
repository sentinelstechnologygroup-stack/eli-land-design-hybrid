// src/lib/intelligence.js

/**
 * Aurora / Intelligence Suite Instrumentation Layer
 * --------------------------------------------------
 * Lightweight semantic tracking system.
 * No analytics provider required.
 *
 * Design goals:
 * - Vendor-neutral (GA/Segment/PostHog/etc later)
 * - Minimal runtime cost
 * - Throttled + deduped so it doesn't spam
 * - Offline-friendly queue (localStorage)
 */

const CHANNEL = "aurora:event";
const QUEUE_KEY = "__AURORA_EVENT_QUEUE__";
const MAX_QUEUE = 300; // keep small + safe
const DEBUG =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname.includes("vercel"));

function safeNow() {
  return Date.now();
}

function safePath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname || "";
}

function safeReferrer() {
  if (typeof document === "undefined") return "";
  return document.referrer || "";
}

function loadQueue() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(QUEUE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveQueue(queue) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-MAX_QUEUE)));
  } catch {
    // ignore storage failures
  }
}

function enqueue(evt) {
  const q = loadQueue();
  q.push(evt);
  saveQueue(q);
}

function emit(type, payload = {}) {
  if (typeof window === "undefined") return;

  const evt = {
    type,
    payload,
    timestamp: safeNow(),
    path: safePath(),
    referrer: safeReferrer(),
  };

  // 1) dispatch browser event
  const ce = new CustomEvent(CHANNEL, { detail: evt });
  window.dispatchEvent(ce);

  // 2) keep local queue (future upload / replay)
  enqueue(evt);

  // 3) dev visibility
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(`[aurora] ${type}`, payload);
  }
}

/**
 * Public: low-level emitter (kept for compatibility)
 */
export function emitEvent(type, payload = {}) {
  emit(type, payload);
}

/**
 * Utility: throttle
 */
function throttle(fn, waitMs) {
  let last = 0;
  let timeout = null;

  return (...args) => {
    const now = safeNow();
    const remaining = waitMs - (now - last);

    if (remaining <= 0) {
      last = now;
      fn(...args);
      return;
    }

    if (timeout) return;

    timeout = window.setTimeout(() => {
      timeout = null;
      last = safeNow();
      fn(...args);
    }, remaining);
  };
}

/**
 * Utility: once-per-path guard (prevents duplicate fires on same route)
 */
const onceMap = new Map();
function oncePerPath(key) {
  const p = safePath();
  const k = `${p}::${key}`;
  if (onceMap.get(k)) return false;
  onceMap.set(k, true);
  return true;
}

/**
 * Page metadata registration
 * Used for semantic understanding of page intent.
 */
export function registerPageMeta(meta = {}) {
  if (typeof window === "undefined") return;

  window.__AURORA_PAGE_META__ = meta;
  emit("page-meta", meta);
}

/**
 * Track CTA clicks
 * name: "Schedule Consultation"
 * location: "Header" | "Hero" | "Footer" | etc
 * extras: optional: { variant, routeTo, ... }
 */
export function trackCTA(name, location, extras = {}) {
  emit("cta-click", { name, location, ...extras });
}

/**
 * Track content interactions (generic)
 */
export function trackContent(type, id, extras = {}) {
  emit("content-interaction", { type, id, ...extras });
}

/**
 * Scroll telemetry (rounded)
 */
export function trackScrollDepth(depth, extras = {}) {
  emit("scroll-depth", { depth: Math.round(depth), ...extras });
}

/* =========================================================
   NEW: 4 Hooks we should add now
   ========================================================= */

/**
 * 1) Route / pageview (semantic, not GA)
 * Call on pathname change (Layout).
 */
export function trackPageView(extras = {}) {
  // one per path
  if (!oncePerPath("pageview")) return;
  emit("page-view", { ...extras });
}

/**
 * 2) Engagement "time-on-page"
 * Call once on mount; fires on unload/route-change cleanup.
 */
export function startEngagementTimer(extras = {}) {
  if (typeof window === "undefined") return () => {};

  const startedAt = safeNow();
  const pathAtStart = safePath();

  return () => {
    // if route changed, still attribute to the page we started on
    const ms = safeNow() - startedAt;
    emit("engagement", {
      ms,
      path: pathAtStart,
      ...extras,
    });
  };
}

/**
 * 3) Lead intent signals
 * Useful before you have a CRM.
 */
export function trackLeadIntent(signal, extras = {}) {
  // signal examples:
  // "contact_open" | "phone_click" | "email_click" | "form_start" | "form_submit"
  emit("lead-intent", { signal, ...extras });
}

/**
 * 4) Portfolio / gallery interactions
 * Add now; galleries can mature later without changing instrumentation.
 */
export function trackProjectOpen(slug, extras = {}) {
  emit("project-open", { slug, ...extras });
}

export function trackGalleryOpen(collection, extras = {}) {
  emit("gallery-open", { collection, ...extras });
}

export function trackMediaOpen(mediaId, extras = {}) {
  emit("media-open", { mediaId, ...extras });
}

/**
 * BONUS: throttled scroll helper (use in Layout)
 * Emits at most every 750ms + on 25/50/75/90/100 thresholds.
 */
export function createScrollDepthTracker(options = {}) {
  const {
    throttleMs = 750,
    thresholds = [25, 50, 75, 90, 100],
    extras = {},
  } = options;

  const hit = new Set();

  const computeAndEmit = () => {
    const denom = document.body.scrollHeight - window.innerHeight;
    if (denom <= 0) return;

    const raw = (window.scrollY / denom) * 100;
    const depth = Math.max(0, Math.min(100, raw));

    // Always emit rounded (lightweight)
    trackScrollDepth(depth, extras);

    // Threshold pings
    thresholds.forEach((t) => {
      if (depth >= t && !hit.has(t)) {
        hit.add(t);
        emit("scroll-threshold", { threshold: t, ...extras });
      }
    });
  };

  return throttle(computeAndEmit, throttleMs);
}

/**
 * Optional: read queue (for future uploader)
 */
export function readEventQueue() {
  return loadQueue();
}

/**
 * Optional: clear queue (for future uploader)
 */
export function clearEventQueue() {
  saveQueue([]);
}