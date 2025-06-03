"use client";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-cover bg-bottom flex items-center justify-center text-white shadow-xl bg-[url('https://static.wixstatic.com/media/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg/v1/fill/w_1905,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a01c56_8ff32b43d7b94960b9d1b408e2cf5de1~mv2.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent"></div>
      <div className="w-screen absolute h-full overflow-hidden hidden xl:block ">
        <img
          src="/logo-bersaglieri.svg"
          className="h-250 left-[-100px] top-10 absolute "
          alt="Logo Fanfara Bersaglieri"
        />
      </div>
      <div className="relative overflow-hidden z-10 text-center px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none text-shadow-lg">
          FANFARA
          <span className="block text-yellow-300">BERSAGLIERI</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light mt-4 uppercase tracking-widest text-gray-200">
          SETTIMO TORINESE
        </p>
      </div>
    </section>
  );
};

export default Hero;
