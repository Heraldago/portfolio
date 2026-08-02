"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
}

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsDesktop(true);
    document.body.classList.add("custom-cursor-active");

    let bubbleId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      // Spawn floating bubbles along movement trajectory
      const randomSize = Math.floor(Math.random() * 10) + 6; // 6px to 16px bubbles
      const vx = (Math.random() - 0.5) * 1.5;
      const vy = -Math.random() * 1.8 - 0.5; // slight upward drift

      setBubbles((prev) => [
        ...prev.slice(-20), // keep last 20 bubbles
        { id: bubbleId++, x, y, size: randomSize, vx, vy },
      ]);
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
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden select-none">
      {/* Floating Bubbles Motion Trail */}
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{
              x: b.x - b.size / 2,
              y: b.y - b.size / 2,
              opacity: 0.85,
              scale: 1,
            }}
            animate={{
              x: b.x + b.vx * 15 - b.size / 2,
              y: b.y + b.vy * 18 - b.size / 2,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{ width: b.size, height: b.size }}
            className="absolute rounded-full border border-white/60 bg-lime/30 backdrop-blur-[1px] shadow-[0_0_8px_rgba(35,95,230,0.5)]"
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor: Compact Logo with White Border */}
      <motion.div
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: isHovered ? 1.3 : 1,
          rotate: isHovered ? 12 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 450,
          mass: 0.2,
        }}
        className="absolute flex h-6 w-6 items-center justify-center rounded-lg border-[1.5px] border-white bg-[#235fe6] p-1 shadow-[0_0_12px_rgba(35,95,230,0.6)]"
      >
        <Image
          src="/herald-ago-icon.svg"
          alt="Herald Ago Logo Pointer"
          width={18}
          height={18}
          className="h-full w-full object-contain filter brightness-200"
        />
      </motion.div>
    </div>
  );
}
