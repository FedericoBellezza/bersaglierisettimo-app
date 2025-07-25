"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BandoRegionale() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <section
      ref={sectionRef}
      className="bg-gray-100 py-20 sm:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Il Bersagliere ha sempre 20 anni
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Un progetto per l'invecchiamento attivo sostenuto dalla Regione
              Piemonte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="text-gray-700">
              <p className="mb-4">
                Il progetto <strong>"Il Bersagliere ha sempre 20 anni"</strong>{" "}
                è stato realizzato con il prezioso contributo della{" "}
                <strong>Regione Piemonte</strong>, nell'ambito del bando per
                l'invecchiamento attivo.
              </p>
              <p>
                Questa iniziativa mira a valorizzare il ruolo fondamentale delle
                persone anziane nella nostra comunità, promuovendo il loro
                benessere e la partecipazione sociale. Attraverso la musica e le
                attività della Fanfara, creiamo un ponte tra generazioni,
                mantenendo attivi i nostri membri senior e trasmettendo la ricca
                tradizione musicale ai più giovani.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="/logo-regione.jpg"
                alt="Logo Regione Piemonte"
                className="w-48 h-auto mb-4"
              />
              <h3 className="text-xl font-bold text-red-600">
                Con il contributo di
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                Regione Piemonte
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Bando "Invecchiamento Attivo" 2024-2025
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
