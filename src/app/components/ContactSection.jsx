'use client';

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import contactData from '../jsons/ContactSection.json';

export function ContactSection() {
  const { title, description, contactForm, contactInfo, mapEmbedLink } = contactData;
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Create an object mapping icon names to components
  const icons = {
    MapPin,
    Phone,
    Mail,
    Clock,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#070B12] to-[#0a101c] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 40, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Touch
            </span>
          </h2>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            {formStatus.submitted ? (
              <motion.div 
                className="h-full flex flex-col items-center justify-center text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-6">We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, loading: false })}
                  className="px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:opacity-90 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                      placeholder={contactForm.name}
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                      placeholder={contactForm.email}
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-200">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                    placeholder={contactForm.subject}
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                    placeholder={contactForm.message}
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
                  whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                  ) : (
                    <>
                      Send Message 
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Contact Information</h3>
              
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {Object.entries(contactInfo).map(([key, info]) => (
                  <motion.div 
                    key={key} 
                    className="flex gap-5"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.createElement(icons[info.icon], { className: "text-blue-400", size: 22 })}
                    </motion.div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">{info.title}</h4>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8 h-72 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <iframe
                  src={mapEmbedLink}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}