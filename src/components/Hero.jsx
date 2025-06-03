"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-210 overflow-hidden bg-black">
      {/* Background image with minimal treatment */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg/v1/fill/w_1905,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg')`,
        }}
      />

      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Clean, minimal layout */}
      <div className="relative z-20 flex flex-col h-full justify-center items-center px-6">
        {/* Logo - small and elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src="/logo-bersaglieri.svg"
            className="h-16 md:h-20 w-auto"
            alt="Logo Fanfara Bersaglieri"
          />
        </motion.div>

        {/* Title with clean typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            FANFARA
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 tracking-tight mt-2">
            BERSAGLIERI
          </h2>
          <div className="w-16 h-[1px] bg-red-600 mx-auto my-6"></div>
          <p className="text-xl md:text-2xl font-light uppercase tracking-widest text-white">
            SETTIMO TORINESE
          </p>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L8 20M8 20L2 14M8 20L14 14"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
