import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import FanfaraADisposizione from "@/components/FanfaraADisposizione";
import InfoSection from "@/components/InfoSection";
import RimaniAggiornato from "@/components/RimaniAggiornato";
import VieniASuonare from "@/components/VieniASuonare";
import EventsSection from "@/components/InfoSection";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <ChiSiamo />
      <EventsSection />
      <RimaniAggiornato />

      <VieniASuonare />
    </div>
  );
}
