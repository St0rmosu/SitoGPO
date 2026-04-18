'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hammer } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Collezione' },
  { href: '/processo', label: 'Processo' },
  { href: '/su-misura', label: 'Su Misura' },
  { href: '/sostenibilita', label: 'Sostenibilità' },
  { href: '/logistica', label: 'Logistica' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
              <Hammer className="w-4 h-4 text-terracotta" />
            </div>
            <span className="text-base font-serif font-semibold text-midnight">
              L&apos;Impatto Visivo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-midnight/80 hover:text-terracotta transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-midnight"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-sand/20"
          >
            <div className="px-4 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-midnight hover:text-terracotta font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}