"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaMusic,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

const VieniASuonare = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("info");
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
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

  const tabItems = [
    { id: "info", label: "Info", icon: <FaMusic /> },
    { id: "program", label: "Programma", icon: <FaGraduationCap /> },
    { id: "join", label: "Partecipa", icon: <FaUsers /> },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background pattern and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-red-800 z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('/pattern.png')]"></div>
      </div>

      {/* Decorative elements - hidden on small screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-yellow-400 blur-3xl hidden md:block"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-yellow-400 blur-3xl hidden md:block"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
        >
          {/* Mobile Title - Visible only on small screens */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              <span className="text-yellow-300">Vieni a suonare</span> con noi
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          </motion.div>

          {/* Right Column - Interactive Card - Reordered to appear first on mobile */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 lg:order-2"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="relative overflow-hidden">
                <img
                  src="/suona-con-noi-orizzontale.jpeg"
                  alt="Lezione di musica"
                  className="w-full h-48 sm:h-60 md:h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                    Corsi <span className="text-yellow-300">Gratuiti</span>
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    Aperto a tutti, dai 10 ai 99 anni
                  </p>
                </div>
              </div>

              {/* Tabs Navigation - Simplified for mobile */}
              <div className="flex border-b border-gray-200">
                {tabItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-2 flex flex-col items-center justify-center text-xs md:text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-red-700 border-b-2 border-red-700"
                        : "text-gray-500 hover:text-red-700"
                    }`}
                  >
                    <span className="text-lg mb-1">{tab.icon}</span>
                    <span className="hidden xs:block">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content - Simplified for mobile */}
              <div className="p-4 md:p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "info" && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-red-50 p-3 rounded-lg flex flex-col items-center text-center">
                          <FaClock className="text-red-700 text-xl mb-2" />
                          <h4 className="font-semibold text-red-900 mb-1 text-sm">
                            Orario
                          </h4>
                          <p className="text-gray-700 text-xs">
                            Lunedì sera, ore 21:00
                          </p>
                        </div>

                        <div className="bg-red-50 p-3 rounded-lg flex flex-col items-center text-center">
                          <FaMapMarkerAlt className="text-red-700 text-xl mb-2" />
                          <h4 className="font-semibold text-red-900 mb-1 text-sm">
                            Sede
                          </h4>
                          <p className="text-gray-700 text-xs">
                            Via Buonarroti, 8
                          </p>
                        </div>

                        <div className="bg-red-50 p-3 rounded-lg flex flex-col items-center text-center">
                          <FaPhone className="text-red-700 text-xl mb-2" />
                          <h4 className="font-semibold text-red-900 mb-1 text-sm">
                            Contatti
                          </h4>
                          <p className="text-gray-700 text-xs">
                            +39 338 615 9785
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-red-700 font-bold text-base md:text-lg mb-2">
                          Cosa imparerai:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                          {[
                            "Conoscenza dello strumento",
                            "Teoria e pratica musicale",
                            "Addestramento formale",
                            "Tecniche di esecuzione",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "program" && (
                    <motion.div
                      key="program"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-red-700 font-bold text-base md:text-lg mb-3">
                            Programma del corso:
                          </h4>
                          <ol className="space-y-3">
                            {[
                              {
                                title: "Introduzione",
                                desc: "Strumenti e teoria musicale di base",
                              },
                              {
                                title: "Pratica",
                                desc: "Esercitazioni individuali e di gruppo",
                              },
                              {
                                title: "Perfezionamento",
                                desc: "Tecniche avanzate e sincronizzazione",
                              },
                              {
                                title: "Esibizione",
                                desc: "Partecipazione a eventi pubblici",
                              },
                            ].map((phase, index) => (
                              <li key={index} className="relative pl-7 text-sm">
                                <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-xs">
                                  {index + 1}
                                </div>
                                <h5 className="font-semibold text-red-900">
                                  {phase.title}
                                </h5>
                                <p className="text-gray-700 text-xs">
                                  {phase.desc}
                                </p>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "join" && (
                    <motion.div
                      key="join"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-red-700 font-bold text-base md:text-lg mb-3">
                            Come partecipare:
                          </h4>
                          <ul className="space-y-3 text-sm">
                            {[
                              "Vieni alle prove del lunedì sera",
                              "Chiamaci per un appuntamento",
                              "Non serve esperienza musicale",
                              "Porta entusiasmo e voglia di imparare",
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 mr-2 text-xs">
                                  {index + 1}
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* <div className="bg-red-50 p-4 rounded-lg">
                          <h5 className="font-bold text-red-900 mb-2 text-sm">
                            Prossimo open day:
                          </h5>
                          <p className="text-gray-800 mb-3 text-sm">
                            Lunedì 15 Giugno 2025, ore 20:00
                          </p>
                          <a
                            href="#contatti"
                            className="inline-block bg-red-700 text-white font-medium px-4 py-2 rounded text-sm hover:bg-red-800 transition-colors"
                          >
                            Prenota il tuo posto
                          </a>
                        </div> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card Footer */}
              <div className="bg-gradient-to-r from-red-700 to-red-800 p-3 text-center">
                <p className="text-white font-medium text-sm">
                  Non è mai troppo tardi per iniziare!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left Column - Text Content - Hidden on mobile, visible on larger screens */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 text-white space-y-6 lg:order-1 hidden lg:block"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-2"
              >
                <span className="text-yellow-300">Vieni a suonare</span> con noi
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-yellow-400 mb-6"
              />

              <motion.p
                variants={itemVariants}
                className="text-gray-200 text-lg leading-relaxed"
              >
                Entra a far parte della nostra famiglia musicale! Offriamo corsi
                gratuiti per imparare a suonare e per unirti alle nostre
                esibizioni.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-yellow-300">
                Perché unirti a noi?
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Tradizione",
                    desc: "Fai parte di una storia centenaria",
                  },
                  {
                    title: "Comunità",
                    desc: "Entra in una famiglia unita dalla passione per la musica",
                  },
                  {
                    title: "Crescita",
                    desc: "Sviluppa le tue capacità musicali con professionisti",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-yellow-400 mr-3" />
                    <div>
                      <span className="font-medium text-yellow-300">
                        {item.title}:{" "}
                      </span>
                      <span className="text-gray-300">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/contatti"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative overflow-hidden inline-flex items-center px-8 py-3 bg-yellow-400 text-red-900 font-bold rounded-none group"
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center">
                  UNISCITI A NOI
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile CTA Button - Only visible on mobile */}
          <motion.div variants={itemVariants} className="lg:hidden mt-6">
            <Link
              href="/contatti"
              className="block w-full bg-yellow-400 text-red-900 font-bold text-center py-3 px-6 text-sm"
            >
              UNISCITI A NOI
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VieniASuonare;
