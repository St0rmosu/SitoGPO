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

const pageColors: Record<string, { bg: string; active: string; text: string; activeText: string; border: string }> = {
  '/': { bg: 'bg-cream', active: 'bg-terracotta', text: 'text-midnight', activeText: 'text-cream', border: 'border-sand/30' },
  '/shop': { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10' },
  '/processo': { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10' },
  '/su-misura': { bg: 'bg-midnight', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-white/10' },
  '/sostenibilita': { bg: 'bg-sage', active: 'bg-cream', text: 'text-cream', activeText: 'text-midnight', border: 'border-cream/10' },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const colors = pageColors[pathname] || pageColors['/'];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex items-center gap-1 ${colors.bg} border ${colors.border} rounded-full shadow-lg px-2 py-1.5`}>
          <Link href="/" className={`flex items-center gap-2 px-2 py-1.5 group rounded-full hover:bg-white/10 transition-colors ${colors.text}`}>
            <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
              <FaCouch className="w-5 h-5 text-terracotta" />
            </div>
            <span className={`text-sm font-serif font-semibold ${colors.text}`}>L'Impatto Visivo</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${colors.text} hover:bg-white/10 rounded-full transition-colors`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            <div className="bg-midnight border border-white/10 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-2 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2.5 px-4 rounded-xl font-medium transition-colors ${
                        isActive 
                          ? 'text-terracotta bg-white/10' 
                          : 'text-cream/70 hover:text-cream hover:bg-white/5'
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
    </>
  );
}