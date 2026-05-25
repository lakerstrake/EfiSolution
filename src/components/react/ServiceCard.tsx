import { motion, useReducedMotion } from 'framer-motion';

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

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group surface flex h-full w-full flex-col p-7 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-accent-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-accent-400">
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
        </span>
        <span className="font-mono text-xs text-zinc-500">{number}</span>
      </div>

      <h3 className="mt-6 font-display text-fluid-xl font-semibold leading-tight text-zinc-900 dark:text-white">{title}</h3>

      <p className="mt-3 text-fluid-sm leading-relaxed text-zinc-700 dark:text-zinc-400">{description}</p>

      <ul className="mt-6 space-y-2 border-t border-zinc-200/80 pt-6 dark:border-white/10">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 flex-none text-accent-500"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
