import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import FanfaraADisposizione from "@/components/FanfaraADisposizione";
import InfoSection from "@/components/InfoSection";

import RimaniAggiornato from "@/components/RimaniAggiornato";
import Footer from "@/components/Footer";
import VieniASuonare from "@/components/VieniASuonare";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <ChiSiamo />
      <FanfaraADisposizione />
      <div className="py-10">
        <InfoSection
          title="RADUNI E MANIFESTAZIONI"
          imageUrl="https://static.wixstatic.com/media/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_45a916c98f9142ca8ea1b1d9fbae9e1c~mv2.jpg" // Immagine più evocativa
          imageAlt="Fanfara dei Bersaglieri in una manifestazione"
          imageLeft={false}
        >
          <p>
            La Fanfara partecipa con orgoglio a raduni nazionali e locali,
            portando lo spirito e la musica dei Bersaglieri in ogni occasione.
            Segui il nostro calendario per scoprire i prossimi eventi!
          </p>
        </InfoSection>
        <InfoSection
          title="CONCERTI"
          imageUrl="https://static.wixstatic.com/media/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg/v1/fill/w_953,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/a01c56_fb44292d22434cc58c44181e6d5fec1b~mv2.jpg" // Immagine a tema concerto
          imageAlt="Concerto della Fanfara dei Bersaglieri"
          imageLeft={true}
        >
          <p>
            Dai classici della tradizione bersaglieresca alle marce militari, i
            nostri concerti sono un'esplosione di energia e passione. Vieni ad
            ascoltarci dal vivo!
          </p>
        </InfoSection>
        <InfoSection
          title="CERIMONIE E COMMEMORAZIONI"
          imageUrl="https://static.wixstatic.com/media/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png/v1/fill/w_795,h_315,al_c,q_85,enc_avif/a01c56_7cc5ad117fdf4202b8ff9054039e924b~mv2.png" // Immagine a tema cerimonie
          imageAlt="Fanfara durante una cerimonia ufficiale"
          imageLeft={false}
        >
          <p>
            Onoriamo la memoria e celebriamo le ricorrenze istituzionali con la
            solennità e il rispetto che contraddistinguono il corpo dei
            Bersaglieri.
          </p>
        </InfoSection>
      </div>

      <RimaniAggiornato />
      <VieniASuonare />
    </div>
  );
}
