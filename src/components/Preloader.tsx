"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable preloader on touch/mobile devices for instant loading on iOS Safari
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setLoading(false);
      return;
    }

    try {
      const hasLoaded = sessionStorage.getItem("hasLoadedPreloader");
      if (hasLoaded) {
        setLoading(false);
        return;
      }
    } catch {
      // Fallback if sessionStorage is disabled on Safari private mode
    }

    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("hasLoadedPreloader", "true");
      } catch {
        // Ignore quota/privacy errors
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background select-none pointer-events-none"
        >
          {/* Ambient Glowing Background Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.2, 0.7, 0], scale: [0.6, 1.4, 2.5] }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute h-96 w-96 rounded-full bg-lime/20 blur-[120px]"
          />

          {/* Rotating Logo Icon & Glow */}
          <div className="relative flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.3, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0.3, 1.1, 1],
                rotate: [0, 180, 360],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-24 w-24 drop-shadow-[0_0_35px_rgba(35,95,230,0.4)]"
            >
              <Image
                src="/herald-ago-icon.svg"
                alt="Herald Ago Preloader Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Glowing Animated Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: ["0px", "160px", "220px"], opacity: [0, 1, 0.9] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-8 h-[2.5px] rounded-full bg-lime shadow-[0_0_15px_rgba(35,95,230,0.6)]"
            />

            {/* Subtitle Typography */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-lime drop-shadow-[0_0_10px_rgba(35,95,230,0.3)]"
            >
              HERALD AGO · DIGITAL PRODUCTS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
