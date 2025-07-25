"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  AcademicCapIcon,
  ClockIcon,
  MapPinIcon,
  MusicalNoteIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const VieniASuonare = () => {
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
      className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20 sm:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-yellow-400">Vieni a suonare</span> con noi
            </h2>
            <p className="text-lg text-gray-200 max-w-prose">
              Entra a far parte della nostra famiglia musicale! Offriamo corsi
              gratuiti per imparare a suonare uno strumento e unirti alle nostre
              esibizioni. Non è richiesta esperienza, solo passione!
            </p>
            <div className="flex flex-wrap gap-4">
              <Feature
                icon={<MusicalNoteIcon className="w-6 h-6" />}
                text="Corsi gratuiti"
              />
              <Feature
                icon={<AcademicCapIcon className="w-6 h-6" />}
                text="Nessuna esperienza richiesta"
              />
              <Feature
                icon={<UserGroupIcon className="w-6 h-6" />}
                text="Per tutte le età"
              />
            </div>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contatti">
                  Inizia la tua avventura
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              Informazioni sui corsi
            </h3>
            <div className="space-y-4">
              <InfoRow
                icon={<ClockIcon className="w-6 h-6 text-yellow-400" />}
                label="Quando"
                value="Ogni Lunedì, ore 21:00"
              />
              <InfoRow
                icon={<MapPinIcon className="w-6 h-6 text-yellow-400" />}
                label="Dove"
                value="Via Buonarroti 8, Settimo T.se"
              />
              <InfoRow
                icon={<PhoneIcon className="w-6 h-6 text-yellow-400" />}
                label="Contatti"
                value="+39 339 615 9785"
              />
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <h4 className="font-semibold text-lg mb-2">Cosa imparerai:</h4>
              <ul className="space-y-1 text-gray-200">
                <li>Teoria e pratica musicale</li>
                <li>Uso dello strumento</li>
                <li>Addestramento formale</li>
                <li>Musica d'insieme</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <p className="font-semibold">{label}</p>
      <p className="text-gray-200">{value}</p>
    </div>
  </div>
);

export default VieniASuonare;
