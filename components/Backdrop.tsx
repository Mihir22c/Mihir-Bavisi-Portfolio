"use client";

import { useMemo } from "react";

// Site-wide ambient layer: drifting beams + rising particles. Rendered once.
export default function Backdrop() {
  const dots = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        dur: 12 + Math.random() * 16,
        delay: -Math.random() * 20,
      })),
    []
  );

  return (
    <div className="backdrop" aria-hidden="true">
      <span className="beam b1" />
      <span className="beam b2" />
      <span className="beam b3" />
      {dots.map((d, i) => (
        <span
          key={i}
          className="dot"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
