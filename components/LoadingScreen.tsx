'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-20 w-20 rounded-full border-4 border-electric/30 border-t-electric animate-spin" />
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Loading portfolio</p>
      </div>
    </motion.div>
  );
}
