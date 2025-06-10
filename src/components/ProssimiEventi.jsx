"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

const ProssimiEventi = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Sample events data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "Raduno Nazionale Bersaglieri",
      date: "15 Luglio 2025",
      month: "Luglio",
      year: "2025",
      location: "Roma, Italia",
      description:
        "Partecipazione al raduno nazionale con esibizione in Piazza del Popolo",
      image:
        "https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg",
      type: "Raduno",
      startTime: "10:00",
      endTime: "13:00",
    },
    {
      id: 2,
      title: "Concerto Estivo",
      date: "28 Agosto 2025",
      month: "Agosto",
      year: "2025",
      location: "Settimo Torinese, Piazza della Libertà",
      description: "Concerto all'aperto con repertorio tradizionale e moderno",
      image:
        "https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg",
      type: "Concerto",
      startTime: "21:00",
      endTime: "23:00",
    },
    {
      id: 3,
      title: "Commemorazione Caduti",
      date: "4 Novembre 2025",
      month: "Novembre",
      year: "2025",
      location: "Torino, Piazza Castello",
      description:
        "Cerimonia ufficiale in onore dei caduti con autorità civili e militari",
      image:
        "https://static.wixstatic.com/media/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png/v1/fill/w_795,h_315,al_c,q_85,enc_avif/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png",
      type: "Cerimonia",
      startTime: "10:30",
      endTime: "12:00",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="prossimi-eventi"
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">
            Prossimi <span className="text-red-600">Eventi</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-red-600 mx-auto mb-4"
          ></motion.div>
          <p className="max-w-2xl text-balance mx-auto text-lg text-gray-600">
            Scopri dove potrai ascoltare la Fanfara Bersaglieri di Settimo
            Torinese nei prossimi mesi
          </p>
        </motion.div>

        {/* Events grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  {event.date}
                </div>
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 text-sm font-medium">
                  {event.type}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="mt-auto space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2"
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
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/calendario"
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-none hover:bg-red-700 transition-colors duration-300 group"
          >
            Visualizza calendario completo
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProssimiEventi;
