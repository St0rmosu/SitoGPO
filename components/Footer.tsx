'use client';

import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">L'Impatto Visivo</span>
            </Link>
            <p className="text-stone-400 mb-4">
              Diamo una seconda vita ai mobili dimenticati, riducendo l'impatto ambientale 
              e creando pezzi unici per la tua casa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-green-500 transition-colors">Shop</Link></li>
              <li><Link href="/processo" className="hover:text-green-500 transition-colors">Il Nostro Processo</Link></li>
              <li><Link href="/su-misura" className="hover:text-green-500 transition-colors">Servizio Su Misura</Link></li>
              <li><Link href="/sostenibilita" className="hover:text-green-500 transition-colors">Sostenibilità</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Milano, Italia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+39 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>info@limpattovisivo.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500">
          <p>&copy; {new Date().getFullYear()} L'Impatto Visivo. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}