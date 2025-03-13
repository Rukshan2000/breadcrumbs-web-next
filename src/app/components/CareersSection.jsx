'use client';

import React, { useEffect } from 'react';
import { Zap, Users, Cpu, ArrowRight, Globe, Sparkles } from "lucide-react";
import careersData from '../jsons/CareersSection.json';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Expanded icon mapping
const iconMapping = {
  Zap,
  Users,
  Cpu,
  Globe,
  Sparkles,
};

export function CareersSection() {
  if (!careersData.showHomeScreen) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(76, 29, 149, 0.1), 0 10px 10px -5px rgba(76, 29, 149, 0.04)",
      borderColor: "rgba(139, 92, 246, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-transparent to-purple-900/10" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwTDYwIDBIMHY2MHoiIGZpbGw9IiMxNDE5MjUiLz48L2c+PC9zdmc+')] opacity-[0.03]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-sm font-medium text-blue-300 border border-blue-800/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Career Opportunities
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Innovative
            </span>{" "}
            Team
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Be part of a dynamic team working on cutting-edge technologies
            that shape the future of innovation.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Open Positions - Takes up 3 columns */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold">Open Positions</h3>
              <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {careersData.positions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden"
                  variants={itemVariants}
                  whileHover="hover"
                  // variants={cardHoverVariants}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <h4 className="text-xl font-bold">{position.title}</h4>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full backdrop-blur-sm">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{position.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {position.skills?.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={position.applyLink}
                      className="group/btn inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 z-0"></span>
                      <span className="relative z-10">Apply Now</span>
                      <motion.span
                        className="relative z-10"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Why Join Us - Takes up 2 columns */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 h-full">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold">Why Join Us?</h3>
                <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {careersData.whyJoin.map((item, index) => {
                  const IconComponent = iconMapping[item.icon];
                  return (
                    <motion.div 
                      key={index} 
                      className="flex gap-5"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center shrink-0 border border-blue-500/20"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 15px rgba(79, 70, 229, 0.4)"
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="text-blue-400" size={22} />
                        )}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              <motion.div 
                className="mt-10 p-6 rounded-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-lg" />
                
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-3">Don't see a perfect fit?</h4>
                  <p className="text-gray-300 mb-4">
                    We're always looking for talented individuals to join our
                    team. Send us your resume for future opportunities.
                  </p>
                  <motion.a
                    href={`mailto:${careersData.contactEmail}`}
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                    whileHover={{ x: 2 }}
                  >
                    {careersData.contactEmail}
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}