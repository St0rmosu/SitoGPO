'use client';

import { motion } from 'framer-motion';
import products from '@/lib/products.json';

export default function HeroCarousel() {
  const heroProduct = products[0];
  
  return (
    <section className="relative h-screen overflow-hidden bg-stone-900">
      <div className="relative h-full">
        <motion.img
          src={heroProduct.dopo}
          alt={heroProduct.nome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                DOPO
              </span>
              <span className="text-white/80 text-sm">
                Trasformazione sorprendente
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Diamo una seconda vita ai mobili dimenticati
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ogni pezzo ha una storia unica da raccontare
            </p>
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:scale-105">
              Scopri la Collezione
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}