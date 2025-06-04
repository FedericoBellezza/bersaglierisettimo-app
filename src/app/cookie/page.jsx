"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCookieBite,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const CookiePolicy = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always enabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Check if cookie consent has been given before
  useEffect(() => {
    // Check after a short delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setShowBanner(true);
      } else {
        setCookiePreferences(JSON.parse(consent));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };

    setCookiePreferences(allAccepted);
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptSelectedCookies = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookiePreferences));
    setShowBanner(false);
  };

  const toggleCookieType = (type) => {
    if (type === "necessary") return; // Can't toggle necessary cookies

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cookieTypes = [
    {
      id: "necessary",
      name: "Necessari",
      description:
        "I cookie necessari sono essenziali per il funzionamento del sito web. Questi cookie garantiscono le funzionalità di base e le caratteristiche di sicurezza del sito web.",
      canDisable: false,
    },
    {
      id: "analytics",
      name: "Analitici",
      description:
        "I cookie analitici ci aiutano a capire come utilizzi il nostro sito web, quali pagine sono più popolari e come ti muovi all'interno del sito. Questi dati ci aiutano a migliorare la tua esperienza di navigazione.",
      canDisable: true,
    },
    {
      id: "marketing",
      name: "Marketing",
      description:
        "I cookie di marketing vengono utilizzati per tracciare i visitatori sui siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti per il singolo utente.",
      canDisable: true,
    },
    {
      id: "preferences",
      name: "Preferenze",
      description:
        "I cookie di preferenza consentono al sito web di ricordare informazioni che modificano il modo in cui il sito si comporta o appare, come la tua lingua preferita o la regione in cui ti trovi.",
      canDisable: true,
    },
  ];

  return (
    <>
      {/* Cookie Policy Page Content */}
      <div className="bg-slate-700 text-white py-50 px-4 ">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 ">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-300 mb-8">
              Questa Cookie Policy spiega come la Fanfara Bersaglieri di Settimo
              Torinese utilizza i cookie e tecnologie simili sul proprio sito
              web.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 ">
              Cosa sono i cookie?
            </h2>
            <p className="text-gray-300 mb-6">
              I cookie sono piccoli file di testo che vengono memorizzati sul
              tuo dispositivo (computer, tablet o mobile) quando visiti un sito
              web. I cookie sono ampiamente utilizzati per far funzionare i siti
              web o per farli funzionare in modo più efficiente, nonché per
              fornire informazioni ai proprietari del sito.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 ">
              Come utilizziamo i cookie
            </h2>
            <p className="text-gray-300 mb-6">
              Utilizziamo diversi tipi di cookie per vari scopi. Alcuni cookie
              sono necessari per motivi tecnici, alcuni consentono un'esperienza
              personalizzata, alcuni ci permettono di analizzare come utilizzi
              il nostro sito per migliorarlo.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 ">
              Tipi di cookie che utilizziamo
            </h3>

            <div className="space-y-6 mb-10">
              {cookieTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-gray-50 p-5 rounded-lg border border-gray-200"
                >
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    {type.name}
                  </h4>
                  <p className="text-gray-800 text-base">{type.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 ">
              Come gestire i cookie
            </h2>
            <p className="text-gray-300 mb-6">
              Puoi modificare le tue preferenze sui cookie in qualsiasi momento
              utilizzando il pulsante "Impostazioni Cookie" qui sotto. Inoltre,
              la maggior parte dei browser web ti permette di controllare i
              cookie attraverso le loro impostazioni. Scopri come gestire i
              cookie sul tuo browser:
            </p>

            <ul className="list-disc pl-6 mb-8 text-gray-300">
              <li className="mb-2">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.apple.com/en-us/HT201265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Safari
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 ">Contattaci</h2>
            <p className="text-gray-300 mb-10">
              Se hai domande sulla nostra Cookie Policy, non esitare a
              contattarci all'indirizzo email:{" "}
              <a
                href="mailto:bersaglierisettimo@gmail.com"
                className="text-red-400 hover:underline"
              >
                bersaglierisettimo@gmail.com
              </a>
            </p>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <button
                onClick={() => setShowBanner(true)}
                className="bg-red-700 cursor-pointer hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center"
              >
                <FaCookieBite className="mr-2" />
                Gestisci preferenze cookie
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
          >
            {!showSettings ? (
              <div className="container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex items-start mb-4 md:mb-0 pr-8">
                    <div className="hidden sm:block">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <FaCookieBite className="text-red-400 text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold  text-lg mb-1">
                        Utilizziamo i cookie
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Questo sito utilizza cookie per migliorare la tua
                        esperienza. Puoi personalizzare le tue preferenze o
                        accettare tutti i cookie.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2 border border-gray-500 text-gray-500 cursor-pointer rounded-md hover:bg-gray-100 transition-colors text-sm md:text-base flex-grow md:flex-grow-0"
                    >
                      Personalizza
                    </button>
                    <button
                      onClick={acceptSelectedCookies}
                      className="px-4 py-2 border border-red-700 text-red-500 cursor-pointer rounded-md hover:bg-red-100 transition-colors text-sm md:text-base flex-grow md:flex-grow-0"
                    >
                      Solo necessari
                    </button>
                    <button
                      onClick={acceptAllCookies}
                      className="px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:bg-red-800 transition-colors text-sm md:text-base flex-grow md:flex-grow-0"
                    >
                      Accetta tutti
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container mx-auto p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold  text-xl">Impostazioni Cookie</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-500 cursor-pointer hover:text-gray-300"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Seleziona quali cookie desideri accettare. I cookie
                    necessari non possono essere disattivati in quanto sono
                    essenziali per il funzionamento del sito.
                  </p>
                </div>

                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                  {cookieTypes.map((type) => (
                    <div
                      key={type.id}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold ">{type.name}</div>
                        <button
                          onClick={() => toggleCookieType(type.id)}
                          disabled={!type.canDisable}
                          className={`text-xl ${
                            !type.canDisable
                              ? "text-gray-400 cursor-not-allowed"
                              : cookiePreferences[type.id]
                              ? "text-green-500 cursor-pointer"
                              : "text-gray-400 cursor-pointer"
                          }`}
                        >
                          {cookiePreferences[type.id] ? (
                            <FaToggleOn />
                          ) : (
                            <FaToggleOff />
                          )}
                        </button>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {type.description}
                      </p>
                      {!type.canDisable && (
                        <div className="mt-2 text-xs text-gray-500 flex items-center">
                          <FaCheck className="mr-1" /> Sempre attivo
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
                  <button
                    onClick={acceptSelectedCookies}
                    className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors cursor-pointer"
                  >
                    Salva preferenze
                  </button>
                  <button
                    onClick={acceptAllCookies}
                    className="px-6 py-2 border border-red-700 text-red-400 rounded-md hover:bg-red-100 transition-colors cursor-pointer"
                  >
                    Accetta tutti
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookiePolicy;
