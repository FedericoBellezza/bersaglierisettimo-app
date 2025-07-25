import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import RimaniAggiornato from "@/components/RimaniAggiornato";
import VieniASuonare from "@/components/VieniASuonare";
import ProssimiEventi from "@/components/ProssimiEventi";
import BandoRegionale from "@/components/BandoRegionale";
import Anniversario from "@/components/Anniversario";
import Servizi from "@/components/Servizi";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <ProssimiEventi />
      <ChiSiamo />
      <Anniversario />
      <Servizi />
      {/* <RimaniAggiornato /> */}
      <BandoRegionale />
      <VieniASuonare />
    </div>
  );
}
