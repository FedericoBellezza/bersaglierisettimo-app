"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Video() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen pt-20  lg:pt-30 bg-slate-700">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-5">I Nostri Video</h2>
          <p className="text-white">
            Rivivi i momenti più emozionanti delle nostre esibizioni
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center"
        >
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bWmBmtbBS0E?si=jquZAcTcPx-6qXbA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pfd8xOzlmug?si=CYqoCqGQfRfKp8L6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mV_aPMmGjgI?si=TM89RFqd8XSFEmFP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YlwXZZsctkc?si=zu6VZ4QCBhqwjkmX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jnWoBhOHrRw?si=UPcB8fQLEObX2lOY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden border-white aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1-T97Wm_PKM?si=RSPeuDrEHSKwU21g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Vuoi vedere di più?
          </h3>
          <a
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA",
                "_blank"
              );
            }}
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 mb-20 px-6 rounded-lg transition duration-300 cursor-pointer"
          >
            Visita il nostro canale YouTube <span>→</span>
          </a>
        </motion.div>
      </main>
    </div>
  );
}
