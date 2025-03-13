'use client';

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from 'next/image';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link'; // Import the Link component

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0A0E17]/90 backdrop-blur-md shadow-lg shadow-blue-900/10' : 'bg-transparent'}`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6"
        >
          {/* Replace <a> with <Link> */}
          <Link
            href="#home"
            className="flex items-center gap-2 z-10"
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <Image src={logo} alt="Breadcrumbs Innovations Logo" className="h-8 w-auto" />
            <motion.span
              className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Breadcrumbs
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item, i) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium relative group overflow-hidden"
                  onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                >
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              ))}
            </nav>
            <Link
              href="#contact"
              className="px-5 py-2 text-sm font-medium rounded-md relative overflow-hidden group"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 z-0"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500 to-purple-500 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
          <motion.button
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: isMenuOpen ? 45 : -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isMenuOpen ? -45 : 45 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </header>

      {/* Mobile side drawer - moved outside header to fix z-index issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-gray-900 to-[#0A0E17] border-l border-gray-800/50 shadow-xl shadow-purple-900/20 z-50 overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                <nav className="flex flex-col gap-5 mt-8">
                  {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item, i) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium py-3 border-b border-gray-800/50 flex items-center"
                      onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                    >
                      <motion.span
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
                        whileHover={{ x: 8, color: "#8B5CF6" }}
                      >
                        {item}
                      </motion.span>
                    </Link>
                  ))}
                </nav>

                <motion.div
                  className="mt-auto pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    href="#contact"
                    className="w-full py-3 text-center text-sm font-medium rounded-md block relative overflow-hidden"
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 z-0"></span>
                    <span className="relative z-10">Get in Touch</span>
                  </Link>

                  <div className="mt-8 flex justify-center gap-6">
                    {['Twitter', 'LinkedIn', 'GitHub'].map((item, i) => (
                      <Link
                        key={item}
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/70 hover:bg-gray-700/70"
                      >
                        <motion.span
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 + 0.9 }}
                          whileHover={{ y: -3, backgroundColor: "#8B5CF6" }}
                        >
                          {item[0]}
                        </motion.span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}