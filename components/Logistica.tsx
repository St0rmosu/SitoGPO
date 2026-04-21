'use client';

import { motion } from 'framer-motion';
import { Truck, Package, RotateCcw } from 'lucide-react';

const logisticsFeatures = [
  {
    icon: Truck,
    title: 'Ritiro Gratuito',
    description: 'Ritiriamo il tuo mobile ovunque in Italia',
  },
  {
    icon: RotateCcw,
    title: 'Restauro su Misura',
    description: 'Personalizziamo il mobile secondo i tuoi gusti',
  },
  {
    icon: Package,
    title: 'Consegna a Domicilio',
    description: 'Consegna e montaggio incluso nel prezzo',
  },
];

export default function Logistica() {
  return (
    <section className="py-16 md:py-20 bg-sage text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
            Come Funziona
          </h2>
          <p className="text-cream/70 text-lg">
            Dalla valutazione alla consegna, ti accompagniamo in ogni passo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {logisticsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-sage-dark/30 rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-cream/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}