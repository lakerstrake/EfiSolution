import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
}: StatCounterProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const staticDisplay = `${prefix}${value.toFixed(decimals)}${suffix}`;

  if (!hasMounted) {
    return (
      <div ref={ref} className="flex flex-col">
        <div
          className="font-display text-fluid-4xl font-semibold tracking-tightest text-zinc-900 dark:text-white"
          aria-label={`${staticDisplay} — ${label}`}
        >
          <span>{staticDisplay}</span>
        </div>
        <span
          aria-hidden="true"
          className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500"
        >
          {label}
        </span>
      </div>
    );
  }

  const reduce  = useReducedMotion();
  const inView  = useInView(ref, { once: true, margin: '-60px' });

  const motionValue = useMotionValue(0);
  const spring  = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) =>
    `${prefix}${v.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (inView && !reduce) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue, reduce]);

  return (
    <div ref={ref} className="flex flex-col">
      <div
        className="font-display text-fluid-4xl font-semibold tracking-tightest text-zinc-900 dark:text-white"
        aria-label={`${staticDisplay} — ${label}`}
      >
        {reduce ? (
          <span>{staticDisplay}</span>
        ) : (
          <motion.span aria-hidden="true">{display}</motion.span>
        )}
      </div>
      <span
        aria-hidden="true"
        className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500"
      >
        {label}
      </span>
    </div>
  );
}
