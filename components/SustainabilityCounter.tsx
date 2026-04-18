'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 127, label: 'Mobili Salvati', sublabel: 'dalla discarica' },
  { value: 2700, label: 'kg CO₂', sublabel: 'risparmiato' },
  { value: 850, label: 'kg Legno', sublabel: 'recuperato' },
  { value: 120, label: 'Litri Vernice', sublabel: 'bio usata' },
];

interface CounterProps {
  value: number;
  label: string;
  sublabel: string;
  inView: boolean;
  color: string;
}

function Counter({ value, label, sublabel, inView, color }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div className="text-center">
      <div className="relative inline-flex">
        <div className="text-4xl md:text-5xl font-serif font-bold text-midnight">
          {count.toLocaleString()}
        </div>
        <div 
          className="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="text-midnight font-medium mt-1">{label}</div>
      <div className="text-midnight/50 text-sm">{sublabel}</div>
    </div>
  );
}

function StatBar({ value, max, label, color, inView }: { value: number; max: number; label: string; color: string; inView: boolean }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-midnight/70">{label}</span>
        <span className="text-midnight font-medium">{value.toLocaleString()}</span>
      </div>
      <div className="h-2 bg-cream-dark rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function SustainabilityCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colors = ['#B86B4A', '#6B8A69', '#9A7B5C', '#1E2A35'];
  const maxValues = [150, 3000, 1000, 150];

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
        {stats.map((stat, index) => (
          <Counter 
            key={stat.label} 
            value={stat.value} 
            label={stat.label}
            sublabel={stat.sublabel}
            inView={isInView}
            color={colors[index]}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
        {stats.map((stat, index) => (
          <StatBar 
            key={stat.label}
            value={stat.value}
            max={maxValues[index]}
            label={stat.label}
            color={colors[index]}
            inView={isInView}
          />
        ))}
      </div>
    </div>
  );
}