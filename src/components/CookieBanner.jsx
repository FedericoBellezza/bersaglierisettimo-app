"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCookieBite,
  FaTimes,
  FaCheck,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const CookieBanner = () => {
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
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setCookiePreferences(JSON.parse(consent));
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);

    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings);
    };
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

export default CookieBanner;
