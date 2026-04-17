'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    before: products[0]?.prima || 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1920&h=1080&fit=crop',
    after: products[0]?.dopo || 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1920&h=1080&fit=crop',
    title: 'Trasformazione',
    subtitle: 'Da mobile dimenticato a pezzo unico'
  },
  {
    before: products[2]?.prima || 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1920&h=1080&fit=crop',
    after: products[2]?.dopo || 'https://images.unsplash.com/photo-1593079831268-33813b3f9c5e?w=1920&h=1080&fit=crop',
    title: 'Rinascita',
    subtitle: 'Ogni mobile ha una storia da raccontare'
  },
  {
    before: products[4]?.prima || 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=1920&h=1080&fit=crop',
    after: products[4]?.dopo || 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1920&h=1080&fit=crop',
    title: 'Sostenibilità',
    subtitle: 'Riduciamo l\'impatto ambientale insieme'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAfter, setIsAfter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAfter(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAfter(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAfter(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <motion.img
              key={`${current}-${isAfter}`}
              src={isAfter ? slides[current].after : slides[current].before}
              alt={slides[current].title}
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
                    {isAfter ? 'DOPO' : 'PRIMA'}
                  </span>
                  <span className="text-white/80 text-sm">
                    {slides[current].subtitle}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slides[current].title}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Trasformiamo mobili dimenticati in pezzi unici per la tua casa
                </p>
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:scale-105">
                  Scopri la Collezione
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setIsAfter(false); }}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-green-500 w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}