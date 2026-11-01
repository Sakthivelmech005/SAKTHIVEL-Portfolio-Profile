'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center"
    >
      <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#1088f2] blur-2xl opacity-35" />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-full bg-[#1088f2] shadow-[0_0_60px_rgba(16,136,242,0.3)]">
          <Image
            src="/profile.png"
            alt="Sakthivel S"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectPosition: 'center 20%',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
