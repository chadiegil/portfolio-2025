'use client';

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let raf: number;

    const move = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      raf = requestAnimationFrame(() => {
        cursor.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%) scale(1)`;
        follower.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%) scale(1)`;
      });
    };

    const handleDown = () => {
      cursor.style.transform = cursor.style.transform.replace(
        /scale\([^)]+\)/,
        "scale(0.85)",
      );
      follower.style.transform = follower.style.transform.replace(
        /scale\([^)]+\)/,
        "scale(1.1)",
      );
    };

    const handleUp = () => {
      cursor.style.transform = cursor.style.transform.replace(
        /scale\([^)]+\)/,
        "scale(1)",
      );
      follower.style.transform = follower.style.transform.replace(
        /scale\([^)]+\)/,
        "scale(1)",
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="custom-cursor custom-cursor__follower" />
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
}

