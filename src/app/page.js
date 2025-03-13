'use client';

import { useState, useEffect } from 'react';
import { Header } from "./components/Header.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { CaseStudiesSection } from "./components/CaseStudiesSection.jsx";
import { CareersSection } from "./components/CareersSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { Loader } from "./components/Loader.jsx"; // Import the loader
import { Cursor } from './components/Cursor';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white overflow-x-hidden">
              <Cursor />
      {isLoading ? (
        // Show the loader while loading
        <Loader />
      ) : (
        // Show the main content after loading
        <>
          <Header />
  
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CaseStudiesSection />
            <CareersSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}