"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      "Full-Stack Developer",
      "Frontend Developer",
      "React.js Developer",
      "MERN Stack Developer",
      "Aspiring Web Developer",
      "Problem Solver",
    ];

    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      if (isDeleting) {
        setText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Touisiftarique", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/tousiftarique", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:ertousif49@gmail.com", label: "Email" },
    // { icon: <Phone className="w-5 h-5" />, href: "tel:+916204190723", label: "Phone" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-12 flex flex-col justify-center items-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full mx-auto px-6 lg:px-8 gap-12 pt-16 pb-20">
        {/* Left: Text */}
        <div className="lg:w-1/2 md:text-center lg:text-left order-1 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-3 lg:mb-4">
            <span className="text-white text-xl font-semibold">Hello, It&lsquo;s Me</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Tousif Tarique
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-start mb-3 lg:mb-4 gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">And I&lsquo;m a</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">
              {text}<span className="animate-pulse text-purple-400">|</span>
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl lg:mx-0 mb-4 lg:mb-4 leading-relaxed">
            Aspiring Web Developer with a strong foundation in Computer Science, building scalable and user-friendly web applications with modern technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-start lg:justify-start mb-4 lg:mb-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToProjects}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFAF00] text-black rounded-full font-semibold hover:shadow-purple-500/70 transition-all text-sm sm:text-base cursor-pointer">
              View My Work
            </motion.button>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#FFAF00] text-white rounded-full font-semibold hover:bg-purple-400/10 transition-all text-sm sm:text-base">
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6 justify-start lg:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}
                className="p-3 lg:mb-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700/50 transition-all border border-gray-700"
                aria-label={link.label}>
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 text-sm">
            <span className="text-yellow-400">📍</span> Hyderabad, India
          </motion.div>
        </div>

        {/* Right: Avatar card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{ opacity: { duration: 0.8 }, x: { duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          className="relative lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 shadow-lg shadow-purple-500/20" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-yellow-400/20" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/40 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-purple-950/80 shadow-2xl shadow-purple-500/30">
              <Image src="/Images/tousif.png" alt="Tousif Tarique" fill className="object-cover" />
            </div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 px-3 py-1 bg-gray-800 border border-yellow-400/40 rounded-full text-yellow-400 text-xs font-mono">
              MERN Stack
            </motion.div>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 px-3 py-1 bg-gray-800 border border-purple-400/40 rounded-full text-purple-400 text-xs font-mono">
              React.js
            </motion.div>
            <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 px-3 py-1 bg-gray-800 border border-blue-400/40 rounded-full text-blue-400 text-xs font-mono">
              Node.js
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.button onClick={scrollToProjects} animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer text-yellow-400 hover:text-purple-300 transition-colors" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2, duration: 2 }}
        className="absolute top-20 left-10 text-purple-300 font-mono text-sm hidden md:block">{"<developer>"}</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2.2, duration: 2 }}
        className="absolute bottom-20 right-10 text-purple-300 font-mono text-sm hidden md:block">{"</developer>"}</motion.div>
    </section>
  );
}
