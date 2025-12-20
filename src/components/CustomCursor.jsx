import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Scale up cursor when hovering over buttons, links, or cards
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest(".group")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* 1. The Precision Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* 2. The Trailing Ring */}
      <div
        className={`fixed top-0 left-0 w-10 h-10 border border-indigo-500/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering ? "scale-[1.5] bg-indigo-500/10 border-indigo-400" : "scale-100"}
          ${isClicking ? "scale-[0.8]" : ""}
        `}
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
        }}
      >
        {/* Subtle inner glow for AI feel */}
        <div className={`w-full h-full rounded-full blur-[8px] bg-indigo-500/5 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </>
  );
}