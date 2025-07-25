"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Anniversario() {
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
    <section ref={sectionRef} className="bg-gray-900 text-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold mb-4">
              1995 – 2025
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              30 Anni di Corsa e Musica
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Celebriamo tre decenni dalla ricostituzione della nostra Fanfara.
              Un traguardo di passione, impegno e tradizione bersaglieresca.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row items-center gap-8 bg-gray-800/50 rounded-xl p-8 shadow-lg border border-gray-700"
          >
            <div className="flex-shrink-0">
              <img
                src="/logo-30esimo.png"
                alt="Logo 30° Anniversario"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-yellow-400">
                Una Storia che Continua
              </h3>
              <p className="mt-2 text-gray-300">
                Dal 1995, portiamo con orgoglio la nostra musica nelle piazze
                d'Italia e del mondo. Questo anniversario è un omaggio a tutti i
                bersaglieri che hanno contribuito a scrivere la nostra storia.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Button asChild size="lg">
              <Link href="/calendario">
                Scopri gli eventi del 30°
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
