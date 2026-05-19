"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  date: string;
  features: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Workverse HRMS",
      description: "A smart web-based Human Resource Management System automating HR processes with real-time geo-fencing technology.",
      fullDescription: "Workverse HRMS is a B.Tech Final Year project — a comprehensive web application automating HR processes such as attendance tracking, payroll management, leave management, and project monitoring using real-time geo-fencing APIs. Built on the MERN stack, it aims to simplify and modernize HR operations for organizations of all sizes.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop",
      technologies: ["MERN", "Node.js", "MongoDB", "Geo-fencing APIs", "React.js", "Express.js"],
      date: "2024 – In Progress",
      features: [
        "Real-time attendance tracking with geo-fencing",
        "Automated payroll management",
        "Leave management system",
        "Project monitoring dashboard",
        "Employee self-service portal",
        "Admin analytics and reporting",
      ],
    },
    {
      id: 2,
      title: "Learn2Play",
      description: "An online sports learning platform offering expert-led courses, performance analytics, and interactive learning tools.",
      fullDescription: "Learn2Play is a dynamic web platform developed during B.Tech 3rd Year that bridges traditional sports training with modern technology. It offers expert-led online sports courses, integrated performance analytics, and interactive learning tools. Built with React and Firebase, it provides a seamless learning experience for sports enthusiasts.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop",
      technologies: ["React", "Firebase", "REST APIs", "CSS", "JavaScript"],
      liveLink: "https://learn2-play-mini-project.vercel.app/",
      githubLink: "https://github.com/Tousiftarique/Learn2Play_Mini_Project",
      date: "B.Tech 3rd Year",
      features: [
        "Expert-led sports course catalog",
        "Integrated performance analytics",
        "Interactive learning tools",
        "Firebase real-time database",
        "REST API integration",
        "Responsive design for all devices",
      ],
    },
    {
      id: 3,
      title: "Solar Plant Irrigation System",
      description: "An IoT-based solution automating irrigation using solar energy and soil-moisture sensors for sustainable water management.",
      fullDescription: "This Diploma final year project is an IoT-based Smart Irrigation System powered by solar energy. It uses Arduino microcontrollers and soil-moisture sensors to automatically detect soil conditions and control water supply, promoting optimized water management and sustainability in agriculture.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1170&auto=format&fit=crop",
      technologies: ["IoT", "Arduino", "Solar Sensors", "C++", "Embedded Systems"],
      date: "Diploma Final Year",
      features: [
        "Solar-powered autonomous operation",
        "Soil-moisture sensor integration",
        "Automated water control system",
        "Arduino-based microcontroller logic",
        "Real-time monitoring",
        "Eco-friendly & sustainable design",
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="relative py-20 px-6 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl text-white md:text-5xl font-bold mt-2">Projects</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Here are some of my projects showcasing my skills across web development and IoT</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div key={project.id} data-aos="fade-up" data-aos-delay={i * 100}
                whileHover={{ y: -10 }} onClick={() => setSelectedProject(project)}
                className="group relative border rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-all shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-yellow-400 text-xs rounded-full border border-yellow-400/30">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />{selectedProject.date}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.liveLink && (
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
                    <p className="text-gray-400 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-400">
                          <span className="text-yellow-400 mr-3 mt-1">✓</span>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 text-sm font-medium">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
