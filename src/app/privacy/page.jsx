"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaCookieBite,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  const privacySections = [
    {
      id: "info",
      title: "Informazioni raccolte",
      content: (
        <>
          <p className="mb-4">
            Raccogliamo diversi tipi di informazioni per vari scopi, al fine di
            fornire e migliorare il nostro servizio. I tipi di dati che possiamo
            raccogliere includono:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-medium">Dati personali</span>: Mentre
              utilizzi il nostro servizio, potremmo chiederti di fornirci alcune
              informazioni di identificazione personale che possono essere
              utilizzate per contattarti o identificarti ("Dati personali").
              Questi possono includere:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Indirizzo email</li>
                <li>Nome e cognome</li>
                <li>Numero di telefono</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Dati di utilizzo</span>: Potremmo
              anche raccogliere informazioni su come il servizio viene
              utilizzato ("Dati di utilizzo"). Questi dati possono includere il
              tuo indirizzo IP, il tipo di browser, le pagine del nostro
              servizio che hai visitato, l'ora e la data della tua visita, il
              tempo trascorso su quelle pagine e altri dati diagnostici.
            </li>
            <li>
              <span className="font-medium">Dati di tracciamento e cookie</span>
              : Utilizziamo cookie e tecnologie di tracciamento simili per
              tracciare l'attività sul nostro servizio e conservare determinate
              informazioni. Per maggiori dettagli sui cookie utilizzati,
              consultare la nostra{" "}
              <a href="/cookie" className="text-red-400 hover:underline">
                Cookie Policy
              </a>
              .
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "titolare",
      title: "Titolare del Trattamento dei Dati",
      content: (
        <>
          <p className="mb-4">
            Il Titolare del Trattamento dei Dati raccolti tramite questo sito è:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
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
          <p className="mt-4">
            Per qualsiasi domanda o per esercitare i tuoi diritti, puoi
            contattare il Titolare ai recapiti sopra indicati.
          </p>
        </>
      ),
    },
    {
      id: "use",
      title: "Utilizzo dei dati",
      content: (
        <>
          <p className="mb-4">
            La Fanfara Bersaglieri di Settimo Torinese utilizza i dati raccolti
            per vari scopi:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Per fornire e mantenere il nostro servizio</li>
            <li>Per notificarti cambiamenti al nostro servizio</li>
            <li>
              Per permetterti di partecipare alle funzionalità interattive del
              nostro servizio quando scegli di farlo
            </li>
            <li>Per fornire assistenza ai clienti</li>
            <li>
              Per raccogliere analisi o informazioni preziose in modo da poter
              migliorare il nostro servizio
            </li>
            <li>Per monitorare l'utilizzo del nostro servizio</li>
            <li>Per rilevare, prevenire e affrontare problemi tecnici</li>
            <li>
              Per informarti su eventi, concerti e attività che potrebbero
              interessarti
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "legal",
      title: "Basi legali per il trattamento",
      content: (
        <>
          <p className="mb-4">
            Tratteremo i tuoi dati personali solo se abbiamo una base legale per
            farlo. Le basi legali dipendono dai servizi che utilizzi e da come
            li utilizzi. Ciò significa che trattiamo i tuoi dati solo quando:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Abbiamo il tuo consenso per farlo</li>
            <li>
              Il trattamento è necessario per l'esecuzione di un contratto con
              te
            </li>
            <li>
              Il trattamento è necessario per adempiere a un obbligo legale
            </li>
            <li>
              Il trattamento è necessario per i nostri legittimi interessi e non
              è sopraffatto dai tuoi diritti
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "retention",
      title: "Periodo di conservazione dei dati",
      content: (
        <>
          <p className="mb-4">
            La Fanfara Bersaglieri di Settimo Torinese conserverà i tuoi dati
            personali solo per il tempo necessario agli scopi indicati nella
            presente Informativa sulla privacy. Conserveremo e utilizzeremo i
            tuoi dati personali nella misura necessaria per adempiere ai nostri
            obblighi legali, risolvere controversie e applicare i nostri accordi
            e politiche.
          </p>
          <p className="mb-4">
            I dati di utilizzo vengono generalmente conservati per un periodo
            più breve, tranne quando questi dati vengono utilizzati per
            rafforzare la sicurezza o migliorare la funzionalità del nostro
            servizio, o quando siamo legalmente obbligati a conservare questi
            dati per periodi più lunghi.
          </p>
        </>
      ),
    },
    {
      id: "transfer",
      title: "Trasferimento dei dati",
      content: (
        <>
          <p className="mb-4">
            Le tue informazioni, compresi i dati personali, possono essere
            trasferite e mantenute su computer situati al di fuori del tuo
            stato, provincia, paese o altra giurisdizione governativa dove le
            leggi sulla protezione dei dati possono differire da quelle della
            tua giurisdizione.
          </p>
          <p className="mb-4">
            Se ti trovi al di fuori dell'Italia e scegli di fornirci
            informazioni, ti preghiamo di notare che trasferiamo i dati,
            compresi i dati personali, in Italia e li elaboriamo lì.
          </p>
          <p className="mb-4">
            Il tuo consenso alla presente Informativa sulla privacy seguito
            dalla tua presentazione di tali informazioni rappresenta il tuo
            accordo a tale trasferimento.
          </p>
          <p className="mb-4">
            La Fanfara Bersaglieri di Settimo Torinese adotterà tutte le misure
            ragionevolmente necessarie per garantire che i tuoi dati siano
            trattati in modo sicuro e in conformità con la presente Informativa
            sulla privacy e nessun trasferimento dei tuoi dati personali avrà
            luogo a un'organizzazione o a un paese a meno che non vi siano
            controlli adeguati, inclusa la sicurezza dei tuoi dati e altre
            informazioni personali.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "I tuoi diritti",
      content: (
        <>
          <p className="mb-4">
            La Fanfara Bersaglieri di Settimo Torinese mira a intraprendere
            misure ragionevoli per permetterti di correggere, modificare,
            eliminare o limitare l'utilizzo dei tuoi dati personali.
          </p>
          <p className="mb-4">
            Hai i seguenti diritti sui tuoi dati personali:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-medium">Diritto di accesso</span>: Hai il
              diritto di richiedere una copia delle informazioni che abbiamo su
              di te.
            </li>
            <li>
              <span className="font-medium">Diritto di rettifica</span>: Hai il
              diritto di correggere i dati che ritieni siano inaccurati o
              incompleti.
            </li>
            <li>
              <span className="font-medium">Diritto all'oblio</span>: In
              determinate circostanze, puoi chiedere che i dati che abbiamo su
              di te vengano cancellati dai nostri archivi.
            </li>
            <li>
              <span className="font-medium">
                Diritto alla limitazione del trattamento
              </span>
              : In determinate circostanze, puoi chiederci di limitare il
              trattamento dei tuoi dati personali.
            </li>
            <li>
              <span className="font-medium">
                Diritto alla portabilità dei dati
              </span>
              : In determinate circostanze, hai il diritto di chiederci di
              trasferire i dati che abbiamo raccolto a un'altra organizzazione o
              direttamente a te.
            </li>
            <li>
              <span className="font-medium">Diritto di opposizione</span>: Hai
              il diritto di opporti al nostro trattamento dei tuoi dati
              personali.
            </li>
          </ul>
          <p className="mb-4">
            Se desideri esercitare uno di questi diritti, ti preghiamo di
            contattarci utilizzando le informazioni di contatto fornite in
            questa Informativa sulla privacy.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "Privacy dei minori",
      content: (
        <>
          <p className="mb-4">
            Il nostro servizio non si rivolge a persone di età inferiore ai 16
            anni ("Minori").
          </p>
          <p className="mb-4">
            Non raccogliamo consapevolmente informazioni di identificazione
            personale da persone di età inferiore ai 16 anni. Se sei un genitore
            o tutore e sei consapevole che tuo figlio ci ha fornito dati
            personali, ti preghiamo di contattarci. Se veniamo a conoscenza del
            fatto che abbiamo raccolto dati personali da minori senza la
            verifica del consenso genitoriale, adotteremo misure per rimuovere
            tali informazioni dai nostri server.
          </p>
        </>
      ),
    },
  ];

  return (
    <div ref={pageRef} className="bg-slate-700 text-white py-30 xl:py-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-red-700/20 flex items-center justify-center mr-4">
            <FaUserShield className="text-red-400 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="lead text-xl text-gray-300 mb-8">
            La presente Informativa sulla Privacy descrive le nostre politiche e
            procedure sulla raccolta, l'uso e la divulgazione delle tue
            informazioni quando utilizzi il servizio e ti informa sui tuoi
            diritti alla privacy e su come la legge ti protegge.
          </p>

          <div className="bg-red-700/20 border-l-4 border-red-500 p-4 mb-10 rounded">
            <p className="text-gray-200 font-medium">
              Ultima modifica: 4 Giugno 2025
            </p>
            <p className="text-gray-300 text-sm mt-2">
              La Fanfara Bersaglieri di Settimo Torinese si impegna a proteggere
              la tua privacy. Leggi attentamente questa Informativa sulla
              Privacy per comprendere come trattiamo i tuoi dati personali.
            </p>
          </div>

          {/* Accordion sections */}
          <div className="space-y-4 mb-10">
            {privacySections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-gray-600 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-lg">{section.title}</span>
                  <span className="text-gray-400">
                    {expandedSection === section.id ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-800/50 text-gray-300"
                  >
                    {section.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mt-10 mb-4">
              Modifiche alla presente Informativa sulla Privacy
            </h2>
            <p className="text-gray-300 mb-6">
              Potremmo aggiornare la nostra Informativa sulla Privacy di tanto
              in tanto. Ti informeremo di eventuali modifiche pubblicando la
              nuova Informativa sulla Privacy in questa pagina e, se le
              modifiche sono significative, ti invieremo una notifica.
            </p>
            <p className="text-gray-300 mb-6">
              Ti consigliamo di rivedere periodicamente questa Informativa sulla
              Privacy per eventuali modifiche. Le modifiche a questa Informativa
              sulla Privacy sono efficaci quando vengono pubblicate su questa
              pagina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mt-10 mb-4">Contattaci</h2>
            <p className="text-gray-300 mb-6">
              Se hai domande su questa Informativa sulla Privacy, puoi
              contattarci:
            </p>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-10">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-red-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <span
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "fanfarasettimotorinese@gmail.com"
                        );
                        alert("✅ Email copiata!");
                      }}
                      className="text-red-400 hover:underline cursor-pointer"
                    >
                      fanfarasettimotorinese@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-red-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Telefono</p>
                    <span className="text-red-400 hover:underline cursor-pointer">
                      +39 339 615 9785
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 border-t border-gray-600 pt-8 text-center"
          >
            <a
              href="/cookie"
              className="inline-flex items-center px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
            >
              <FaCookieBite className="mr-2" />
              Visualizza la Cookie Policy
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
