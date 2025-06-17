"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Anniversario() {
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Badge anniversario */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="bg-red-600 text-white rounded-full px-6 py-2 text-md font-bold">
                1995 - 2025
              </div>
            </motion.div>

            {/* Titolo principale */}
            <motion.div variants={itemVariants} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="text-red-600">30° Anniversario</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-red-600"
                ></motion.span>
              </h2>
              {/* <p className="text-lg text-gray-600">
                Celebriamo tre decenni di storia, musica e tradizione
              </p> */}
            </motion.div>

            {/* Contenuto principale */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-6 shadow-md"
            >
              {/* Immagine o logo */}
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className=" rounded-full p-4  relative">
                    <img src="./logo-30esimo.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Testo */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  La Fanfara di Settimo Torinese
                </h3>
                <p className="text-gray-600 mb-4">
                  Quest'anno celebriamo il 30° anniversario dalla ricostituzione
                  della nostra Fanfara. Dal 1995 ad oggi, abbiamo portato avanti
                  con passione la tradizione musicale dei bersaglieri,
                  partecipando a eventi e manifestazioni in tutta Italia.
                </p>
              </div>
            </motion.div>

            {/* Eventi principali */}
            {/* <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-600">
                <div className="font-bold text-red-600 mb-1">
                  15 Giugno 2024
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Concerto Commemorativo
                </h4>
                <p className="text-gray-600 text-sm">
                  Teatro Civico di Settimo Torinese, ore 21:00
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="font-bold text-yellow-600 mb-1">
                  20-22 Settembre 2024
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Mostra Fotografica
                </h4>
                <p className="text-gray-600 text-sm">
                  Sala Espositiva Comunale, ingresso libero
                </p>
              </div>
            </motion.div> */}

            {/* Call to action */}
            <motion.div variants={itemVariants} className="mt-8 text-center">
              <Link
                href="/calendario"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md"
              >
                Scopri gli eventi
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
