"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CalendarioCompleto = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Eventi di esempio - sostituisci con i tuoi dati reali
  const eventiCompleti = [
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
      startTime: "09:30",
      endTime: "18:00",
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
      type: "Commemorazione",
      startTime: "10:00",
      endTime: null,
    },
    {
      id: 4,
      title: "Concerto di Natale",
      date: "20 Dicembre 2025",
      month: "Dicembre",
      year: "2025",
      location: "Teatro Civico, Settimo Torinese",
      description:
        "Tradizionale concerto natalizio con ospiti e repertorio delle feste",
      image:
        "https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg",
      type: "Concerto",
      startTime: "20:30",
      endTime: "22:30",
    },
    {
      id: 5,
      title: "Festa della Repubblica",
      date: "2 Giugno 2025",
      month: "Giugno",
      year: "2025",
      location: "Settimo Torinese, Piazza Vittorio Veneto",
      description: "Celebrazione ufficiale con autorità locali e parata",
      image:
        "https://static.wixstatic.com/media/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png/v1/fill/w_795,h_315,al_c,q_85,enc_avif/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png",
      type: "Cerimonia",
      startTime: "11:00",
      endTime: "12:30",
    },
    {
      id: 6,
      title: "Raduno Regionale Piemonte",
      date: "10 Maggio 2025",
      month: "Maggio",
      year: "2025",
      location: "Asti, Piazza Alfieri",
      description:
        "Raduno delle fanfare piemontesi con sfilata e concerto finale",
      image:
        "https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg",
      type: "Raduno",
      startTime: "09:00",
      endTime: "18:30",
    },
    {
      id: 7,
      title: "Festa della Musica",
      date: "21 Giugno 2025",
      month: "Giugno",
      year: "2025",
      location: "Parco della Resistenza, Settimo Torinese",
      description: "Esibizione nel contesto della festa europea della musica",
      image:
        "https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg",
      type: "Concerto",
      startTime: "17:00",
      endTime: null,
    },
    {
      id: 8,
      title: "Manifestazione Nazionale Bersaglieri",
      date: "18 Marzo 2026",
      month: "Marzo",
      year: "2026",
      location: "Milano, Piazza Duomo",
      description:
        "Raduno straordinario per l'anniversario della fondazione del Corpo",
      image:
        "https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg",
      type: "Raduno",
      startTime: "10:00",
      endTime: "17:00",
    },
  ];

  // Mesi per l'ordinamento
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Raggruppa gli eventi per mese
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

  // Ordina i mesi
  const ordinaMesi = (grouped) => {
    return Object.keys(grouped).sort((a, b) => {
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");
      if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
      return mesi.indexOf(monthA) - mesi.indexOf(monthB);
    });
  };

  // Calcola i gruppi di eventi
  const eventsByMonth = raggruppaEventi();
  const sortedMonths = ordinaMesi(eventsByMonth);

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

  const mesiNumero = {
    Gennaio: 1,
    Febbraio: 2,
    Marzo: 3,
    Aprile: 4,
    Maggio: 5,
    Giugno: 6,
    Luglio: 7,
    Agosto: 8,
    Settembre: 9,
    Ottobre: 10,
    Novembre: 11,
    Dicembre: 12,
  };

  // Funzione per aggiungere un evento al calendario senza dipendenze esterne
  const aggiungiAlCalendario = (evento) => {
    // Estrai le parti della data
    const [giorno, mese] = evento.date.split(" ");
    const anno = evento.year;
    const meseNumero = mesiNumero[evento.month];
    console.log("anno", anno);
    console.log("mese numero", meseNumero);
    console.log("giorno", giorno);

    // Formatta la data nel formato richiesto (YYYY-MM-DD)
    const dataFormattata = `${anno}${String(meseNumero).padStart(
      2,
      "0"
    )}${String(parseInt(giorno)).padStart(2, "0")}`;
    console.log("data formattata", dataFormattata);

    // Crea gli orari di inizio e fine
    const orarioInizio = evento.startTime;
    const orarioFine = evento.endTime || evento.startTime; // Usa lo stesso orario se non c'è un orario di fine

    // Crea l'URL per Google Calendar
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.append("action", "TEMPLATE");
    url.searchParams.append("text", evento.title);
    url.searchParams.append(
      "dates",
      `${dataFormattata}T${orarioInizio.replace(
        ":",
        ""
      )}00/${dataFormattata}T${orarioFine.replace(":", "")}00`
    );
    url.searchParams.append("details", evento.description);
    url.searchParams.append("location", evento.location);

    // Apri l'URL in una nuova finestra
    window.open(url.toString(), "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-black text-white relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://static.wixstatic.com/media/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg/v1/fill/w_1905,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-2 text-center"
          >
            Calendario <span className="text-red-600">Eventi</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-red-600 mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-center max-w-2xl"
          >
            Scopri tutte le date e gli eventi della Fanfara Bersaglieri di
            Settimo Torinese
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8" ref={sectionRef}>
        {/* Lista eventi */}
        {eventiCompleti.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-600">
              Nessun evento in programma
            </h3>
            <p className="text-gray-500 mt-2">
              Al momento non ci sono eventi pianificati
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {sortedMonths.map((monthYear) => (
              <div key={monthYear} className="mb-10">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200"
                >
                  {monthYear}
                </motion.h3>

                {/* Layout orizzontale per gli eventi */}
                <div className="space-y-6">
                  {eventsByMonth[monthYear].map((event) => (
                    <motion.div
                      key={event.id}
                      variants={itemVariants}
                      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Immagine a sinistra */}
                        <div className="md:w-1/3 relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover md:h-56"
                          />
                          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 m-2">
                            {event.type}
                          </div>
                        </div>

                        {/* Contenuto a destra */}
                        <div className="md:w-2/3 p-5">
                          <div className="flex justify-between items-start">
                            <h4 className="text-xl font-bold mb-2">
                              {event.title}
                            </h4>
                            <div className="bg-red-600 text-white px-3 py-1 text-sm font-medium">
                              {event.date}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                            {/* Orario */}
                            <div className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
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
                                {event.startTime}
                                {event.endTime && ` - ${event.endTime}`}
                              </span>
                            </div>

                            {/* Luogo */}
                            <div className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
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
                          </div>

                          <p className="text-gray-600 text-sm mb-4">
                            {event.description}
                          </p>

                          <button
                            onClick={() => aggiungiAlCalendario(event)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center cursor-pointer"
                          >
                            Aggiungi al calendario
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                          </button>
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

      {/* Call to Action - versione più compatta */}
      <div className="bg-red-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Vuoi partecipare ai nostri eventi?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Seguici sui nostri canali social per rimanere sempre aggiornato
            sulle nostre attività
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/fanfarasettimotorinese"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-5 py-2 font-medium hover:bg-gray-100 transition-colors"
            >
              Seguici su Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contatti"
              className="bg-transparent text-white px-5 py-2 font-medium border border-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Contattaci
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarioCompleto;
