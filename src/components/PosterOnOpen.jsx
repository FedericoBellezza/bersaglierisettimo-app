"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PosterOnOpen({ value }) {
  const [show30poster, setShow30poster] = useState(value);

  return (
    <>
      <AnimatePresence>
        {show30poster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 z-100"
          >
            <div className="flex flex-col-reverse md:flex-row items-start justify-center h-screen w-screen bg-black/70 fixed p-10">
              <span className="text-5xl text-white top-0 right-120 p-5 cursor-pointer"></span>
              <Image
                height={500}
                width={600}
                src={"/Volantino Arruolamento.jpg"}
                alt="Locandina arruolamento Fanfara Bersaglieri Settimo Torinese"
                className="object-contain"
              />
              <span
                onClick={() => setShow30poster(false)}
                className="lg:text-7xl text-5xl text-white cursor-pointer absolute top-0 right-0 p-5 md:px-20"
              >
                <img
                  src="https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-duct-tape-forming-x-cross-icon-patch-png-image_11639046.png"
                  alt="exit icon"
                  className="w-10 h-10"
                />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
