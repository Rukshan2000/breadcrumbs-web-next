
'use client';

import { ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-[#070B12]">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Case{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Studies
          </span>
        </h2>
        <p className="text-gray-300">
          Explore how we've helped our clients achieve their goals with
          innovative IoT solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-colors group">
          <div className="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Smart Factory Solution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Smart Factory Monitoring System
            </h3>
            <p className="text-gray-400 mb-4">
              Developed an IoT-based monitoring system for a manufacturing
              plant, resulting in 30% improved efficiency.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
              Read case study
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-red-500/50 transition-colors group">
          <div className="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Healthcare IoT Solution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Healthcare IoT Solution
            </h3>
            <p className="text-gray-400 mb-4">
              Created a connected device ecosystem for patient monitoring
              that reduced response times by 45%.
            </p>
            <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              Read case study
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
          View all case studies
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  </section>
  );
}