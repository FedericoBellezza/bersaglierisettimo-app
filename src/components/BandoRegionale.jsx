"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function BandoRegionale() {
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
    <div className="bg-gray-50 py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Intestazione */}
            <motion.div
              variants={itemVariants}
              className="relative mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
                Il Bersagliere ha sempre 20 anni
                <motion.span
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-red-600"
                ></motion.span>
              </h2>
              <div className="absolute -z-10 -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-300 opacity-10 rounded-full blur-lg"></div>
            </motion.div>

            {/* Contenuto principale */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Colonna sinistra - Logo e info sul bando */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="relative mb-8 w-full max-w-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <img
                      src="./logo-regione.jpg"
                      alt="Logo Regione Piemonte"
                      className="w-full h-auto"
                    />
                  </motion.div>
                  {/* Elementi decorativi */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-600 opacity-30 -mr-2 -mt-2"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-600 opacity-30 -ml-2 -mb-2"></div>
                </div>

                <div className="bg-red-600 text-white p-4 rounded-sm shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-2">Bando Regionale</h3>
                  <p className="font-medium">Invecchiamento Attivo</p>
                </div>
              </motion.div>

              {/* Colonna destra - Descrizione */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md relative"
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600 opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-600 opacity-30"></div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  <span className="text-red-600">Invecchiamento Attivo</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Il progetto "Il Bersagliere ha sempre 20 anni" è stato
                  realizzato grazie al contributo della Regione Piemonte
                  nell'ambito del bando per l'invecchiamento attivo, che
                  promuove iniziative volte a valorizzare il ruolo delle persone
                  anziane nella società.
                </p>
                <p className="text-gray-600 mb-6">
                  Attraverso la musica e le attività della Fanfara, il progetto
                  mira a mantenere attivi i nostri membri senior, trasmettendo
                  contemporaneamente la tradizione musicale alle nuove
                  generazioni.
                </p>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-gray-500 text-sm">
                    Bando Regionale 2024-2025
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Citazione */}
            <motion.div
              variants={itemVariants}
              className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-red-800 opacity-10 rounded-full blur-3xl"></div>

              <div className="text-center relative z-10">
                <svg
                  className="w-10 h-10 mx-auto mb-4 text-yellow-300 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl font-bold mb-6">
                  "Il Bersagliere ha sempre 20 anni"
                </p>
                <p className="text-lg mb-4">
                  La passione per la musica e la tradizione dei bersaglieri
                  mantiene giovani nello spirito e nel corpo, creando un ponte
                  tra generazioni.
                </p>
                <div className="w-16 h-1 bg-yellow-300 opacity-70 mx-auto"></div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Scopri come il nostro progetto sta aiutando a mantenere attiva
                la tradizione musicale
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md"
              >
                Partecipa al progetto
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
