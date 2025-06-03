import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f182e] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src="/logo-bersaglieri.svg"
            alt="Fanfara Bersaglieri"
            className="w-15 mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-400">
            Fanfara Bersaglieri
          </h2>
          <p className="text-sm text-gray-300">Settimo Torinese</p>
        </div>
        <div className="md:col-span-2 flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-yellow-400 font-semibold mb-4">La Fanfara</h3>
            <ul className="space-y-2 text-sm">
              <li>Chi Siamo</li>
              <li>Storia</li>
              <li>Diventa un Bersagliere</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-yellow-400 font-semibold mb-4">Media</h3>
            <ul className="space-y-2 text-sm">
              <li>Galleria Foto</li>
              <li>Video</li>
              <li>Calendario Eventi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Utili</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Contatti</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 border-t border-gray-500"></div>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-6">
          <FaMapMarkerAlt />{" "}
          <span>Via Boccanelli, 8 - Settimo Torinese (TO)</span>
          <FaPhoneAlt /> <span>+39 339 615 9785</span>
          <FaEnvelope /> <span>info@fanfarabersaglierisettimo.it</span>
          <FaClock /> <span>Prove: Lunedì ore 21:00</span>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-yellow-400 font-semibold mb-4">
            SEGUICI SUI SOCIAL
          </h3>
          <div className="flex w-full  justify-end space-x-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm text-gray-400">
        © 2025 Fanfara Bersaglieri Settimo Torinese. Tutti i diritti riservati.
        <br />
        Sito realizzato da{" "}
        <span className="text-yellow-400">Federico Bellezza</span>
      </div>
    </footer>
  );
}
