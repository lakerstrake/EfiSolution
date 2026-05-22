import { motion, useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
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
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) =>
    `${prefix}${v.toLocaleString('es-MX', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`,
  );

  useEffect(() => {
    if (inView) motionValue.set(reduce ? value : value);
  }, [inView, value, motionValue, reduce]);

  return (
    <div ref={ref} className="flex flex-col">
      <motion.div className="font-display text-fluid-4xl font-semibold tracking-tightest text-white">
        {reduce ? `${prefix}${value}${suffix}` : <motion.span>{display}</motion.span>}
      </motion.div>
      <span className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}
