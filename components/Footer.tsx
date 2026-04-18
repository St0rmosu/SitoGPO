'use client';

import Link from 'next/link';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-midnight text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Hammer className="w-4 h-4 text-terracotta-light" />
              </div>
              <span className="text-lg font-serif font-semibold text-cream">
                L&apos;Impatto Visivo
              </span>
            </Link>
            <p className="text-cream/70 text-sm">
              Mobili rigenerati con cura artigianale
            </p>
            <div className="flex gap-2 mt-3">
              <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors">
                <FaInstagram className="w-4 h-4 text-cream" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors">
                <FaFacebook className="w-4 h-4 text-cream" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream font-serif font-semibold mb-3 text-sm">Contatti</h4>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span className="text-cream/80 text-sm">Putignano, Italia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta" />
                <a href="tel:+393713244193" className="text-cream/80 hover:text-terracotta transition-colors text-sm">+39 371 324 4193</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta" />
                <a href="mailto:info@limpattovisivo.it" className="text-cream/80 hover:text-terracotta transition-colors text-sm">info@limpattovisivo.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-4 pt-4">
          <p className="text-center text-cream/50 text-xs">
            &copy; {new Date().getFullYear()} L&apos;Impatto Visivo
          </p>
        </div>
      </div>
    </footer>
  );
}