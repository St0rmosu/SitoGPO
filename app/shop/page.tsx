'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import products from '@/lib/products.json';
import { Filter, ChevronDown } from 'lucide-react';

const categories = ['Tutti', 'Scrivanie', 'Comò', 'Librerie', 'Tavolini', 'Armadi', 'Tavoli', 'Poltrone', 'Credenze', 'Letti'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = selectedCategory === 'Tutti'
    ? products
    : products.filter(p => p.categoria === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent pointer-events-none z-10" />
        
        <section className="relative bg-midnight py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,224,213,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 bg-terracotta/20 text-terracotta text-sm font-medium tracking-wide rounded-full mb-6">
                Catalogo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream mb-4 leading-tight">
                La Nostra Collezione
              </h1>
              <p className="text-lg md:text-xl text-cream/60">
                Pezzi unici rigenerati con cura artigianale
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="bg-cream min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              {selectedCategory !== 'Tutti' && (
                <span className="text-midnight/60 text-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'pezzo' : 'pezzi'} in <span className="text-terracotta font-medium">{selectedCategory}</span>
                </span>
              )}
              {selectedCategory === 'Tutti' && (
                <span className="text-midnight/50 text-sm">
                  {filteredProducts.length} pezzi in collezione
                </span>
              )}
            </div>

            <button 
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-cream-dark border border-sand/30 rounded-full text-midnight text-sm font-medium hover:border-terracotta/50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filtra</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
          
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div className="flex flex-wrap gap-2 py-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setFiltersOpen(false);
                      }}
                      className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-midnight text-cream'
                          : 'bg-cream-dark text-midnight/70 border border-sand/30 hover:border-terracotta/50 hover:text-terracotta'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-midnight/40 text-lg">Nessun mobile in questa categoria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}