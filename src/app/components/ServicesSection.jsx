'use client';
import React, { useState, useEffect } from 'react';
import { Globe, Cpu, Zap, Users, ChevronRight, ExternalLink } from "lucide-react";
import servicesData from '../jsons/ServicesSection.json';

// Icon mapping
const iconMapping = {
  Globe,
  Cpu,
  Zap,
  Users,
};

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid overlay effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
              Cutting-edge Services
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            We pioneer innovative IoT and device-based software solutions 
            with next-generation technologies tailored for tomorrow's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData
            .filter(service => service.showOnHomeScreen)
            .map((service, index) => {
              const IconComponent = iconMapping[service.icon];
              const isHovered = hoveredCard === index;

              return (
                <div 
                  key={index} 
                  className="relative backdrop-blur-md p-8 rounded-2xl transition-all duration-500 group"
                  style={{
                    background: `linear-gradient(145deg, rgba(25, 30, 40, 0.7), rgba(15, 20, 30, 0.9))`,
                    boxShadow: `0 10px 40px rgba(0, 0, 0, 0.3)`,
                    border: `1px solid rgba(80, 100, 240, ${isHovered ? '0.4' : '0.1'})`,
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glowing accent in corner */}
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500`}
                      style={{
                        background: `linear-gradient(135deg, rgba(${service.color === 'blue' ? '56, 189, 248' : service.color === 'purple' ? '167, 139, 250' : '6, 182, 212'}, 0.2), rgba(${service.color === 'blue' ? '59, 130, 246' : service.color === 'purple' ? '124, 58, 237' : '8, 145, 178'}, 0.05))`,
                        boxShadow: isHovered ? `0 0 30px rgba(${service.color === 'blue' ? '59, 130, 246' : service.color === 'purple' ? '124, 58, 237' : '8, 145, 178'}, 0.3)` : 'none'
                      }}
                    >
                      {IconComponent && <IconComponent className="text-blue-400" size={28} />}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 text-gray-300 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 group/item">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover/item:scale-125"></div>
                          <span className="group-hover/item:text-blue-300 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                        <ChevronRight size={20} className="text-blue-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        height: '2px',
                        top: 'auto',
                        animation: isHovered ? 'shimmer 2s infinite' : 'none'
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#contact" 
            className="px-8 py-4 font-medium text-lg rounded-xl inline-flex items-center gap-3 transition-all duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(124, 58, 237, 0.9))',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Discuss Your Project</span>
            <ExternalLink size={20} className="relative z-10" />
          </a>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}