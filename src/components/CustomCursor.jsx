import { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -200, y: -200 });
  const ringPos  = useRef({ x: -200, y: -200 });
  const hover    = useRef(false);
  const clicking = useRef(false);
  const rafId    = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      const el = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      hover.current = !!el;
    };

    const onDown = () => { clicking.current = true; };
    const onUp   = () => { clicking.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    // Smooth animation loop
    const animate = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) { rafId.current = requestAnimationFrame(animate); return; }

      const { x, y } = pos.current;

      // Dot follows instantly
      const dotSize   = hover.current ? 40 : 8;
      const dotOffset = dotSize / 2;
      dot.style.transform = `translate(${x - dotOffset}px, ${y - dotOffset}px) scale(${clicking.current ? 0.75 : 1})`;
      dot.style.width  = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.background   = hover.current ? "transparent"  : "#6366f1";
      dot.style.border       = hover.current ? "1.5px solid #6366f1" : "1.5px solid transparent";
      dot.style.mixBlendMode = hover.current ? "normal" : "normal";

      // Ring lerps behind
      const lerpSpeed = 0.12;
      ringPos.current.x += (x - ringPos.current.x) * lerpSpeed;
      ringPos.current.y += (y - ringPos.current.y) * lerpSpeed;
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px) scale(${hover.current ? 1.6 : 1})`;

      // Glow orb lerps slowly
      const glowSpeed = 0.05;
      ringPos.current.gx = ringPos.current.gx || -200;
      ringPos.current.gy = ringPos.current.gy || -200;
      ringPos.current.gx += (x - ringPos.current.gx) * glowSpeed;
      ringPos.current.gy += (y - ringPos.current.gy) * glowSpeed;
      
      const glowOrb = document.getElementById("cursor-glow-orb");
      if (glowOrb) {
        glowOrb.style.transform = `translate(${ringPos.current.gx - 200}px, ${ringPos.current.gy - 200}px)`;
        glowOrb.style.opacity = hover.current ? "0.6" : "0.3";
      }

      rafId.current = requestAnimationFrame(animate);

    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <style>{`
        body, a, button, [role='button'] {
          cursor: none !important;
        }
      `}</style>
      
      {/* Light Source Orb */}
      <div
        id="cursor-glow-orb"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 9997,
          mixBlendMode: "screen",
          transition: "opacity 0.5s ease",
          willChange: "transform",
        }}
      />

      {/* Outer ring — lerps behind */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(99,102,241,0.45)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.08s ease, opacity 0.2s",
          willChange: "transform",
        }}
      />

      {/* Center dot — follows instantly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#6366f1",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.18s ease, height 0.18s ease, background 0.18s ease, border 0.18s ease, transform 0.06s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
