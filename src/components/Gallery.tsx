"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import Button from "./Button";

const aspect: Record<GalleryImage["shape"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Gallery({ standalone = false }: { standalone?: boolean }) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const shown = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <section id="gallery" className="scroll-mt-20 bg-coal px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Gallery" title="THE VIBE." />
          <Reveal delay={0.2}>
            <p className="font-display text-2xl italic text-cream/70">
              Good food. Great company. Long nights.
            </p>
          </Reveal>
        </div>

        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mt-12 flex gap-2 overflow-x-auto pb-1"
        >
          {(["All", ...galleryCategories] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                active === c
                  ? "border-amber bg-amber text-ink"
                  : "border-cream/20 text-cream/70 hover:border-amber hover:text-amber"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Editorial masonry: CSS columns with mixed aspect ratios */}
        <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          <AnimatePresence mode="popLayout">
          {shown.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <motion.figure
                whileHover="hover"
                className={`group relative overflow-hidden rounded-2xl ${aspect[img.shape]}`}
              >
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-ink/20 transition-colors duration-700 group-hover:bg-ink/0" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-ink/80 to-transparent p-5 text-xs uppercase tracking-[0.25em] text-cream opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.category}
                </figcaption>
              </motion.figure>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {!standalone && (
          <Reveal className="mt-14 flex justify-center">
            <Button href="/gallery" variant="outline">
              Open Full Gallery
            </Button>
          </Reveal>
        )}
        {standalone && (
          <p className="mt-12 text-center text-xs text-muted">Demo photography.</p>
        )}
      </div>
    </section>
  );
}
