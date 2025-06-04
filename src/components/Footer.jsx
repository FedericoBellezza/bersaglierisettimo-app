"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerLinks = [
    {
      title: "Navigazione",
      links: [
        { name: "Home", href: "/" },
        { name: "Chi Siamo", href: "#chi-siamo" },
        { name: "Eventi", href: "#eventi" },
        { name: "Galleria", href: "#galleria" },
        { name: "Contatti", href: "#contatti" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/fanfarasettimotorinese",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/fanfarasettimotorinese/",
      color: "#E4405F",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA",
      color: "#FF0000",
    },
  ];

  const contactInfo = [
    { icon: <FaPhone className="text-yellow-400" />, text: "+39 339 615 9785" },
    {
      icon: <FaEnvelope className="text-yellow-400" />,
      text: "fanfarasettimotorinese@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-yellow-400" />,
      text: "Via Buonarroti, 8 - Settimo T.se",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white pt-16 relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-yellow-400 to-red-800"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="flex justify-between flex-wrap gap-8 pb-12">
          {/* Logo and Description */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <img
                src="/logo-bersaglieri.svg"
                alt="Logo Fanfara Bersaglieri"
                className="h-12 mr-3"
              />
              <div>
                <h3 className="text-lg font-bold text-yellow-400">
                  FANFARA BERSAGLIERI
                </h3>
                <p className="text-xs text-gray-400">SETTIMO TORINESE</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Dal 1972 portiamo avanti la tradizione musicale dei Bersaglieri,{" "}
              <br />
              partecipando a eventi, manifestazioni e cerimonie ufficiali in
              tutta Italia.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-700 hover:border-transparent transition-colors duration-300"
                  style={{
                    backgroundColor:
                      hoveredSocial === social.name
                        ? social.color
                        : "transparent",
                  }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((column) => (
            <motion.div
              variants={itemVariants}
              key={column.title}
              className="col-span-1"
            >
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                {column.title}
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1"
          >
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Contattaci
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter Form (Compact version) */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-sm font-medium text-white mb-3">
                Iscriviti alla newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="bg-gray-800 text-white text-sm px-3 py-2 rounded-l-sm flex-grow focus:outline-none focus:ring-1 focus:ring-yellow-400"
                />
                <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium rounded-r-sm transition-colors cursor-pointer">
                  Invia
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Fanfara Bersaglieri Settimo Torinese.
            Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-600">
              Sviluppato con ♥ da{" "}
              <span
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/federicobellezzadev/",
                    "_blank"
                  )
                }
                className="text-red-500 hover:text-red-400 cursor-pointer"
              >
                Federico Bellezza
              </span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
