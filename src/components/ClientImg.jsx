// location: components/ClientImg.jsx

import React, { useState } from "react";

export default function ClientImg({ src, alt = "", className = "", ...props }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`bg-[#E5DED4] flex items-center justify-center ${className}`}
        {...props}
      >
        <span className="text-[#1F2E23]/20 text-xs font-sans-clean">Image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
}