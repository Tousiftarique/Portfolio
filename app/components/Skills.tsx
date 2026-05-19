"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', gradient: 'from-yellow-300 via-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', gradient: 'from-red-400 via-orange-400 to-yellow-400', shadow: 'shadow-red-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'SQL/MySQL', gradient: 'from-blue-400 via-cyan-400 to-blue-600', shadow: 'shadow-blue-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5', gradient: 'from-orange-400 via-orange-500 to-red-500', shadow: 'shadow-orange-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3', gradient: 'from-blue-400 via-blue-500 to-indigo-600', shadow: 'shadow-blue-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap', gradient: 'from-purple-500 via-purple-600 to-indigo-700', shadow: 'shadow-purple-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React.js', gradient: 'from-cyan-400 via-blue-500 to-cyan-600', shadow: 'shadow-cyan-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', gradient: 'from-green-400 via-emerald-500 to-green-600', shadow: 'shadow-green-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express.js', gradient: 'from-slate-200 via-slate-400 to-slate-600', shadow: 'shadow-slate-500/50', isDark: true },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', gradient: 'from-green-300 via-emerald-400 to-teal-500', shadow: 'shadow-green-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', gradient: 'from-orange-400 via-red-500 to-pink-500', shadow: 'shadow-orange-500/50' },
  { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub', gradient: 'from-gray-400 via-gray-600 to-gray-800', shadow: 'shadow-gray-500/50', isDark: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen pt-20 pb-12 flex flex-col justify-center items-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }} className="text-center mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl text-white md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
            My technical toolkit — languages, frameworks, and tools I use to build great products
            <br />Always exploring and expanding my skillset
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div key={index} whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              className="group relative">
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500`} />
              <div className="cursor-pointer relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <motion.div initial={{ x: "-100%", y: "-100%" }} whileHover={{ x: "100%", y: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{ width: "50%", height: "50%" }} />
                </div>
                <div className="relative flex flex-col items-center justify-center space-y-5">
                  <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }} className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.gradient} p-0.5 ${skill.shadow} group-hover:shadow-2xl transition-shadow duration-300`}>
                      <div className={`w-full h-full rounded-2xl ${skill.isDark ? 'bg-white' : 'bg-gray-950'} p-3 flex items-center justify-center`}>
                        <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </motion.div>
                  <div className="text-center space-y-1">
                    <h3 className="text-white font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
