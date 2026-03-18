"use client";

import { useEffect, useMemo, useState } from "react";

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

  useEffect(() => {
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
  }, [durationMs, target]);

  if (target === null) {
    return <>{value}</>;
  }

  return <>{`${current}+`}</>;
}

