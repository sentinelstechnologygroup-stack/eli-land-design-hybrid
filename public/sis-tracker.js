// public/sis-tracker.js

(function () {
  if (typeof window === "undefined") return;

  var config = window.SIS_CONFIG || {};
  var queue = [];
  var sessionKey = "sis_eli_session_id";

  function getSessionId() {
    try {
      var existing = window.sessionStorage.getItem(sessionKey);
      if (existing) return existing;

      var created =
        "sis_" +
        Date.now().toString(36) +
        "_" +
        Math.random().toString(36).slice(2, 10);

      window.sessionStorage.setItem(sessionKey, created);
      return created;
    } catch (error) {
      return "sis_unavailable";
    }
  }

  function isEnabled(eventType) {
    if (!config.reportingEnabled) return false;
    if (!config.events) return true;

    var map = {
      page_view: "pageViews",
      cta_click: "ctaClicks",
      gallery_card_click: "galleryViews",
      gallery_view: "galleryViews",
      form_start: "formStarts",
      form_submit: "formSubmits",
      phone_click: "phoneClicks",
      email_click: "emailClicks",
      outbound_click: "outboundClicks",
    };

    var key = map[eventType];
    return key ? config.events[key] !== false : true;
  }

  function buildPayload(type, detail) {
    return {
      clientId: config.clientId || "eli-land-design",
      clientName: config.clientName || "ELI Land Design",
      environment: config.environment || "unknown",
      type: type,
      label: detail && detail.label ? detail.label : "",
      path: window.location.pathname,
      href: detail && detail.href ? detail.href : "",
      pageTitle: document.title,
      referrer: document.referrer || "",
      sessionId: getSessionId(),
      timestamp: new Date().toISOString(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      userAgent: navigator.userAgent,
    };
  }

  function send(payload) {
    queue.push(payload);
    window.SIS_QUEUE = queue;

    if (!config.endpoint) return;

    try {
      navigator.sendBeacon(
        config.endpoint,
        new Blob([JSON.stringify(payload)], {
          type: "application/json",
        })
      );
    } catch (error) {
      try {
        fetch(config.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch (fetchError) {
        // SIS must never break the client site.
      }
    }
  }

  function track(type, detail) {
    if (!isEnabled(type)) return;
    send(buildPayload(type, detail || {}));
  }

  window.SIS = {
    track: track,
    getQueue: function () {
      return queue.slice();
    },
  };

  function readTrackableElement(target) {
    if (!target || !target.closest) return null;

    return target.closest(
      "[data-sis-event], a[href^='tel:'], a[href^='mailto:']"
    );
  }

  document.addEventListener(
    "click",
    function (event) {
      var el = readTrackableElement(event.target);
      if (!el) return;

      var href = el.getAttribute("href") || "";
      var type = el.getAttribute("data-sis-event");
      var label =
        el.getAttribute("data-sis-label") ||
        el.getAttribute("aria-label") ||
        el.textContent ||
        "";

      if (!type && href.indexOf("tel:") === 0) type = "phone_click";
      if (!type && href.indexOf("mailto:") === 0) type = "email_click";
      if (!type && /^https?:\/\//i.test(href)) type = "outbound_click";

      if (!type) return;

      track(type, {
        label: label.trim().replace(/\s+/g, " ").slice(0, 140),
        href: href,
      });
    },
    true
  );

  document.addEventListener(
    "focusin",
    function (event) {
      var form = event.target && event.target.closest
        ? event.target.closest("form[data-sis-form]")
        : null;

      if (!form || form.__sisStarted) return;

      form.__sisStarted = true;

      track("form_start", {
        label:
          form.getAttribute("data-sis-label") ||
          form.getAttribute("name") ||
          "form",
      });
    },
    true
  );

  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;
      if (!form || !form.matches || !form.matches("form[data-sis-form]")) {
        return;
      }

      track("form_submit", {
        label:
          form.getAttribute("data-sis-label") ||
          form.getAttribute("name") ||
          "form",
      });
    },
    true
  );

  track("page_view", {
    label: window.location.pathname,
  });
})();