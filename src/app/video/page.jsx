"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Video() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/bWmBmtbBS0E?si=jquZAcTcPx-6qXbA",
      title: "Esibizione Fanfara Bersaglieri",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/pfd8xOzlmug?si=CYqoCqGQfRfKp8L6",
      title: "Concerto Fanfara Bersaglieri",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/mV_aPMmGjgI?si=TM89RFqd8XSFEmFP",
      title: "Raduno Nazionale Bersaglieri",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/YlwXZZsctkc?si=zu6VZ4QCBhqwjkmX",
      title: "Commemorazione Caduti",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/jnWoBhOHrRw?si=UPcB8fQLEObX2lOY",
      title: "Festa della Repubblica",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/1-T97Wm_PKM?si=RSPeuDrEHSKwU21g",
      title: "Concerto di Natale",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            I Nostri Video
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Rivivi i momenti più emozionanti delle nostre esibizioni e concerti.
          </motion.p>
        </div>
      </div>

      <main ref={sectionRef} className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">
                  {video.title}
                </h3>
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
          <Button asChild size="lg">
            <a
              href="https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita il nostro Canale YouTube
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
