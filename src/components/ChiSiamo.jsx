"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import {
  AtSymbolIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const ChiSiamo = () => {
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
      id="chi-siamo"
      ref={sectionRef}
      className="bg-white text-gray-800 py-20 sm:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            La Nostra Storia
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Passione, tradizione e musica che corrono insieme dal 1972.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-4">
              La Fanfara Bersaglieri di Settimo Torinese, sezione Medaglia
              d'Argento Fausto Balbo, si è ricostituita nel 1995. È diretta con
              maestria dal Capo Fanfara Bersagliere Francesco Rotondo, che è
              anche il Presidente della Sezione.
            </p>
            <p>
              Nella nostra Fanfara, l'esperienza dei veterani si fonde con
              l'entusiasmo delle nuove leve. Tutti i componenti, ispirati
              dall'esempio di chi ha servito nel corpo, condividono il profondo
              sentimento bersaglieresco e si sentono orgogliosamente figli di
              Papà Sandrin, il fondatore Alessandro La Marmora.
            </p>
            <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700">
              "La corsa è il nostro simbolo di determinazione, la musica la
              nostra voce."
            </blockquote>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6"
          >
            <InfoItem
              icon={<CalendarDaysIcon className="w-7 h-7 text-red-600" />}
              label="Anno di fondazione"
              value="1972"
            />
            <InfoItem
              icon={<AtSymbolIcon className="w-7 h-7 text-red-600" />}
              label="Email"
              value="fanfarasettimotorinese@gmail.com"
              isLink={`mailto:fanfarasettimotorinese@gmail.com`}
            />
            <InfoItem
              icon={<MapPinIcon className="w-7 h-7 text-red-600" />}
              label="Sede"
              value="Via Buonarroti, 8 - Settimo T.se"
              isLink="https://www.google.it/maps/place/Via+Buonarroti,+8,+10036+Settimo+Torinese+TO"
            />
            <Button asChild size="lg" className="w-full mt-6">
              <a href="#contatti">Entra in contatto con noi</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value, isLink = null }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-10">{icon}</div>
    <div className="ml-4">
      <h4 className="text-md font-semibold text-gray-800">{label}</h4>
      {isLink ? (
        <a
          href={isLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-red-700 hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

export default ChiSiamo;
