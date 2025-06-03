"use client";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const ChiSiamo = () => {
  return (
    <section
      id="chi-siamo"
      className="bg-red-700 text-gray-100 py-20 px-4 z-20"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          {/* Logo della Fanfara */}
          <Card className="bg-yellow-300 text-red-700 rounded-full w-52 h-52 flex flex-col items-center justify-center text-center shadow-lg border-0">
            <CardContent className="p-8 flex flex-col items-center justify-center h-full">
              <span className="text-xl font-bold">FANFARA BERSAGLIERI</span>
              <span className="text-md">SETTIMO TORINESE</span>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-300">
            CHI SIAMO
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-white">
            TANTE STORIE
          </h3>
          <p className="text-gray-300 mb-4 text-lg">
            La Fanfara Bersaglieri sezione "Medaglia d'Argento Pavan Fabio" di
            Settimo Torinese si costituisce nel 1972 sotto la guida del Capo
            Fanfara Bersagliere Francesco Russo prima e successivamente...
            {/* Aggiungere il resto del testo come da immagine */}
          </p>
          <p className="text-gray-300 text-lg">
            Presidente della Sezione di Settimo Torinese...
            {/* Aggiungere il resto del testo come da immagine */}
          </p>

          <Separator className="my-8 bg-yellow-300/30" />

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-yellow-300">CONTATTI:</h4>
            <p className="text-gray-300 text-lg">
              bersaglierisettimo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
