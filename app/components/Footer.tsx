import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Touisiftarique", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/tousiftarique", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:ertousif49@gmail.com", label: "Email" },
    // { icon: <Phone className="w-5 h-5" />, href: "tel:+916204190723", label: "Phone" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3">
          {/* Column 1: Branding */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">Tousif Tarique | Developer</h3>
            <p className="mt-2 text-sm">
              Aspiring Web Developer passionate about building scalable, user-friendly web applications with modern technologies.
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                  className="hover:text-yellow-400 transition duration-150 flex items-center gap-1">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Portfolio */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Portfolio</h4>
            <ul className="space-y-3">
              <li><Link href="#projects" className="hover:text-white transition duration-150 ease-in-out">Featured Projects</Link></li>
              <li><Link href="#skills" className="hover:text-white transition duration-150 ease-in-out">Skills & Tech Stack</Link></li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-150 ease-in-out">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li><a href="mailto:ertousif49@gmail.com" className="hover:text-white transition duration-150 ease-in-out">ertousif49@gmail.com</a></li>
              {/* <li><a href="tel:+916204190723" className="hover:text-white transition duration-150 ease-in-out">+91-6204190723</a></li> */}
              <li><span>Hyderabad, India</span></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tousif Tarique. All rights reserved. Crafted with{" "}
            <span className="text-blue-400">React.js</span> & <span className="text-teal-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
