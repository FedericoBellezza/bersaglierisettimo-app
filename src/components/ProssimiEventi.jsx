"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import events from "../lib/EventData.js";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ProssimiEventi = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const monthMap = {
    Gennaio: 0,
    Febbraio: 1,
    Marzo: 2,
    Aprile: 3,
    Maggio: 4,
    Giugno: 5,
    Luglio: 6,
    Agosto: 7,
    Settembre: 8,
    Ottobre: 9,
    Novembre: 10,
    Dicembre: 11,
  };

  const upcomingEvents = events
    .map((event) => {
      const [day, monthName, year] = event.date.split(" ");
      const month = monthMap[monthName];
      return {
        ...event,
        dateObject: new Date(year, month, day),
      };
    })
    .filter((event) => event.dateObject >= new Date())
    .sort((a, b) => a.dateObject - b.dateObject)
    .slice(0, 3);

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
    hidden: { y: 30, opacity: 0 },
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
      className="py-20 sm:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Prossimi Eventi
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Seguici dal vivo nei nostri prossimi appuntamenti. La nostra musica
            non si ferma mai!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {event.description}
                </p>

                <div className="mt-auto space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-3 text-red-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-3 text-red-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-3 text-red-600" />
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className={
              "bg-red-600 text-white hover:bg-red-500 transition-colors duration-300"
            }
          >
            <Link href="/calendario">
              Vedi tutti gli eventi
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProssimiEventi;
