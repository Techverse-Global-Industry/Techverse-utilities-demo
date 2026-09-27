"use client";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [interactive, setInteractive] = useState(false);
  const [three, setThree] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const onOver = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      setInteractive(Boolean(target?.closest("a,button,input,textarea,select,[data-cursor='interactive']")));
      setThree(Boolean(target?.closest("[data-cursor='3d']")));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block" style={{ transform: `translate3d(${position.x}px,${position.y}px,0)` }} aria-hidden>
      <div className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur-sm transition-all ${interactive || three ? "h-12 w-12" : "h-4 w-4"}`}>
        {three ? <span className="absolute inset-0 grid place-items-center text-[8px] font-bold tracking-widest text-brand-500">VIEW</span> : null}
      </div>
      <div className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500" />
    </div>
  );
}
