import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import InfoSection from "@/components/InfoSection";
import RimaniAggiornato from "@/components/RimaniAggiornato";
import VieniASuonare from "@/components/VieniASuonare";
import EventsSection from "@/components/InfoSection";
import ProssimiEventi from "@/components/ProssimiEventi";
import BandoRegionale from "@/components/BandoRegionale";
import Anniversario from "@/components/Anniversario";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <ProssimiEventi />
      <ChiSiamo />
      <Anniversario />
      <EventsSection />
      {/* <RimaniAggiornato /> */}
      <BandoRegionale />
      <VieniASuonare />
    </div>
  );
}
