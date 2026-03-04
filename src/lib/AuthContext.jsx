// src/lib/AuthContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // No-op auth state
  const [isLoadingAuth] = useState(false);
  const [isLoadingPublicSettings] = useState(false);

  const value = useMemo(
    () => ({
      isLoadingAuth,
      isLoadingPublicSettings,

      // authError contract used by App.jsx
      authError: null,

      // called by App.jsx; keep as a safe no-op
      navigateToLogin: () => {
        // intentionally blank
      },

      // optional helpers
      user: null,
      isAuthed: false,
      logout: async () => {},
    }),
    [isLoadingAuth, isLoadingPublicSettings]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within <AuthProvider />");
  }
  return ctx;
}
