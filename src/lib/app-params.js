/* app-params.js - Utility for managing application parameters via URL and localStorage. */
// src/lib/app-params.js
export function getStorage() {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

export function getUrlParams() {
  if (typeof window === "undefined") return new URLSearchParams("");
  return new URLSearchParams(window.location.search);
}
const isNode = typeof window === "undefined";

const toSnakeCase = (str) => str.replace(/([A-Z])/g, "_$1").toLowerCase();

function getParam(paramName, { defaultValue = null, persist = false } = {}) {
  if (isNode) return defaultValue;

  const storage = window.localStorage;
  const storageKey = `app_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const v = urlParams.get(paramName);

  if (v != null) {
    if (persist) storage.setItem(storageKey, v);
    return v;
  }
  if (persist) {
    const stored = storage.getItem(storageKey);
    if (stored != null) return stored;
  }
  return defaultValue;
}

export const appParams = {
  // Placeholder for future use.
  flags: getParam("flags", { defaultValue: "", persist: true }),
};
