"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eventiCompleti from "../lib/EventData.js";
import { Button } from "./ui/button.jsx";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const CalendarioCompleto = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const raggruppaEventi = () => {
    const grouped = {};
    eventiCompleti.forEach((event) => {
      const monthYear = `${event.month} ${event.year}`;
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(event);
    });
    return grouped;
  };

  const ordinaMesi = (grouped) => {
    return Object.keys(grouped).sort((a, b) => {
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");
      if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
      return mesi.indexOf(monthA) - mesi.indexOf(monthB);
    });
  };

  const eventsByMonth = raggruppaEventi();
  const sortedMonths = ordinaMesi(eventsByMonth);

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

  const aggiungiAlCalendario = (evento) => {
    const [giorno] = evento.date.split(" ");
    const anno = evento.year;
    const meseNumero = mesi.indexOf(evento.month) + 1;
    const dataFormattata = `${anno}${String(meseNumero).padStart(
      2,
      "0"
    )}${String(parseInt(giorno)).padStart(2, "0")}`;
    const orarioInizio = evento.startTime.replace(":", "");
    const orarioFine = (evento.endTime || evento.startTime).replace(":", "");

    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.append("action", "TEMPLATE");
    url.searchParams.append("text", evento.title);
    url.searchParams.append(
      "dates",
      `${dataFormattata}T${orarioInizio}00/${dataFormattata}T${orarioFine}00`
    );
    url.searchParams.append("details", evento.description);
    url.searchParams.append("location", evento.location);
    window.open(url.toString(), "_blank");
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
            Calendario Eventi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Tutti gli appuntamenti della Fanfara Bersaglieri di Settimo
            Torinese.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12" ref={sectionRef}>
        {eventiCompleti.length === 0 ? (
          <div className="text-center py-16">
            <CalendarDaysIcon className="w-16 h-16 mx-auto text-gray-300" />
            <h3 className="mt-4 text-xl font-medium text-gray-600">
              Nessun evento in programma
            </h3>
            <p className="mt-2 text-gray-500">
              Torna a trovarci per futuri aggiornamenti.
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {sortedMonths.map((monthYear) => (
              <div key={monthYear} className="mb-12">
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-bold mb-6 pb-2 border-b-2 border-red-600"
                >
                  {monthYear}
                </motion.h2>
                <div className="space-y-8">
                  {eventsByMonth[monthYear].map((event) => (
                    <motion.div
                      key={event.id}
                      variants={itemVariants}
                      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:-translate-y-1 transition-transform duration-300"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {event.title}
                          </h3>
                          <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {event.description}
                        </p>
                        <div className="mt-auto space-y-3 text-sm text-gray-700">
                          <InfoRow
                            icon={<CalendarDaysIcon />}
                            text={event.date}
                          />
                          <InfoRow
                            icon={<MapPinIcon />}
                            text={event.location}
                          />
                          <InfoRow
                            icon={<ClockIcon />}
                            text={`${event.startTime}${
                              event.endTime ? ` - ${event.endTime}` : ""
                            }`}
                          />
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button
                            onClick={() => aggiungiAlCalendario(event)}
                            size="sm"
                            variant="ghost"
                            className="text-red-600 hover:bg-red-50"
                          >
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Aggiungi al calendario
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const InfoRow = ({ icon, text }) => (
  <div className="flex items-center">
    <div className="w-5 h-5 mr-3 text-red-600">{icon}</div>
    <span>{text}</span>
  </div>
);

export default CalendarioCompleto;
