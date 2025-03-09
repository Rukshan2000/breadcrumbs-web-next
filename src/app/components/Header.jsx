'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';
import logo from '../assets/logo.png'; // Ensure the image is in the 'public' folder for Next.js

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80, // Adjust this value based on your header height
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A0E17]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">

        <a href="#home" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, '#')}>
          <Image src={logo} alt="Breadcrumbs Innovations Logo" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#home')}>
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#about')}>
              About
            </a>
            <a href="#services" className="text-sm font-medium hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#services')}>
              Services
            </a>
            <a href="#careers" className="text-sm font-medium hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#careers')}>
              Careers
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#contact')}>
              Contact
            </a>
          </nav>
          <a href="#contact" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:opacity-90 transition-opacity" onClick={(e) => scrollToSection(e, '#contact')}>
            Get in Touch
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-[#0A0E17] border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium py-2 hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#home')}>
              Home
            </a>
            <a href="#about" className="text-sm font-medium py-2 hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#about')}>
              About
            </a>
            <a href="#services" className="text-sm font-medium py-2 hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#services')}>
              Services
            </a>
            <a href="#careers" className="text-sm font-medium py-2 hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#careers')}>
              Careers
            </a>
            <a href="#contact" className="text-sm font-medium py-2 hover:text-orange-400 transition-colors" onClick={(e) => scrollToSection(e, '#contact')}>
              Contact
            </a>
            <a href="#contact" className="px-4 py-2 mt-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:opacity-90 transition-opacity text-center" onClick={(e) => scrollToSection(e, '#contact')}>
              Get in Touch
            </a>
          </nav>
        </div>
      </div>}
    </header>
  );
}
