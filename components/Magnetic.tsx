"use client";

import { useRef, ReactNode } from "react";

// Wrap a button/link: it leans toward the cursor on hover, eases back on leave.
export default function Magnetic({
  children,
  strength = 0.4,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function move(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  return (
    <span ref={ref} className="magnetic" onMouseMove={move} onMouseLeave={reset}>
      {children}
    </span>
  );
}
