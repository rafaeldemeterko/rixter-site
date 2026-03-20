"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  durationMs?: number;
};

function parseNumericPlus(value: string) {
  const match = value.match(/^(\d+)\+$/);
  if (!match) {
    return null;
  }

  return Number(match[1]);
}

export function AnimatedStatValue({
  value,
  durationMs = 1300,
}: AnimatedStatValueProps) {
  const target = useMemo(() => parseNumericPlus(value), [value]);
  const [current, setCurrent] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = valueRef.current;
    if (!node || hasEnteredView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) {
      return;
    }

    if (target === null) {
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [durationMs, hasEnteredView, target]);

  if (target === null) {
    return (
      <span
        ref={valueRef}
        className={`inline-block transition-opacity duration-150 ease-out ${
          hasEnteredView ? "opacity-100" : "opacity-0"
        }`}
      >
        {value}
      </span>
    );
  }

  return (
    <span
      ref={valueRef}
      className={`inline-block transition-opacity duration-150 ease-out ${
        hasEnteredView ? "opacity-100" : "opacity-0"
      }`}
    >
      {`${current}+`}
    </span>
  );
}
