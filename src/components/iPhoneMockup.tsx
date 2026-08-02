"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

interface iPhoneMockupProps {
  src?: string;
  alt: string;
  label: string;
  desc: string;
  onClick?: () => void;
}

export default function IPhoneMockup({
  src,
  alt,
  label,
  desc,
  onClick,
}: iPhoneMockupProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col items-center space-y-4 p-4 rounded-3xl border border-border bg-surface/80 backdrop-blur-md transition-all duration-300 ${
        src ? "cursor-pointer hover:border-lime hover:shadow-[0_15px_35px_rgba(212,255,0,0.12)] hover:-translate-y-1" : ""
      }`}
    >
      {/* Realistic iPhone 14 Pro Chassis */}
      <div className="relative w-full max-w-[240px] aspect-[9/19.5] rounded-[44px] border-[5px] border-[#22252A] bg-[#000000] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 overflow-hidden select-none">
        {/* Dynamic Island Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-5 w-24 rounded-full bg-black flex items-center justify-between px-2.5 shadow-md">
          <div className="h-2.5 w-2.5 rounded-full bg-[#111] border border-white/10" />
          <div className="h-2 w-2 rounded-full bg-[#0a0a0f]" />
        </div>

        {/* Speaker Slot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-1 w-10 rounded-full bg-[#1e1e1e]" />

        {/* Screen Content Viewport */}
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#090A0C]">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center space-y-2 bg-gradient-to-b from-[#111318] to-[#090A0C]">
              <Sparkles className="h-6 w-6 text-lime animate-pulse" />
              <p className="font-mono text-xs font-bold text-foreground">{label}</p>
              <p className="text-[10px] text-muted-fg leading-tight">{desc}</p>
            </div>
          )}

          {/* Screen Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 h-1 w-28 rounded-full bg-white/40" />
      </div>

      {/* Screen Info Caption */}
      <div className="text-center space-y-1 max-w-[240px]">
        <h4 className="font-display text-sm font-bold text-foreground group-hover:text-lime transition-colors">
          {label}
        </h4>
        <p className="text-[11px] text-muted-fg leading-relaxed line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
