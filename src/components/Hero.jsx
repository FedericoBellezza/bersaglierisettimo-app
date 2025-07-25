"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-bottom z-0 opacity-40"
        style={{
          backgroundImage: `url('/sfilata2.avif')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
      <div className="relative z-20 flex flex-col h-full justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
            Fanfara Bersaglieri
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-yellow-400 mt-2">
            Settimo Torinese
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-200 font-light"
        >
          Musica, passione e storia dal 1993. Unisciti a noi e vivi l'emozione
          della nostra musica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Scopri di più
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Contattaci
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
