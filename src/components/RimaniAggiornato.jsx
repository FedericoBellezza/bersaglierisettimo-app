"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const RimaniAggiornato = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione invio form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset dopo un po'
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 overflow-hidden"
    >
      {/* Background con effetto parallasse */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
            filter: "brightness(0.2) contrast(1.2)",
            transform: isInView ? "scale(1.05)" : "scale(1)",
            transition: "transform 8s ease-out",
          }}
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/30 to-black opacity-80"></div>
      </div>

      {/* Elemento decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-yellow-300/20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-yellow-300/10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header con animazione */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              RIMANI <span className="text-yellow-400">AGGIORNATO</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-24 bg-red-600 mx-auto mb-6 origin-left"
            />
            <p className="text-gray-300 text-lg max-w-lg mx-auto">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti su
              eventi, concerti e tutte le novità della Fanfara Bersaglieri.
            </p>
          </motion.div>

          {/* Form container con effetto vetro */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl border border-white/10" />

            <div className="relative p-8 md:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <motion.div
                      className="flex-1"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-yellow-300 text-sm font-medium mb-2"
                      >
                        Il tuo indirizzo email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                          placeholder="nome@esempio.it"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-yellow-400/5 rounded-md pointer-events-none" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="md:self-end"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className={`relative overflow-hidden px-8 cursor-pointer py-4 ${
                          isSubmitting ? "bg-gray-600" : "bg-red-600"
                        } text-white font-bold rounded-md transition-all duration-300 shadow-lg`}
                      >
                        {/* Effetto hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400"
                          initial={{ x: "-100%" }}
                          animate={{ x: isHovered ? "0%" : "-100%" }}
                          transition={{ duration: 0.4 }}
                        />

                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              INVIO...
                            </>
                          ) : (
                            <>
                              ISCRIVITI ORA
                              <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xs text-gray-400 text-center"
                  >
                    Iscrivendoti accetti la nostra{" "}
                    <a href="#" className="text-yellow-400 hover:underline">
                      Privacy Policy
                    </a>
                    . Non invieremo mai spam.
                  </motion.p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Grazie per l'iscrizione!
                  </h3>
                  <p className="text-gray-300">
                    Ti terremo aggiornato sulle nostre attività.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Eventi",
                description: "Ricevi notifiche sui prossimi eventi e concerti",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                ),
                title: "News",
                description: "Aggiornamenti sulla vita della Fanfara",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                ),
                title: "Musica",
                description: "Contenuti esclusivi e registrazioni",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-yellow-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RimaniAggiornato;
