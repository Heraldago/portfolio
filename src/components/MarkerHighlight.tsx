"use client";

import { useEffect, useRef, useState } from "react";

interface MarkerHighlightProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MarkerHighlight({
  children,
  delay = 0,
}: MarkerHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          timer = setTimeout(() => {
            setVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <span
      ref={ref}
      className={`inline bg-gradient-to-r from-sky-300/75 to-sky-300/75 dark:from-sky-400/45 dark:to-sky-400/45 bg-no-repeat bg-[position:0_95%] pb-[1px] transition-[background-size] duration-700 ease-out ${
        visible ? "bg-[length:100%_2px]" : "bg-[length:0%_2px]"
      }`}
    >
      {children}
    </span>
  );
}
