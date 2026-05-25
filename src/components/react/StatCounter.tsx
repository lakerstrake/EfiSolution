import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

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
  const reduce  = useReducedMotion();
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-60px' });

  const motionValue = useMotionValue(0);
  // Spring animates from 0 → value when inView fires
  const spring  = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) =>
    `${prefix}${v.toLocaleString('es-CO', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`,
  );

  useEffect(() => {
    // Only trigger the spring animation when the element enters the viewport.
    // In reduced-motion mode the static value is rendered directly (see JSX below)
    // so the spring runs but is never rendered — still, we skip the set call
    // to avoid unnecessary work.
    if (inView && !reduce) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue, reduce]);

  // Format the static value the same way for consistency
  const staticDisplay = `${prefix}${value.toLocaleString('es-CO', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

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
