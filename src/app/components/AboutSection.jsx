'use client';


import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#070B12]">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Breadcrumbs Innovations
          </span>
        </h2>
        <p className="text-gray-300">
          Established in 2021, we're a dynamic team of innovators
          passionate about creating transformative IoT and device-based
          software solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            At Breadcrumbs Innovations, we're committed to delivering
            cutting-edge solutions that drive technological advancement
            and create meaningful impact for our clients.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
          <p className="text-gray-300 mb-6">
            We combine technical expertise with creative problem-solving
            to develop innovative solutions that address complex
            challenges in the IoT space.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-blue-400 mb-2">
                2021
              </h4>
              <p className="text-sm text-gray-400">Year Founded</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-purple-400 mb-2">
                15+
              </h4>
              <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-cyan-400 mb-2">
                20+
              </h4>
              <p className="text-sm text-gray-400">Team Members</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-blue-400 mb-2">
                10+
              </h4>
              <p className="text-sm text-gray-400">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-70"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Our Team</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">Jane Doe</h4>
                  <p className="text-sm text-gray-400">Founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-600 flex items-center justify-center text-xl font-bold">
                  JS
                </div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-sm text-gray-400">CTO</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold">
                  AP
                </div>
                <div>
                  <h4 className="font-bold">Anusha Perera</h4>
                  <p className="text-sm text-gray-400">
                    Lead IoT Engineer
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Meet the entire team
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}