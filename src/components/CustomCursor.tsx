"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    let counter = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      counter++;
      if (counter % 2 === 0) {
        setTrail((prev) => [
          ...prev.slice(-12),
          { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() },
        ]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden select-none">
      {/* Glowing Trail Particles */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length;
        const scale = ((index + 1) / trail.length) * 0.8;
        return (
          <motion.div
            key={point.id}
            initial={{ opacity: opacity * 0.6, scale }}
            animate={{ opacity: 0, scale: scale * 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              left: point.x,
              top: point.y,
            }}
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/40 blur-[3px]"
          />
        );
      })}

      {/* Main Cursor Follower — Logo Arrow Icon */}
      <motion.div
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.35 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.3,
        }}
        className="absolute h-8 w-8 drop-shadow-[0_0_12px_rgba(35,95,230,0.5)]"
      >
        <Image
          src="/herald-ago-icon.svg"
          alt="Herald Ago Cursor"
          width={32}
          height={32}
          className="h-full w-full object-contain"
        />
      </motion.div>
    </div>
  );
}
