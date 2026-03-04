// src/lib/query-client.js
import { QueryClient } from "@tanstack/react-query";

// Single shared instance for the app.
// Safe defaults; can be tuned later.
export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
