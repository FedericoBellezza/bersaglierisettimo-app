"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PhotoGallery({ photos }) {
  const [activeCategory, setActiveCategory] = useState("Tutte");
  const [lightbox, setLightbox] = useState(null); // index into filtered

  const categories = ["Tutte", ...new Set(photos.map((p) => p.category).filter(Boolean))];
  const filtered = activeCategory === "Tutte" ? photos : photos.filter((p) => p.category === activeCategory);

  function openLightbox(idx) {
    setLightbox(idx);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function prev() {
    setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  }

  function next() {
    setLightbox((i) => (i + 1) % filtered.length);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") closeLightbox();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white py-20 sm:py-28 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Galleria Foto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            I momenti più belli della Fanfara Bersaglieri di Settimo Torinese.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filtro categorie */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-red-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Nessuna foto disponibile.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-sm"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo.url}
                  alt={photo.title ?? ""}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {photo.title && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium truncate">{photo.title}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={filtered[lightbox]?.url}
              alt={filtered[lightbox]?.title ?? ""}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-10"
            >
              <XMarkIcon className="w-7 h-7" />
            </button>

            {filtered[lightbox]?.title && (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-1.5 rounded-full">
                {filtered[lightbox].title}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
