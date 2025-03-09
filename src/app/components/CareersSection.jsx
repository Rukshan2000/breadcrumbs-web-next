'use client';


import { Zap, Users, Cpu } from "lucide-react";

export function CareersSection() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Team
          </span>
        </h2>
        <p className="text-gray-300">
          Be part of a dynamic team working on cutting-edge technologies
          that shape the future.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold">
                  Application Support Engineer Intern
                </h4>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                  Internship
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Looking for a passionate individual to join our support
                team and assist with application troubleshooting and
                customer inquiries.
              </p>
              <a href="#" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-opacity inline-block">
                Apply Now
              </a>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold">
                  Associate Software Engineer - Full Stack
                </h4>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Join our development team to create innovative web and
                mobile applications that integrate with IoT devices and
                systems.
              </p>
              <a href="#" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-opacity inline-block">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">
                    Cutting-edge Projects
                  </h4>
                  <p className="text-gray-400">
                    Work on innovative technologies and solutions that
                    make a real impact.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">
                    Collaborative Culture
                  </h4>
                  <p className="text-gray-400">
                    Join a supportive team that values your ideas and
                    contributions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Cpu className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Professional Growth</h4>
                  <p className="text-gray-400">
                    Continuous learning opportunities and clear career
                    advancement paths.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg">
              <h4 className="font-bold mb-2">Don't see a perfect fit?</h4>
              <p className="text-gray-400 mb-4">
                We're always looking for talented individuals to join our
                team. Send us your resume for future opportunities.
              </p>
              <a href="mailto:careers@breadcrumbsinnovations.com" className="text-blue-400 hover:text-blue-300">
                careers@breadcrumbsinnovations.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}