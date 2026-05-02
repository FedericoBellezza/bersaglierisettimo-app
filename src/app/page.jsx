import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import RimaniAggiornato from "@/components/RimaniAggiornato";
import VieniASuonare from "@/components/VieniASuonare";
import ProssimiEventi from "@/components/ProssimiEventi";
import BandoRegionale from "@/components/BandoRegionale";
import Anniversario from "@/components/Anniversario";
import Servizi from "@/components/Servizi";
import { getEvents } from "@/lib/events";

export const revalidate = 300;

export default async function HomePage() {
  const events = await getEvents();

  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <ProssimiEventi events={events} />
      <ChiSiamo />
      <Anniversario />
      <Servizi />
      {/* <RimaniAggiornato /> */}
      <BandoRegionale />
      <VieniASuonare />
    </div>
  );
}
