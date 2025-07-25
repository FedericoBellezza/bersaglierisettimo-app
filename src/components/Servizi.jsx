"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Servizi = () => {
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

  const services = [
    {
      title: "Raduni e Manifestazioni",
      description:
        "Partecipiamo con orgoglio a raduni nazionali e locali, portando lo spirito e la musica dei Bersaglieri in ogni occasione.",
      imageUrl:
        "https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg",
    },
    {
      title: "Concerti",
      description:
        "Dai classici della tradizione alle marce militari, i nostri concerti sono un'esplosione di energia e passione.",
      imageUrl:
        "https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg",
    },
    {
      title: "Cerimonie e Commemorazioni",
      description:
        "Onoriamo la memoria e celebriamo le ricorrenze istituzionali con la solennità e il rispetto che ci contraddistinguono.",
      imageUrl:
        "https://static.wixstatic.com/media/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png/v1/fill/w_795,h_315,al_c,q_85,enc_avif/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            I Nostri Servizi
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            La nostra musica al servizio della comunità, per ogni occasione
            speciale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servizi;
