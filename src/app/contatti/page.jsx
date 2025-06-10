"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Contatti() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Varianti per le animazioni
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-black text-white relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://static.wixstatic.com/media/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg/v1/fill/w_1905,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Elementi decorativi */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-yellow-400 to-red-800"></div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-30"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-2 text-center"
          >
            <span className="text-red-600">Contatta</span>ci
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-red-600 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-center max-w-2xl"
          >
            Siamo qui per rispondere a tutte le tue domande
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              variants={itemVariants}
              className="relative mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
                Informazioni di contatto
                <motion.span
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-red-600"
                ></motion.span>
              </h2>
              <div className="absolute -z-10 -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-300 opacity-10 rounded-full blur-lg"></div>
            </motion.div>

            {/* Grid di informazioni di contatto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Telefono */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-100"
              >
                <div className="bg-red-600 p-4 rounded-full text-white mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Telefono
                </h3>
                <p className="text-gray-600 text-lg mb-1">+39 339 615 9785</p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-100"
              >
                <div className="bg-red-600 p-4 rounded-full text-white mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600 text-lg mb-1 break-all text-nowrap">
                  fanfarasettimotorinese@gmail.com
                </p>
              </motion.div>

              {/* Sede */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="bg-red-600 p-4 rounded-full text-white mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sede
                </h3>
                <p className="text-gray-600 text-lg mb-1">Via Buonarroti, 8</p>
                <p className="text-gray-600 mb-1">
                  10036 Settimo Torinese (TO)
                </p>
              </motion.div>
            </div>

            {/* Social e Mappa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Social */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Seguici sui social
                </h3>
                <div className="flex space-x-6 mb-8">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/fanfarasettimotorinese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/fanfarasettimotorinese/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-4 rounded-full shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </motion.a>
                </div>
                <p className="text-gray-600">
                  Seguici sui nostri canali social per rimanere aggiornato sugli
                  ultimi eventi, concerti e novità della Fanfara di Settimo
                  Torinese.
                </p>
              </motion.div>

              {/* Mappa */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Dove siamo
                </h3>
                <div className="rounded-lg overflow-hidden border-l-4 border-red-600 shadow-lg h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.5840458025663!2d7.770407615573251!3d45.13953187909828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478871053582c461%3A0x10dd572d833ffa6d!2sVia%20Buonarroti%2C%208%2C%2010036%20Settimo%20Torinese%20TO!5e0!3m2!1sit!2sit!4v1655302462015!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 text-white py-16 mt-16 relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-red-800 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Vuoi unirti alla Fanfara?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Se sei appassionato di musica e vuoi far parte della nostra Fanfara,
            contattaci o vieni a trovarci durante le prove settimanali.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
