import { Header } from "./components/Header.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { CaseStudiesSection } from "./components/CaseStudiesSection.jsx";
import { CareersSection } from "./components/CareersSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-white overflow-x-hidden">
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
    </div>
  );
}