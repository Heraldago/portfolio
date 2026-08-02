"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  src: string | null;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close image lightbox"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground border border-border hover:bg-lime hover:text-lime-fg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full min-w-[300px] overflow-auto p-2">
            <img src={src} alt={alt} className="h-auto w-full max-w-full object-contain rounded-xl" />
          </div>
          <div className="p-4 border-t border-border bg-surface font-mono text-xs text-muted-fg text-center">
            {alt}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
