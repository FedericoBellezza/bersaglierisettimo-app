"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

const InfoSection = ({
  title,
  imageUrl,
  imageAlt,
  children,
  imageLeft = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Varianti per le animazioni
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
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative py-16 overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>

      {/* Linea decorativa */}
      <motion.div
        className={`absolute top-0 ${
          imageLeft ? "right-0" : "left-0"
        } w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent`}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      ></motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-center">
          {/* Colonna Immagine */}
          <motion.div
            className={`${
              imageLeft ? "order-1" : "order-2 lg:order-2"
            } relative`}
            variants={itemVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative overflow-hidden"
              animate={{
                y: isHovered ? -5 : 0,
                boxShadow: isHovered
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Cornice decorativa */}
              <div
                className={`absolute ${
                  imageLeft ? "-right-3" : "-left-3"
                } -top-3 w-16 h-16 border-t-2 border-${
                  imageLeft ? "r" : "l"
                }-2 border-red-600`}
              ></div>
              <div
                className={`absolute ${
                  imageLeft ? "-left-3" : "-right-3"
                } -bottom-3 w-16 h-16 border-b-2 border-${
                  imageLeft ? "l" : "r"
                }-2 border-red-600`}
              ></div>

              {/* Immagine con effetti */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay sfumato */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  animate={{
                    opacity: isHovered ? 0.7 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Overlay rosso che appare su hover */}
                <motion.div
                  className="absolute inset-0 bg-red-600 mix-blend-multiply"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Elemento decorativo che si muove su hover */}
            <motion.div
              className="absolute -z-10 w-full h-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: isHovered ? 2 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`absolute ${
                  imageLeft ? "-right-8" : "-left-8"
                } -bottom-8 w-32 h-32 bg-yellow-300 opacity-10 rounded-full blur-xl`}
              ></div>
            </motion.div>
          </motion.div>

          {/* Colonna Testo */}
          <motion.div
            className={`${
              imageLeft ? "order-2 lg:order-2" : "order-1"
            } px-4 py-6 lg:p-12`}
            variants={itemVariants}
          >
            {/* Titolo con decorazione */}
            <div className="relative mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider relative inline-block"
                animate={{
                  textShadow: isHovered
                    ? "0px 1px 2px rgba(0,0,0,0.1)"
                    : "none",
                }}
              >
                {title}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-red-600"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.span>
              </motion.h2>
              <div className="absolute -z-10 -top-6 -left-8 w-16 h-16 bg-yellow-300 opacity-10 rounded-full blur-lg"></div>
            </div>

            {/* Contenuto con stile migliorato */}
            <motion.div
              className="prose prose-lg max-w-none text-gray-700"
              variants={itemVariants}
            >
              {children}
            </motion.div>

            {/* Pulsante CTA */}
            <motion.div
              className="mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elemento decorativo di sfondo */}
      <div
        className={`absolute ${
          imageLeft ? "left-0" : "right-0"
        } top-1/2 transform -translate-y-1/2 w-32 h-32 bg-red-600 opacity-5 rounded-full blur-3xl`}
      ></div>
    </motion.section>
  );
};

// Componente principale che utilizza InfoSection
const EventsSection = () => {
  return (
    <div className="bg-white">
      {/* Intestazione della sezione */}
      <div className="py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          I Nostri <span className="text-red-600">Servizi</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-1 bg-red-600 mx-auto mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
          Scopri le attività e gli eventi della Fanfara Bersaglieri di Settimo
          Torinese
        </motion.p>
      </div>

      {/* Sezioni informative */}
      <InfoSection
        title="RADUNI E MANIFESTAZIONI"
        imageUrl="https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg"
        imageAlt="Fanfara dei Bersaglieri in una manifestazione"
        imageLeft={false}
      >
        <p>
          La Fanfara partecipa con orgoglio a raduni nazionali e locali,
          portando lo spirito e la musica dei Bersaglieri in ogni occasione.
          Segui il nostro calendario per scoprire i prossimi eventi!
        </p>
      </InfoSection>

      <InfoSection
        title="CONCERTI"
        imageUrl="https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg"
        imageAlt="Concerto della Fanfara dei Bersaglieri"
        imageLeft={true}
      >
        <p>
          Dai classici della tradizione bersaglieresca alle marce militari, i
          nostri concerti sono un'esplosione di energia e passione. Vieni ad
          ascoltarci dal vivo!
        </p>
      </InfoSection>

      <InfoSection
        title="CERIMONIE E COMMEMORAZIONI"
        imageUrl="https://static.wixstatic.com/media/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png/v1/fill/w_795,h_315,al_c,q_85,enc_avif/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png"
        imageAlt="Fanfara durante una cerimonia ufficiale"
        imageLeft={false}
      >
        <p>
          Onoriamo la memoria e celebriamo le ricorrenze istituzionali con la
          solennità e il rispetto che contraddistinguono il corpo dei
          Bersaglieri.
        </p>
      </InfoSection>
    </div>
  );
};

export default EventsSection;
