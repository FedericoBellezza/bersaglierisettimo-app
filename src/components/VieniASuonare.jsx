"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const VieniASuonare = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // <section className="bg-gradient-to-br from-red-800 to-red-700 text-gray-100 py-24 px-4 relative overflow-hidden">
    //   {/* Pattern decorativo */}
    //   <div className="absolute inset-0 opacity-10">
    //     <div className="absolute inset-0 bg-[url('/pattern-bersaglieri.png')] bg-repeat opacity-20"></div>
    //   </div>

    //   <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-16 relative z-10">
    //     <div
    //       className={`lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0 transition-all duration-700 ${
    //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    //       }`}
    //     >
    //       <h2 className="text-5xl font-extrabold text-yellow-300 mb-6 leading-tight drop-shadow-md">
    //         VIENI A SUONARE CON NOI
    //       </h2>
    //       <p className="text-xl text-gray-100 leading-relaxed">
    //         Entra a far parte della nostra famiglia musicale! Offriamo corsi
    //         gratuiti per imparare a suonare e per unirti alle nostre esibizioni.
    //       </p>
    //       <div className="mt-8 hidden lg:block">
    //         <Button
    //           variant="outline"
    //           className="bg-yellow-300 text-red-700 hover:bg-yellow-400 border-none font-bold text-lg px-8 py-6 h-auto shadow-lg transition-all hover:scale-105"
    //         >
    //           Scopri di più
    //         </Button>
    //       </div>
    //     </div>

    //     <Card
    //       className={`lg:w-2/3 w-full max-w-lg border-none transition-all duration-700 delay-300 ${
    //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    //       }`}
    //     >
    //       <CardHeader className="bg-red-600 text-white rounded-t-xl pb-4">
    //         <CardTitle className="text-3xl font-bold text-center text-yellow-300">
    //           CORSI GRATUITI
    //         </CardTitle>
    //       </CardHeader>

    //       <CardContent className="p-6 space-y-6">
    //         <div className="relative overflow-hidden rounded-xl">
    //           <img
    //             className="w-full h-auto rounded-xl shadow-xl hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
    //             src="/suona-con-noi.jpg"
    //             alt="Musicisti della Fanfara dei Bersaglieri"
    //             style={{ filter: "grayscale(0.7)" }}
    //           />
    //           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
    //         </div>

    //         <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    //           <h4 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-200 pb-2">
    //             Cosa imparerai:
    //           </h4>
    //           <ul className="space-y-3 mb-6 text-lg text-gray-700">
    //             <li className="flex items-center gap-2">
    //               <span className="text-yellow-500">•</span> Conoscenza dello
    //               strumento
    //             </li>
    //             <li className="flex items-center gap-2">
    //               <span className="text-yellow-500">•</span> Teoria e pratica
    //               musicale
    //             </li>
    //             <li className="flex items-center gap-2">
    //               <span className="text-yellow-500">•</span> Addestramento
    //               formale
    //             </li>
    //           </ul>
    //         </div>
    //       </CardContent>

    //       <CardFooter className="bg-yellow-300 p-6 rounded-b-xl flex flex-col items-center">
    //         <p className="text-lg font-bold text-red-700 mb-2">
    //           Tutti i lunedì sera dalle ore 21:00
    //         </p>
    //         <p className="text-md text-gray-700 mb-4 text-balance text-center">
    //           <span className="font-medium">
    //             Via Boccanelli, 8 - Settimo T.se
    //           </span>
    //         </p>
    //         <p className="text-md text-gray-700">
    //           Per informazioni:{" "}
    //           <a
    //             href="tel:+393396159785"
    //             className="text-red-600 hover:text-red-800 font-semibold underline transition-colors inline-flex items-center gap-1"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="lucide lucide-phone"
    //             >
    //               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    //             </svg>
    //             +39 339 615 9785
    //           </a>
    //         </p>
    //         <Button className="mt-6 lg:hidden bg-red-700 text-yellow-300 hover:bg-red-800 font-bold">
    //           Scopri di più
    //         </Button>
    //       </CardFooter>
    //     </Card>
    //   </div>
    // </section>

    <div className="w-full bg-red-800 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-yellow-300 space-y-6">
            <h2 className="text-5xl md:text-5xl font-extrabold uppercase text-balance">
              Vieni a suonare con noi
            </h2>
            <p className="text-white text-lg text-balance">
              Entra a far parte della nostra famiglia musicale! <br /> Offriamo
              corsi gratuiti per imparare a suonare e per unirti alle nostre
              esibizioni.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-semibold py-3 px-8 rounded-md transition duration-300">
              Scopri di più
            </button>
          </div>

          {/* Right Column - Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-5">
            {/* Card Header */}
            <div className=" py-3 text-center">
              <h3 className="text-red-700 text-4xl italic font-bold uppercase">
                Corsi Gratuiti
              </h3>
            </div>

            {/* Card Image */}
            <div className="p-4">
              <img
                src="/suona-con-noi.jpg"
                alt="Lezione di musica"
                className="w-full h-80 grayscale object-cover object-top rounded-2xl"
              />
            </div>

            {/* What You'll Learn */}
            <div className="px-6 py-4">
              <h4 className="text-red-700 font-bold text-xl mb-3">
                Cosa imparerai:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Conoscenza dello strumento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Teoria e pratica musicale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Addestramento formale</span>
                </li>
              </ul>
            </div>

            {/* Course Info */}
            <div className="bg-linear-to-br from-yellow-400 to-orange-400 p-6 space-y-3 rounded-2xl">
              <div className="flex items-center justify-center">
                <FaClock className="text-red-800 mr-2" />
                <p className="font-semibold text-red-900">
                  Tutti i lunedì sera dalle ore 21:00
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-800 mr-2" />
                <p className="font-semibold text-red-900">
                  Via Boccanelli, 8 - Settimo T.se
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaPhone className="text-red-800 mr-2" />
                <p className="font-semibold text-red-900">
                  Per informazioni: +39 338 615 9785
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VieniASuonare;
