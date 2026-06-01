'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="profile-image-container"
    >
      <div className="relative mx-auto w-full max-w-[400px]">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric/30 via-transparent to-electric/20 blur-2xl" />

        {/* Main image container */}
        <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-electric/40 bg-slate-900 shadow-profile">
          <Image
            src="/profile.png"
            alt="Sakthivel profile"
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 380px"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />

          {/* Shine effect overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-2 top-1/4 h-24 w-24 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -left-2 bottom-1/4 h-32 w-32 rounded-full bg-electric/5 blur-3xl" />
      </div>
    </motion.div>
  );
}
