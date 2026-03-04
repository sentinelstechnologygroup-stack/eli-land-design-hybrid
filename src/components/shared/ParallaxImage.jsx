"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "",
  speed = 0.3,
  overlay = true,
  overlayOpacity = 0.2
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distFromCenter = elementCenter - windowHeight / 2;
      setOffset(distFromCenter * speed * -1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover absolute top-0 left-0 parallax-slow"
        style={{ transform: `translateY(${offset}px)` }}
        loading="lazy"
      />
      {overlay && (
        <div 
          className="absolute inset-0 bg-[#1F2E23]" 
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}