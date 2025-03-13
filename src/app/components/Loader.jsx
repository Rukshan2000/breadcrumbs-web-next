'use client';

import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#070B12]">
      <motion.div
        className="relative w-24 h-24"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Outer Glowing Circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-500/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Inner Glowing Circle */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-purple-500/50"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Central Orb */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glowing Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.sin((i * Math.PI) / 2) * 40}px`,
              left: `${Math.cos((i * Math.PI) / 2) * 40}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}