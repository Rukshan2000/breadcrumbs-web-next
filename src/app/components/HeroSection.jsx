'use client';


import { ChevronRight , Globe , Cpu ,Zap } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0A0E17] to-transparent"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pioneering{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            IT Solutions
          </span>{" "}
          for a Connected Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting innovative device-based software solutions that
          transform businesses and enhance lives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="px-6 py-3 font-medium bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Explore Our Services
            <ChevronRight size={18} />
          </a>
          <a href="#contact" className="px-6 py-3 font-medium bg-gray-800 hover:bg-gray-700 rounded-md transition-colors">
            Contact Us
          </a>
        </div>
      </motion.div>
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.3
    }} className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors group">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
            <Globe className="text-orange-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">IoT Expertise</h3>
          <p className="text-gray-400">
            Specialized solutions that connect devices and systems for
            smarter operations.
          </p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors group">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
            <Cpu className="text-red-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Device Solutions</h3>
          <p className="text-gray-400">
            Custom software for hardware devices that enhances
            functionality and user experience.
          </p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors group">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
            <Zap className="text-amber-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Innovative Approach</h3>
          <p className="text-gray-400">
            Forward-thinking development methodologies that deliver
            cutting-edge results.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
  );
}