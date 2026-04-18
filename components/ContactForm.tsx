'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, Briefcase, Home, Building } from 'lucide-react';

const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
    tipo: 'privato' as 'privato' | 'azienda',
    azienda: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-sage/20 border border-sage/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/30 flex items-center justify-center">
          <Send className="w-8 h-8 text-sage-dark" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-midnight mb-2">Grazie!</h3>
        <p className="text-midnight/60">
          Il tuo messaggio è stato inviato. Ti ricontatteremo entro 24-48 ore.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-midnight/70 font-medium mb-2">Nome Completo</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30">
              <UserIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all"
              placeholder="Il tuo nome"
            />
          </div>
        </div>

        <div>
          <label className="block text-midnight/70 font-medium mb-2">Email</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30">
              <MailIcon className="w-5 h-5" />
            </div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all"
              placeholder="tua@email.it"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-midnight/70 font-medium mb-2">Tipo di Richiesta</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tipo: 'privato', azienda: '' })}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
              formData.tipo === 'privato'
                ? 'border-terracotta bg-terracotta/10 text-terracotta'
                : 'border-sand/30 text-midnight/60 hover:border-terracotta/30'
            }`}
          >
            <Home className="w-5 h-5" />
            Privato
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tipo: 'azienda' })}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
              formData.tipo === 'azienda'
                ? 'border-terracotta bg-terracotta/10 text-terracotta'
                : 'border-sand/30 text-midnight/60 hover:border-terracotta/30'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Azienda
          </button>
        </div>
      </div>

      <AnimatePresence>
        {formData.tipo === 'azienda' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-midnight/70 font-medium mb-2">Nome Azienda</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30">
                <Building className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={formData.azienda}
                onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all"
                placeholder="Nome della tua azienda"
              />
            </div>
            <p className="text-midnight/50 text-sm mt-2">Azienda con sede a Putignano (Bari)</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label className="block text-midnight/70 font-medium mb-2">Messaggio</label>
        <div className="relative">
          <div className="absolute left-3 top-4 w-5 h-5 text-midnight/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <textarea
            required
            rows={5}
            value={formData.messaggio}
            onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
            className="w-full pl-12 pr-4 py-4 bg-cream border border-sand/30 rounded-xl focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/30 transition-all resize-none"
            placeholder="Descrivi il tuo mobile o il progetto..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-terracotta text-cream font-medium rounded-xl hover:bg-terracotta-light transition-all hover:shadow-lg hover:shadow-terracotta/20"
      >
        Invia Richiesta
      </button>
    </form>
  );
}