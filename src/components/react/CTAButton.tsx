import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  ariaLabel?: string;
  icon?: boolean;
}

export default function CTAButton({
  href = '#contacto',
  children,
  variant = 'primary',
  size = 'lg',
  ariaLabel,
  icon = true,
}: CTAButtonProps) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950';

  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-[15px] sm:text-base',
  };

  const variants = {
    primary:
      'bg-accent-500 text-white shadow-[0_8px_30px_-8px_rgba(77,124,254,0.5)] hover:bg-accent-600 dark:hover:bg-accent-400',
    ghost:
      'border border-zinc-200 dark:border-white/15 bg-white/60 dark:bg-white/[0.02] text-zinc-800 dark:text-zinc-100 backdrop-blur-md hover:border-zinc-300 dark:hover:border-white/30 hover:bg-zinc-50 dark:hover:bg-white/[0.05]',
  };

  if (!hasMounted) {
    return (
      <a
        href={href}
        aria-label={ariaLabel ?? (typeof children === 'string' ? children : undefined)}
        className={`${base} ${sizes[size]} ${variants[variant]}`}
      >
        <span className="relative z-10">{children}</span>

        {icon && (
          <span aria-hidden="true" className="relative z-10 inline-flex">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </a>
    );
  }

  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel ?? (typeof children === 'string' ? children : undefined)}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
      initial={reduce ? false : { y: 14, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
    >
      {/* Glow ring on hover — primary only */}
      {variant === 'primary' && !reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(77,124,254,0.55), transparent 70%)' }}
        />
      )}

      <span className="relative z-10">{children}</span>

      {icon && (
        <motion.span
          aria-hidden="true"
          className="relative z-10 inline-flex"
          initial={false}
          animate={{ x: 0 }}
          whileHover={reduce ? undefined : { x: 4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </motion.span>
      )}
    </motion.a>
  );
}
