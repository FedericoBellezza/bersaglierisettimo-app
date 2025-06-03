"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ChiSiamo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="chi-siamo"
      ref={sectionRef}
      className="bg-white text-black py-24 px-4 relative overflow-hidden"
    >
      {/* Linea decorativa verticale */}
      <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-30"></div>

      <div className="container mx-auto max-w-5xl">
        {/* Header con titolo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-5xl font-bold relative">
            <span className="text-red-600">Chi</span> Siamo
            <div className="absolute -bottom-2 left-0 w-full h-px bg-red-600"></div>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Colonna sinistra - Logo e informazioni di contatto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Logo */}
            <div className="relative mb-12">
              <div className="w-40 h-40 rounded-full bg-red-600 flex items-center justify-center shadow-lg relative overflow-hidden">
                <img
                  src="/logo-bersaglieri.svg"
                  alt="Logo Bersaglieri"
                  className="w-28 h-28 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-700 to-transparent opacity-30"></div>
              </div>
              <div className="absolute -z-10 -inset-3 bg-yellow-400 rounded-full opacity-10 blur-lg"></div>
            </div>

            {/* Contatti */}
            <div className="space-y-8 w-full">
              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                  Email
                </h4>
                <p className="text-lg font-medium">
                  bersaglierisettimo@gmail.com
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                  Sede
                </h4>
                <p className="text-lg font-medium">
                  Via Esempio 123, Settimo Torinese
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-4 py-1">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                  Anno di fondazione
                </h4>
                <p className="text-lg font-medium">1972</p>
              </div>
            </div>
          </motion.div>

          {/* Colonna destra - Storia */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600 opacity-30"></div>

            <h3 className="text-2xl font-semibold mb-6 text-red-600">
              La nostra storia
            </h3>

            <div className="prose prose-lg prose-red">
              <p className="mb-6 text-gray-700 leading-relaxed">
                La Fanfara Bersaglieri sezione Medaglia d'Argento Fausto Balbo
                di Settimo Torinese si è ricostituita nel 1995 ed è diretta dal
                Capo Fanfara Bersagliere Francesco Rotondo il quale è anche il
                Presidente della Sezione di Settimo Torinese.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nella Fanfara, con passione e capacità si sono armonizzati i
                vecchi componenti con le nuove leve. Tutti loro, conoscono il
                sentimento bersaglieresco per l'esempio che ricevono da chi ha
                fatto il servizio militare e si sentono anche loro figli di Papà
                Sandrin, Alessandro La Marmora, fondatore del Corpo dei
                Bersaglieri.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#calendario"
                className="px-8 py-3 bg-red-600 text-white font-medium rounded-none hover:bg-red-700 transition-colors duration-300 inline-flex items-center group"
              >
                Calendario eventi
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
              </a>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-600 opacity-30"></div>
          </motion.div>
        </div>

        {/* Citazione in basso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <blockquote className="italic text-xl text-gray-600">
            "La corsa dei bersaglieri è il simbolo della nostra determinazione e
            del nostro spirito."
          </blockquote>
          <div className="mt-2 text-red-600 font-medium">
            — Tradizione Bersaglieri
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChiSiamo;
