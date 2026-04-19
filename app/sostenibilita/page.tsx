'use client';

import { motion } from 'framer-motion';
import SustainabilityCounter from '@/components/SustainabilityCounter';
import { Leaf, TreePine, Droplet, Recycle, Globe, Check } from 'lucide-react';

const initiatives = [
  {
    icon: Recycle,
    title: 'Economia Circolare',
    description: 'Riduciamo i rifiuti salvando mobili dalla discarica e diamo loro una nuova vita.',
    impact: '127 mobili salvati',
  },
  {
    icon: TreePine,
    title: 'Risparmio Legno',
    description: 'Ogni mobile rigenerato significa meno alberi abbattuti.',
    impact: '850 kg di legno recuperato',
  },
  {
    icon: Droplet,
    title: 'Vernici Bio',
    description: 'Usiamo solo vernici ecologiche all\'acqua, senza tossine.',
    impact: '120 L di vernice tossica evitata',
  },
  {
    icon: Globe,
    title: 'Riduzione CO₂',
    description: 'La rigenerazione produce il 90% in meno di CO₂ rispetto a produrre nuovo.',
    impact: '2.700 kg CO₂ risparmiato',
  },
];

const certifications = [
  'Materiali Certificati FSC',
  'Vernici ECOLABEL',
  'Packaging 100% Riciclato',
  'Processo Carbon Neutral',
];

export default function Sostenibilita() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-sage pointer-events-none" />
        
        <section className="bg-sage text-cream py-21 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3">
                La Nostra Sostenibilità
              </h1>
              <p className="text-base md:text-lg text-cream/80">
                Ogni mobile rigenerato è un passo verso un futuro più verde
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-midnight">
              Il Nostro Impatto
            </h2>
          </motion.div>
          <SustainabilityCounter />
        </div>
      </section>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-midnight pointer-events-none" />
        
        <section className="py-12 md:py-16 bg-midnight text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                Le Nostre Iniziative
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream/5 rounded-xl p-5 border border-cream/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="w-5 h-5 text-terracotta" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-serif font-semibold mb-1">{initiative.title}</h3>
                      <p className="text-cream/60 text-sm mb-2">{initiative.description}</p>
                      <span className="inline-block px-3 py-1 bg-sage/20 text-sage rounded-full text-xs font-medium">
                        {initiative.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-midnight to-cream pointer-events-none" />
        
        <section className="py-12 md:py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-midnight">
                Certificazioni
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-cream-dark rounded-lg text-midnight/70 text-sm border border-sand/30"
                >
                  <Check className="w-4 h-4 text-sage" />
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-terracotta pointer-events-none" />
        
        <section className="py-12 md:py-16 bg-terracotta text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-2">
              Il Futuro è Circolare
            </h2>
            <p className="text-cream/80 text-sm md:text-base max-w-xl mx-auto">
              Ogni scelta conta. Scegliere mobili rigenerati significa contribuire 
              a un&apos;economia più sostenibile.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}