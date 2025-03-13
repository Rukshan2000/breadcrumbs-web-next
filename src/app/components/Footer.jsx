'use client';

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const socialIconVariants = {
    hover: { 
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
      scale: 1.1,
    }
  };
  
  const linkVariants = {
    hover: { x: 5, color: "#60a5fa" } // blue-400 color
  };

  return (
    <footer className="py-16 relative overflow-hidden bg-gradient-to-b from-[#050810] to-[#07101f] border-t border-gray-800/30">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -top-16 -right-16 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        />
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNTI1M2YiIGQ9Ik0zNiAxOGgtMTJWNmgxMnYxMnpNNTQgMzZoLTEyVjI0aDEydjEyek0zNiA1NEgyNFY0MmgxMnYxMnpNMTggMzZINlYyNGgxMnYxMnoiLz48L2c+PC9zdmc+')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Breadcrumbs Innovations
            </h3>
            <p className="text-gray-300 mb-6 backdrop-blur-sm">
              Pioneering IoT and device-based software solutions for a
              connected future.
            </p>
            <motion.div className="flex gap-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} className="text-blue-400" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={18} className="text-blue-400" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} className="text-blue-400" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} className="text-blue-400" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-white/90">Services</h3>
            <ul className="space-y-3">
              {['IoT Development', 'Embedded Software', 'Cloud Solutions', 'Custom Software', 'System Integration'].map((service, index) => (
                <motion.li key={index}>
                  <motion.a 
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-all flex items-center group"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-white/90">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '#about' },
                { name: 'Case Studies', link: '#' },
                { name: 'Careers', link: '#careers' }
              ].map((item, index) => (
                <motion.li key={index}>
                  <motion.a 
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-all flex items-center group"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-white/90">Contact</h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-1 backdrop-blur-sm border border-white/5">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  No 140, 1/1 Old Kesbewa Rd, Nugegoda
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  077 744 9332
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  info@breadcrumbsinnovations.com
                </span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-6 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                y: -3
              }}
            >
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/10 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm" 
                />
                <motion.button 
                  className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.hr 
            className="border-gray-800/50 my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          
          <motion.div 
            className="text-center text-gray-400 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 md:mb-0">&copy; {currentYear} Breadcrumbs Innovations. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Cookie Policy</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}