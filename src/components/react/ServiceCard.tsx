import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { useRef } from 'react';

interface ServiceCardProps {
  index: number;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  iconPath: string;
}

export default function ServiceCard({
  index,
  number,
  title,
  description,
  bullets,
  iconPath,
}: ServiceCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.4 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-4deg', '4deg']);

  // Spotlight position (CSS vars)
  const sx = useMotionValue('50%');
  const sy = useMotionValue('50%');

  const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    sx.set(`${px * 100}%`);
    sy.set(`${py * 100}%`);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-white/70 to-zinc-50/50 dark:from-white/[0.04] dark:to-white/[0.01] p-7 backdrop-blur-xl transition-all duration-500 hover:border-zinc-300 dark:hover:border-white/20 shadow-sm md:p-8"
    >
      {/* Spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(420px circle at var(--sx) var(--sy), rgba(77,124,254,0.06), transparent 70%)',
          ['--sx' as never]: sx,
          ['--sy' as never]: sy,
        }}
      />

      {/* Header row */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.03] text-accent-500 dark:text-accent-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={iconPath} />
          </svg>
        </div>
        <span className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-500">{number}</span>
      </div>

      <h3 className="relative z-10 mt-7 font-display text-fluid-xl font-semibold leading-tight text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="relative z-10 mt-3 text-fluid-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
        {description}
      </p>

      <ul className="relative z-10 mt-6 space-y-2.5 border-t border-zinc-200 dark:border-white/5 pt-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 flex-none text-accent-500 dark:text-accent-400"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Bottom hairline accent */}
      <div className="relative z-10 mt-auto pt-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/15 to-transparent" />
      </div>
    </motion.div>
  );
}
