'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Lorenzo Recchia',
    role: 'Creative Director & Master Artisan',
    image: '/images/IMG_8474.PNG',
  },
  {
    name: 'Nicolò Mongelli',
    role: 'CEO & Head of Strategy',
    image: '/images/IMG_8475.PNG',
  },
  {
    name: 'Federico Marasciulo',
    role: 'Head of Operation & E-commerce',
    image: '/images/IMG_8472.PNG',
  },
];

export default function ChiSiamo() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-terracotta/20 text-terracotta text-sm font-medium tracking-wide rounded-full mb-4">
            Chi Siamo
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-midnight mb-4">
            Il Nostro Team
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            Passione e artigianalità al servizio del recupero
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-cream-dark border-4 border-terracotta/20">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-midnight/30">
                    <span className="text-4xl font-serif">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-serif font-semibold text-midnight mb-1">
                {member.name}
              </h3>
              <p className="text-terracotta font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
