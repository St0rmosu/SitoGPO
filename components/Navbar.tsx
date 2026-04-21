'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaCouch } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Collezione' },
  { href: '/processo', label: 'Processo' },
  { href: '/su-misura', label: 'Su Misura' },
  { href: '/sostenibilita', label: 'Sostenibilità' },
];

const getPageColors = (pathname: string) => {
  switch (pathname) {
    case '/': return { bg: 'bg-cream', active: 'bg-terracotta', text: 'text-midnight', activeText: 'text-cream', border: 'border-sand/30', icon: 'text-terracotta' };
    case '/shop': return { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10', icon: 'text-terracotta' };
    case '/processo': return { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10', icon: 'text-terracotta' };
    case '/su-misura': return { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10', icon: 'text-terracotta' };
    case '/sostenibilita': return { bg: 'bg-sage', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-cream/10', icon: 'text-terracotta' };
    default: return { bg: 'bg-cream', active: 'bg-terracotta', text: 'text-midnight', activeText: 'text-cream', border: 'border-sand/30', icon: 'text-terracotta' };
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const colors = getPageColors(pathname);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:hidden">
        <div className={`flex items-center justify-between gap-3 ${colors.bg} border ${colors.border} rounded-full shadow-lg px-4 py-3`}>
          <Link href="/" className="flex items-center gap-2">
            <FaCouch className={`w-5 h-5 ${colors.icon} flex-shrink-0`} />
            <span className={`text-sm font-serif font-semibold ${colors.text}`}>Re-Life</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 ${colors.text} hover:bg-black/10 rounded-full transition-colors flex-shrink-0`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-sm"
          >
            <div className={`${colors.bg} border ${colors.border} rounded-2xl shadow-xl overflow-hidden`}>
              <div className="p-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const linkColors = getPageColors(link.href);
                  const isDarkPage = ['/shop', '/processo', '/su-misura'].includes(pathname);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                        isActive 
                          ? `${linkColors.active} ${linkColors.activeText} font-semibold` 
                          : isDarkPage 
                            ? 'text-white/70 hover:text-white hover:bg-white/10'
                            : `${colors.text}/70 hover:${colors.text} hover:bg-black/10`
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex">
        <div className={`flex items-center gap-1 ${colors.bg} border ${colors.border} rounded-full shadow-lg px-3 py-2`}>
          <Link href="/" className={`flex items-center gap-1.5 px-3 py-1.5 group rounded-full hover:bg-black/5 transition-colors ${colors.text}`}>
            <span className={`text-base font-serif font-semibold tracking-wide ${colors.text}`}>Re-Life</span>
          </Link>

          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive ? colors.activeText : colors.text
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-bg"
                      className={`absolute inset-0 ${colors.active} rounded-full`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}