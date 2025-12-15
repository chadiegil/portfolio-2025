'use client';

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    let cursorScale = 1;
    let followerScale = 1;
    let raf: number | null = null;

    const updateFollower = () => {
      followerX += (cursorX - followerX) * 0.3;
      followerY += (cursorY - followerY) * 0.3;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%) scale(${followerScale})`;

      if (Math.abs(cursorX - followerX) > 0.1 || Math.abs(cursorY - followerY) > 0.1) {
        raf = requestAnimationFrame(updateFollower);
      } else {
        raf = null;
      }
    };

    const move = (event: MouseEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      
      // INSTANT update - single optimized transform, no delays, no chaining
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${cursorScale})`;
      
      if (raf === null) {
        raf = requestAnimationFrame(updateFollower);
      }
    };

    const handleDown = () => {
      cursorScale = 0.85;
      followerScale = 1.1;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${cursorScale})`;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%) scale(${followerScale})`;
    };

    const handleUp = () => {
      cursorScale = 1;
      followerScale = 1;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${cursorScale})`;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%) scale(${followerScale})`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
      }
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

