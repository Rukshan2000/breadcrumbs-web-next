'use client';


import { Globe, Cpu, Zap, Users ,ChevronRight} from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Services
          </span>
        </h2>
        <p className="text-gray-300">
          We specialize in creating innovative IoT and device-based
          software solutions tailored to your specific needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors group">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
            <Globe className="text-orange-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">IoT Development</h3>
          <p className="text-gray-400 mb-4">
            End-to-end IoT solutions that connect devices, collect data,
            and provide actionable insights for your business.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Device connectivity solutions</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Real-time data processing</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Analytics dashboards</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors group">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
            <Cpu className="text-red-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Embedded Software</h3>
          <p className="text-gray-400 mb-4">
            Custom firmware and software solutions for embedded systems
            and smart devices.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Firmware development</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Device drivers</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Hardware integration</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors group">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
            <Zap className="text-amber-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
          <p className="text-gray-400 mb-4">
            Scalable cloud infrastructure and services to support your IoT
            ecosystem.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Cloud architecture</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Serverless applications</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Data storage solutions</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors group">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
            <Users className="text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Custom Software</h3>
          <p className="text-gray-400 mb-4">
            Tailor-made software solutions designed to address your
            specific business challenges.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Web applications</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Mobile applications</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Desktop software</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors group">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
            <Cpu className="text-purple-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">System Integration</h3>
          <p className="text-gray-400 mb-4">
            Seamless integration of different systems, devices, and
            platforms for unified operations.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>API development</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Legacy system integration</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Third-party service connections</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors group">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
            <Zap className="text-amber-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Consulting & Support</h3>
          <p className="text-gray-400 mb-4">
            Expert guidance and ongoing support for your IoT and software
            initiatives.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Technical consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Maintenance and updates</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Training and documentation</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a href="#contact" className="px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          Discuss Your Project
          <ChevronRight size={18} />
        </a>
      </div>
    </div>
  </section>
  );
}