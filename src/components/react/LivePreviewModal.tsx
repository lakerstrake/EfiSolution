import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

export default function LivePreviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ url: string; title: string }>;
      if (customEvent.detail) {
        setUrl(customEvent.detail.url);
        setTitle(customEvent.detail.title);
        setDevice('desktop');
        setIsLoading(true);
        setIsOpen(true);
        setIframeKey(prev => prev + 1);
        // Lock body scroll
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('open-preview', handleOpen);
    return () => {
      window.removeEventListener('open-preview', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setUrl('');
    setTitle('');
    // Restore body scroll
    document.body.style.overflow = '';
  };

  // Listen to Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  // Dynamic classes for simulated device shells
  const getDeviceContainerClass = () => {
    const base = "relative transition-all duration-500 ease-out flex flex-col bg-zinc-950 overflow-hidden";
    if (device === 'desktop') {
      return `${base} w-full h-full rounded-2xl border border-zinc-200/50 dark:border-white/10 shadow-2xl`;
    }
    if (device === 'tablet') {
      return `${base} w-[768px] h-[92%] max-w-full rounded-[2.5rem] border-[12px] border-zinc-900 shadow-soft-xl`;
    }
    if (device === 'mobile') {
      return `${base} w-[375px] h-[82%] max-w-full rounded-[2.5rem] border-[12px] border-zinc-900 shadow-soft-xl`;
    }
    return base;
  };

  // Simple display of the simplified URL
  const getDisplayUrl = () => {
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return url;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/50 dark:bg-black/75 backdrop-blur-md p-4 md:p-6 select-none">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-default" onClick={handleClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center"
          >
            {/* Top Toolbar (Device Selector + Actions) */}
            <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200/50 dark:border-white/10 bg-white/90 dark:bg-zinc-950/90 p-3 shadow-md backdrop-blur-md">
              
              {/* Left: Project title & details */}
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {title}
                </span>
                <span className="hidden text-xs text-zinc-500 sm:inline">
                  — Vista en vivo
                </span>
              </div>

              {/* Center: Device size toggler */}
              <div className="flex items-center gap-1.5 rounded-xl bg-zinc-100 dark:bg-white/[0.03] p-1">
                {[
                  { type: 'desktop', label: 'Escritorio', icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  )},
                  { type: 'tablet', label: 'Tablet', icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" transform="rotate(90 12 12)"/><circle cx="12" cy="18" r="1"/></svg>
                  )},
                  { type: 'mobile', label: 'Celular', icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>
                  )}
                ].map((d) => (
                  <button
                    key={d.type}
                    type="button"
                    onClick={() => setDevice(d.type as DeviceType)}
                    className={`flex h-8 items-center gap-2 rounded-lg px-3 text-xs font-medium transition-all ${
                      device === d.type
                        ? 'bg-white dark:bg-zinc-800 text-accent-500 dark:text-white shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    {d.icon}
                    <span className="hidden md:inline">{d.label}</span>
                  </button>
                ))}
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRefresh}
                  title="Recargar página"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/[0.08] dark:hover:text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.72 2.78L21 8" />
                    <polyline points="21 3 21 8 16 8" />
                  </svg>
                </button>
                
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir en nueva pestaña"
                  className="flex h-8 items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] px-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/[0.08] dark:hover:text-white transition-colors"
                >
                  <span className="hidden sm:inline">Visitar sitio</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="flex h-8 items-center justify-center gap-1 rounded-xl bg-red-500/10 dark:bg-red-500/15 px-3 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-colors"
                >
                  <span>Cerrar</span>
                  <kbd className="hidden rounded bg-black/10 dark:bg-white/10 px-1 font-mono text-[9px] uppercase tracking-normal sm:inline">ESC</kbd>
                </button>
              </div>
            </div>

            {/* Simulated Device Screen Area */}
            <div className="flex h-[80vh] w-full items-center justify-center">
              <div className={getDeviceContainerClass()}>
                
                {/* Browser address bar / notch mockup (only visible if desktop or inside screen) */}
                <div className="flex h-11 w-full items-center justify-between border-b border-zinc-200/80 dark:border-white/5 bg-zinc-100 dark:bg-zinc-950 px-4">
                  {/* Window buttons */}
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/35 dark:bg-red-500/20 border border-red-500/25"></span>
                    <span className="h-3 w-3 rounded-full bg-amber-500/35 dark:bg-amber-500/20 border border-amber-500/25"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500/35 dark:bg-green-500/20 border border-green-500/25"></span>
                  </div>
                  
                  {/* Dynamic address bar */}
                  <div className="flex h-6.5 w-1/2 max-w-md items-center justify-center gap-1.5 rounded-md bg-white dark:bg-white/[0.04] border border-zinc-200/50 dark:border-white/5 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono tracking-tight shadow-sm select-text">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>https://</span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{getDisplayUrl()}</span>
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="w-12"></div>
                </div>

                {/* Actual Frame Content */}
                <div className="relative flex-1 bg-white">
                  {/* Dynamic loading spinner */}
                  {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 gap-4 transition-opacity duration-300">
                      <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-zinc-200 border-t-accent-500 dark:border-zinc-800 dark:border-t-accent-400"></div>
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                        Cargando entorno seguro...
                      </p>
                    </div>
                  )}

                  {url && (
                    <iframe
                      key={iframeKey}
                      src={url}
                      onLoad={() => setIsLoading(false)}
                      className="h-full w-full border-0 select-text"
                      title={title}
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
