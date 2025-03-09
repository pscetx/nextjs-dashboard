"use client";

import { useEffect, useState } from "react";

export default function ElegantCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const clickEffect = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickEffect);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickEffect);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full transition-transform duration-100 ease-out 
        ${clicked ? "bg-amber-800" : "bg-gray-500"} opacity-80`}
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        zIndex: 9999,
      }}
    />
  );
}
