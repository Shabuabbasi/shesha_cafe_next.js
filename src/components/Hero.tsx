"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { brand, images } from "@/data/site";
import Button from "./Button";

const ease = [0.22, 1, 0.36, 1] as const;

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1.1, delay: 0.5 + i * 0.15, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-x-0 -bottom-10 -top-10">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero}
            alt="Shisha with warm smoke in an amber-lit lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-40 sm:px-8 sm:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-7 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.45em] text-amber"
        >
          <span className="h-px w-10 bg-amber" />
          I-8 • Islamabad
        </motion.p>

        <h1 className="font-display text-[3.3rem] font-light leading-[0.92] tracking-tight sm:text-8xl lg:text-[8.5rem]">
          {["WHERE THE NIGHT", "FEELS DIFFERENT."].map((t, i) => (
            <span key={t} className="block overflow-hidden pb-2">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className={`block ${i === 1 ? "italic text-gold" : ""}`}
              >
                {t}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-8 max-w-md text-xs uppercase tracking-[0.3em] text-cream/75 sm:text-sm"
        >
          {brand.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <Button href="/menu">Explore Menu</Button>
          <Button href="/contact" variant="outline">
            Reserve a Table
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-x-0 bottom-8 mx-auto hidden w-fit flex-col items-center gap-3 md:flex"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-cream/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-5 bg-amber"
            animate={{ y: [-20, 56] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
