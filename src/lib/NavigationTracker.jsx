// src/lib/NavigationTracker.jsx

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // no-op (intentionally)
    void location;
  }, [location]);

  return null;
}
