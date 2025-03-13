'use client';

import { ArrowRight, ExternalLink } from "lucide-react";
import caseStudiesData from '../jsons/CaseStudiesSection.json';
import { motion } from "framer-motion";
import { useState } from 'react';
import Link from 'next/link'


export function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Only display case studies that should show on the home screen
  const filteredStudies = caseStudiesData.caseStudies.filter(study => study.showOnHomeScreen);

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B12]">
      {/* Background elements for animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-sm font-medium text-blue-300 border border-blue-800/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Work
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {caseStudiesData.title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Studies
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {caseStudiesData.description}
          </motion.p>
        </motion.div>

        {/* Case Study Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="group h-full relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Card background with hover effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                initial={{ backgroundColor: "rgba(31, 41, 55, 0.3)", backdropFilter: "blur(10px)" }}
                animate={{ 
                  backgroundColor: hoveredIndex === index ? `rgba(${study.hoverColor === 'blue' ? '37, 99, 235' : '139, 92, 246'}, 0.1)` : "rgba(31, 41, 55, 0.3)",
                  boxShadow: hoveredIndex === index ? `0 0 40px 0 rgba(${study.hoverColor === 'blue' ? '37, 99, 235' : '139, 92, 246'}, 0.1)` : "none"
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col h-full overflow-hidden rounded-2xl border border-gray-700 group-hover:border-opacity-0 transition-all duration-300">
                <div className="h-52 overflow-hidden relative">
                  <motion.img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-gray-700/50"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {study.category || "Case Study"}
                  </motion.div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{study.title}</h3>
                    <p className="text-gray-300 mb-5 leading-relaxed">{study.description}</p>
                  </div>

                  {/* Results metrics */}
                  {study.results && (
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg bg-gray-800/50">
                          <div className="text-lg font-bold text-blue-400">{result.value}</div>
                          <div className="text-xs text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
<Link href={{
  pathname: '/CaseStudy',
  query: { id: study.caseStudyId } // Pass the caseStudyId as a query parameter
}}>
  <motion.a 
    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mt-2 group/link"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    Read case study
    <motion.span 
      className="ml-2 transition-transform"
      initial={{ x: 0 }}
      whileHover={{ x: 3 }}
    >
      <ArrowRight size={16} />
    </motion.span>
  </motion.a>
</Link>


                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href={caseStudiesData.viewAllLink} 
            className="inline-flex items-center px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full text-blue-400 transition-colors duration-300 border border-gray-700/50 hover:border-blue-500/50 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View all case studies
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
