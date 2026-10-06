"use client";

import { motion } from "framer-motion";
import { Flame, Martini, MoonStar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: Flame,
    title: "Premium Shisha",
    text: "Carefully crafted flavours and an elevated shisha experience.",
  },
  {
    icon: Martini,
    title: "Fresh Flavours",
    text: "A menu designed for casual evenings and memorable gatherings.",
  },
  {
    icon: MoonStar,
    title: "Late Night Vibes",
    text: "A relaxed atmosphere made for conversations, music and good company.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="The Experience" title="MORE THAN JUST SHISHA." />
          </div>
          <Reveal delay={0.2} className="lg:col-span-5 lg:pt-14">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Shesha Cafe is a place to slow down. Settle into a corner, share a table with
              friends, order something good and let the evening stretch out. Smoke, coffee, food
              and conversation, all in one softly lit room.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass group relative h-full overflow-hidden rounded-3xl p-8 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/0 blur-3xl transition-all duration-700 group-hover:bg-amber/25" />
                <span className="font-display text-sm text-amber/70">0{i + 1}</span>
                <c.icon className="mt-10 text-amber" size={30} strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-3xl font-normal">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
