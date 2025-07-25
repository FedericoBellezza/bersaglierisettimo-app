"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { CookieIcon, SettingsIcon, XIcon } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);

    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem("cookie_consent", JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200">
            {showSettings ? (
              <CookieSettings
                preferences={preferences}
                togglePreference={togglePreference}
                onSave={handleSavePreferences}
                onBack={() => setShowSettings(false)}
              />
            ) : (
              <CookieConsent
                onAcceptAll={handleAcceptAll}
                onCustomize={() => setShowSettings(true)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

const CookieConsent = ({ onAcceptAll, onCustomize }) => (
  <div className="p-6">
    <div className="flex items-start gap-4">
      <CookieIcon className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-lg font-semibold">Informativa sui Cookie</h3>
        <p className="text-sm text-gray-600 mt-1">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
        </p>
      </div>
    </div>
    <div className="flex gap-3 mt-4">
      <Button onClick={onAcceptAll} className="flex-1">
        Accetta Tutti
      </Button>
      <Button onClick={onCustomize} variant="outline" className="flex-1">
        Personalizza
      </Button>
    </div>
  </div>
);

const CookieSettings = ({ preferences, togglePreference, onSave, onBack }) => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Personalizza Cookie</h3>
      <Button onClick={onBack} variant="ghost" size="icon">
        <XIcon className="w-5 h-5" />
      </Button>
    </div>
    <div className="space-y-4">
      <CookieToggle
        title="Cookie Necessari"
        description="Essenziali per il funzionamento del sito."
        enabled={true}
        onToggle={() => {}}
        disabled={true}
      />
      <CookieToggle
        title="Cookie Analitici"
        description="Ci aiutano a capire come usi il sito per migliorarlo."
        enabled={preferences.analytics}
        onToggle={() => togglePreference("analytics")}
      />
      <CookieToggle
        title="Cookie di Marketing"
        description="Usati per mostrarti annunci pertinenti."
        enabled={preferences.marketing}
        onToggle={() => togglePreference("marketing")}
      />
    </div>
    <Button onClick={onSave} className="w-full mt-6">
      Salva Preferenze
    </Button>
  </div>
);

const CookieToggle = ({ title, description, enabled, onToggle, disabled }) => (
  <div className="flex items-start justify-between p-3 bg-gray-50 rounded-md">
    <div className="pr-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-red-600" : "bg-gray-300"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

export default CookieBanner;
