'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 84, max: 100, label: 'Mobili Salvati', sublabel: 'dalla discarica' },
  { value: 1850, max: 2500, label: 'kg CO₂', sublabel: 'risparmiato' },
  { value: 420, max: 500, label: 'kg Legno', sublabel: 'recuperato' },
  { value: 65, max: 100, label: 'Litri Vernice', sublabel: 'bio usata' },
];

const colors = ['#B86B4A', '#6B8A69', '#8B7355', '#1E2A35'];

function DonutChart({ value, max, label, sublabel, color, inView }: { value: number; max: number; label: string; sublabel: string; color: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const percentage = (value / max) * 100;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

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
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E8E0D5"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-serif font-bold text-midnight">{count}</span>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="text-midnight font-medium">{label}</div>
        <div className="text-midnight/50 text-sm">{sublabel}</div>
      </div>
    </div>
  );
}

export default function SustainabilityCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <DonutChart 
            key={stat.label}
            value={stat.value}
            max={stat.max}
            label={stat.label}
            sublabel={stat.sublabel}
            color={colors[index]}
            inView={isInView}
          />
        ))}
      </div>
    </div>
  );
}