"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contatti() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <div className="bg-gray-50">
      <div className="relative bg-gray-900 text-white py-20 sm:py-28 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Contattaci
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Siamo a tua disposizione per qualsiasi informazione.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <InfoCard
              icon={<PhoneIcon className="w-8 h-8" />}
              title="Telefono"
              text="+39 339 615 9785"
            />
            <InfoCard
              icon={<EnvelopeIcon className="w-8 h-8" />}
              title="Email"
              text="fanfarasettimotorinese@gmail.com"
            />
            <InfoCard
              icon={<MapPinIcon className="w-8 h-8" />}
              title="Sede"
              text="Via Buonarroti, 8 - Settimo T.se"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Seguici sui Social
              </h3>
              <p className="text-gray-600 mb-6">
                Rimani aggiornato sulle nostre attività e concerti.
              </p>
              <div className="flex space-x-4">
                <SocialIcon
                  href="https://www.facebook.com/fanfarasettimotorinese"
                  icon={<FaFacebookF />}
                />
                <SocialIcon
                  href="https://www.instagram.com/fanfarasettimotorinese/"
                  icon={<FaInstagram />}
                />
                <SocialIcon
                  href="https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA"
                  icon={<FaYoutube />}
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
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
  );
}

const InfoCard = ({ icon, title, text }) => (
  <motion.div
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    className="bg-white p-6 rounded-xl shadow-lg text-center"
  >
    <div className="bg-red-600 text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </motion.div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-red-600 hover:text-white"
  >
    {icon}
  </a>
);
