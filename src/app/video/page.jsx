"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Video() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Array di video per mantenere il codice DRY
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/bWmBmtbBS0E?si=jquZAcTcPx-6qXbA",
      title: "Esibizione Fanfara Bersaglieri",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/pfd8xOzlmug?si=CYqoCqGQfRfKp8L6",
      title: "Concerto Fanfara Bersaglieri",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/mV_aPMmGjgI?si=TM89RFqd8XSFEmFP",
      title: "Raduno Nazionale Bersaglieri",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/YlwXZZsctkc?si=zu6VZ4QCBhqwjkmX",
      title: "Commemorazione Caduti",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/jnWoBhOHrRw?si=UPcB8fQLEObX2lOY",
      title: "Festa della Repubblica",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/1-T97Wm_PKM?si=RSPeuDrEHSKwU21g",
      title: "Concerto di Natale",
    },
  ];

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Hero section */}
      <div className="bg-black text-white relative h-64 overflow-hidden">
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
            className="text-4xl md:text-5xl font-bold mb-2 text-center"
          >
            I Nostri <span className="text-red-600">Video</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-red-600 mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-center max-w-2xl"
          >
            Rivivi i momenti più emozionanti delle nostre esibizioni
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <main
        ref={sectionRef}
        className="flex-grow container mx-auto px-4 py-12 relative"
      >
        {/* Elementi decorativi di sfondo */}
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 bottom-32 w-64 h-64 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredVideo(video.id)}
              onHoverEnd={() => setHoveredVideo(null)}
              className="relative group"
            >
              <div className="relative aspect-video overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Cornice decorativa */}
                <div
                  className={`absolute -right-3 -top-3 w-16 h-16 border-t-2 border-r-2 border-red-600 z-10 transition-opacity duration-300 ${
                    hoveredVideo === video.id ? "opacity-100" : "opacity-40"
                  }`}
                ></div>
                <div
                  className={`absolute -left-3 -bottom-3 w-16 h-16 border-b-2 border-l-2 border-red-600 z-10 transition-opacity duration-300 ${
                    hoveredVideo === video.id ? "opacity-100" : "opacity-40"
                  }`}
                ></div>

                {/* Bordo rosso animato */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent z-10 pointer-events-none"
                  animate={{
                    borderColor:
                      hoveredVideo === video.id
                        ? "rgba(220, 38, 38, 0.6)"
                        : "rgba(220, 38, 38, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Video iframe */}
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                {/* Overlay sfumato che appare su hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
                  animate={{
                    opacity: hoveredVideo === video.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Overlay rosso che appare su hover */}
                <motion.div
                  className="absolute inset-0 bg-red-600 mix-blend-multiply pointer-events-none"
                  animate={{
                    opacity: hoveredVideo === video.id ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Icona play che appare su hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{
                    opacity: hoveredVideo === video.id ? 1 : 0,
                    scale: hoveredVideo === video.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-red-600 rounded-full p-3 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -z-10 -top-6 -left-8 w-16 h-16 bg-yellow-300 opacity-10 rounded-full blur-lg"></div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA",
                "_blank"
              );
            }}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium transition-all duration-300 group hover:bg-red-700 cursor-pointer"
          >
            Visita il nostro canale YouTube
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </motion.a>
        </motion.div>
      </main>

      {/* Call to Action */}
      <div className="bg-red-600 text-white py-12 relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-red-800 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Vuoi assistere dal vivo alle nostre esibizioni?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Consulta il nostro calendario eventi e vieni a trovarci ai nostri
            prossimi appuntamenti.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/calendario"
              className="bg-white text-red-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
            >
              Calendario Eventi
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contatti"
              className="bg-transparent text-white px-6 py-3 font-medium border border-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Contattaci
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
