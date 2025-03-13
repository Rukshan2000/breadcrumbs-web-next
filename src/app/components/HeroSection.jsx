'use client';

import { ChevronRight, Globe, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Righteous } from 'next/font/google';
import data from '../jsons/HeroSection.json'; // import JSON data

// Call the font loader outside the component
const righteous = Righteous({ subsets: ['latin'], weight: '400' });

// Icon Mapping to Components
const iconMapping = {
  Globe: <Globe className="text-orange-400" size={24} />,
  Cpu: <Cpu className="text-red-400" size={24} />,
  Zap: <Zap className="text-amber-400" size={24} />,
};

export function HeroSection() {
  const { heading, subheading, description, services } = data[0]; // Get values from JSON

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/bg3.mp4"
          autoPlay
          loop
          muted
        />
        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0A0E17] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Apply the className of the imported Righteous font */}
          <div className={righteous.className}>
          <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-200 animate-gradient">
                {heading}
              </span>
            </motion.h1>
            {/* Subheading */}
            <h2 className="text-xl lg:mt-24 sm:mt-12 md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4">
              {subheading} {/* Subheading from JSON */}
            </h2>
          </div>

          {/* Description text */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {description} {/* Description from JSON */}
          </p>

          

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 font-semibold bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(({ title, description, icon, iconColor }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors group"
            >
              <div className={`w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors`}>
                {/* Render icon dynamically based on the icon value from JSON */}
                {iconMapping[icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
}
