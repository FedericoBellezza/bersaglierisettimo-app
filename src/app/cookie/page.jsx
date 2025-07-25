"use client";

import { FaCookieBite } from "react-icons/fa";

const CookiePolicy = () => {
  const handleOpenSettings = () => {
    window.dispatchEvent(new CustomEvent("openCookieSettings"));
  };

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

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Titolare del Trattamento dei Dati
            </h2>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-8">
              <p className="font-bold text-white">
                A.N.B. Sezione "M.A. Fausto Balbo" Settimo Torinese
              </p>
              <p className="text-gray-300">
                Via Galileo Ferraris 6, 10036 Settimo Torinese (TO)
              </p>
              <p className="text-gray-300">Codice Fiscale: 97539850012</p>
              <p className="mt-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:fanfarasettimotorinese@gmail.com"
                  className="text-red-400 hover:underline"
                >
                  fanfarasettimotorinese@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">PEC:</span>{" "}
                <a
                  href="mailto:anbsettimotorinese@pec.it"
                  className="text-red-400 hover:underline"
                >
                  anbsettimotorinese@pec.it
                </a>
              </p>
            </div>

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
              Dettaglio dei cookie utilizzati
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-gray-800 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 text-left">Nome Cookie</th>
                    <th className="py-2 px-4 text-left">Fornitore</th>
                    <th className="py-2 px-4 text-left">Scopo</th>
                    <th className="py-2 px-4 text-left">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td colSpan="4" className="py-2 px-4 font-bold bg-gray-100">
                      Cookie Tecnici (Sempre attivi)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">cookieConsent</td>
                    <td className="py-2 px-4">Questo sito</td>
                    <td className="py-2 px-4">
                      Memorizza le preferenze di consenso ai cookie dell'utente.
                    </td>
                    <td className="py-2 px-4">1 anno</td>
                  </tr>
                  <tr className="border-b">
                    <td colSpan="4" className="py-2 px-4 font-bold bg-gray-100">
                      Cookie Analitici (soggetti a consenso)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">v</td>
                    <td className="py-2 px-4">Vercel</td>
                    <td className="py-2 px-4">
                      Utilizzato da Vercel Speed Insights per misurare le
                      performance del sito.
                    </td>
                    <td className="py-2 px-4">Sessione</td>
                  </tr>
                  <tr className="border-b">
                    <td colSpan="4" className="py-2 px-4 font-bold bg-gray-100">
                      Cookie di Terze Parti (soggetti a consenso)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">NID, CONSENT</td>
                    <td className="py-2 px-4">Google LLC</td>
                    <td className="py-2 px-4">
                      Utilizzati da Google Maps per mostrare mappe interattive e
                      per memorizzare le preferenze dell'utente.
                    </td>
                    <td className="py-2 px-4">Variabile (fino a 6 mesi)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              I collegamenti ai social network (Facebook, Instagram, etc.) sono
              semplici link esterni e non installano cookie di profilazione
              finché non vengono cliccati e non si visita il sito di
              destinazione. Per maggiori informazioni, si prega di consultare le
              privacy policy dei rispettivi social network.
            </p>

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
                onClick={handleOpenSettings}
                className="bg-red-700 cursor-pointer hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center"
              >
                <FaCookieBite className="mr-2" />
                Gestisci preferenze cookie
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
