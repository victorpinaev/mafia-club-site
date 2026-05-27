"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { photos } from "@/data/photos";

export default function PhotosPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
  <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
    <div className="mb-10 sm:mb-14 md:mb-16">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
        Галерея
      </p>

      <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
        Фото игр
      </h1>

      <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
        Атмосфера турниров, эмоции игроков и лучшие моменты клуба спортивной
        мафии.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 sm:rounded-3xl"
          onClick={() => setActiveIndex(index)}
        >
          <div className="aspect-[4/5]">
            <Image
              src={photo.image}
              alt="Mafia game"
              width={800}
              height={1000}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
        </div>
      ))}
    </div>

    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 sm:p-6"
          onClick={() => setActiveIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14 sm:text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(activeIndex === 0 ? photos.length - 1 : activeIndex - 1);
            }}
          >
            ←
          </button>

          <motion.div
            className="relative max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={photos[activeIndex].image}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  const swipeThreshold = 100;

                  if (info.offset.x < -swipeThreshold) {
                    setActiveIndex(
                      activeIndex === photos.length - 1 ? 0 : activeIndex + 1
                    );
                  }

                  if (info.offset.x > swipeThreshold) {
                    setActiveIndex(
                      activeIndex === 0 ? photos.length - 1 : activeIndex - 1
                    );
                  }
                }}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={photos[activeIndex].image}
                  alt="Preview"
                  width={1400}
                  height={1000}
                  className="max-h-[78vh] w-auto rounded-2xl object-contain sm:max-h-[86vh]"
                />
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-center text-sm text-zinc-400">
              {activeIndex + 1} / {photos.length}
            </p>
          </motion.div>

          <button
            className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14 sm:text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(activeIndex === photos.length - 1 ? 0 : activeIndex + 1);
            }}
          >
            →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </main>
);
}