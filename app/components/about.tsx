"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, BookOpen, Trophy } from "lucide-react";

export default function AboutPage() {
  const skills = [
    "JavaScript", "Java", "SQL",
    "HTML", "CSS", "Bootstrap", "React.js",
    "Node.js", "Express.js",
    "MySQL", "MongoDB",
    "Git", "GitHub",
  ];

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and design patterns.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Focus",
      description: "Creating beautiful interfaces that prioritize user experience and accessibility.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to deliver the best experience.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively with teams on open-source and collaborative projects.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and staying updated with industry trends.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Quality Driven",
      description: "Committed to delivering high-quality solutions that exceed expectations.",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-20 pb-12 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          {/* Left: Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h1 className="text-4xl text-white md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
              className="text-base text-gray-300 leading-relaxed">
              Hi, I&lsquo;m Tousif Tarique — an Aspiring Web Developer from Hyderabad, India with a strong academic foundation in Computer Science. I have hands-on experience in modern web technologies and a passion for building scalable, user-friendly applications.
            </motion.p>

            <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
              className="text-gray-300 leading-relaxed text-base">
              Currently pursuing B.Tech LE in Computer Science at Maulana Azad National Urdu University, Hyderabad, and eager to contribute to real-world projects while growing as a full-stack developer.
            </motion.p>

            {/* Education */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.35 }} viewport={{ once: true }}
              className="space-y-3 pt-2">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-800/40 border border-gray-700 rounded-xl">
                  <span className="text-yellow-400 mt-1">🎓</span>
                  <div>
                    <p className="text-white font-medium text-sm">B.Tech LE (Computer Science)</p>
                    <p className="text-gray-400 text-xs">Maulana Azad National Urdu University · 2023 – 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-800/40 border border-gray-700 rounded-xl">
                  <span className="text-yellow-400 mt-1">🎓</span>
                  <div>
                    <p className="text-white font-medium text-sm">Diploma – Electronics & Communication Engineering · CGPA: 7.92</p>
                    <p className="text-gray-400 text-xs">Maulana Azad National Urdu University · 2020 – 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
              className="space-y-4 pt-2">
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
              <ul className="space-y-3">
                {[
                  { title: "Frontend Development:", desc: "Building responsive, dynamic UIs using HTML, CSS, Bootstrap, and React.js" },
                  { title: "Backend Development:", desc: "Developing robust APIs using Node.js and Express.js" },
                  { title: "Database Management:", desc: "Working with MySQL and MongoDB for scalable data solutions" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg">▸</span>
                    <span><strong className="text-white">{item.title}</strong>{" "}{item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}
              className="pt-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((tech, index) => (
                  <motion.span key={tech}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }} viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-all cursor-default shadow-lg">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-6">
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFAF00] text-black rounded-full font-semibold hover:shadow-purple-500/70 transition-all text-sm sm:text-base cursor-pointer">
                Get In Touch
              </motion.a>
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#FFAF00] text-white rounded-full font-semibold hover:bg-purple-400/10 transition-all text-sm sm:text-base">
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Stats/Info card */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm space-y-4">
              {/* NCC Achievement */}
              <motion.div whileHover={{ y: -4 }}
                className="p-5 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-yellow-500/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏅</span>
                  <h4 className="text-white font-semibold">NCC &apos;B&apos; Certificate</h4>
                </div>
                <p className="text-gray-400 text-sm">National Cadet Corps – Hyderabad. Developed leadership, discipline and teamwork (02/2023)</p>
              </motion.div>

              {/* NCVET Achievement */}
              <motion.div whileHover={{ y: -4 }}
                className="p-5 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📜</span>
                  <h4 className="text-white font-semibold">NCVET Certified</h4>
                </div>
                <p className="text-gray-400 text-sm">Maintenance Technician – NSQF Level 3 under Electronics Sector Skills Council of India (09/2023)</p>
              </motion.div>

              {/* Internship */}
              <motion.div whileHover={{ y: -4 }}
                className="p-5 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💼</span>
                  <h4 className="text-white font-semibold">Swecha Internship</h4>
                </div>
                <p className="text-gray-400 text-sm">Worked on open-source development and gained collaborative project experience (2021)</p>
              </motion.div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -4 }}
                  className="p-4 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-yellow-500/40 transition-all text-center">
                  <p className="text-3xl font-black text-yellow-400">3+</p>
                  <p className="text-gray-400 text-xs mt-1">Projects Built</p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }}
                  className="p-4 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-500/40 transition-all text-center">
                  <p className="text-3xl font-black text-purple-400">7.92</p>
                  <p className="text-gray-400 text-xs mt-1">Diploma CGPA</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 cursor-pointer text-white">Why Work With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-yellow-900 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 1, duration: 2 }}
        className="absolute top-32 left-10 text-purple-300 font-mono text-sm hidden xl:block">{"<about>"}</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-32 right-10 text-purple-300 font-mono text-sm hidden xl:block">{"</about>"}</motion.div>
    </section>
  );
}
