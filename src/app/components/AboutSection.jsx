'use client';

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import data from '../jsons/AboutSection.json';

export function AboutSection() {
  const { title, mission, approach, statistics, team } = data;
  const visibleTeamMembers = team.filter(member => member.showOnHomeScreen);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#070B12] to-[#0c121f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-purple-600 blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <span className="text-sm font-medium text-blue-400">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500">
              {title}
            </span>
          </h2>
          <motion.p
            className="text-gray-300 text-lg"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {mission}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-blue-400 text-2xl">#</span>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <motion.p
                className="text-gray-300 mb-8"
                variants={fadeInUp}
              >
                {mission}
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 mt-8"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-purple-400 text-2xl">#</span>
                </div>
                <h3 className="text-2xl font-bold">Our Approach</h3>
              </div>
              <motion.p
                className="text-gray-300 mb-6"
                variants={fadeInUp}
              >
                {approach}
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={fadeInUp}
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                >
                  <h4 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 mb-2`}>
                    {stat.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          >
            <motion.div 
              className="flex items-center justify-between mb-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold">Our Team</h3>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center bg-blue-500/10 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-blue-500/20"
              >
                Meet the entire team
                <ChevronRight size={16} className="ml-1" />
              </a>
            </motion.div>
            
            {/* Updated grid - always 2 columns on small screens */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {visibleTeamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-white/20 overflow-hidden group transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className={`h-2 bg-gradient-to-r from-${member.color}-500 to-${member.color}-600`}></div>
                  <div className="p-4 md:p-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-${member.color}-500 to-${member.color}-700 flex items-center justify-center text-lg md:text-xl font-bold text-white shadow-lg shadow-${member.color}-500/20 mb-3 md:mb-4`}
                    >
                      {member.initials}
                    </div>
                    <h4 className="font-bold text-base md:text-lg">{member.name}</h4>
                    <p className="text-xs md:text-sm text-${member.color}-400 mb-2 md:mb-3">{member.role}</p>
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-4">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}