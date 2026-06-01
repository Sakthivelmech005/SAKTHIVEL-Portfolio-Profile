'use client';

import { motion } from 'framer-motion';

interface CounterProps {
  value: number;
  label: string;
}

export default function Counter({ value, label }: CounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="glass-card rounded-3xl border p-6 text-center"
    >
      <p className="text-4xl font-semibold text-electric">{value.toLocaleString()}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
    </motion.div>
  );
}
