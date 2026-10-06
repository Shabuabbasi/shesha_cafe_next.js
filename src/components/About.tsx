import Image from "next/image";
import { images } from "@/data/site";
import { ImageReveal, Reveal } from "./Reveal";

const stats = [
  { big: "I-8", small: "Islamabad" },
  { big: "Cafe", small: "& Lounge" },
  { big: "Open", small: "Late" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-amber">
              About
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-5xl font-light leading-[0.98] sm:text-6xl lg:text-7xl">
              YOUR NEW EVENING SPOT IN <span className="italic text-gold">I-8.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted sm:text-lg">
              Shesha Cafe is built for the hours after the day ends: good shisha, honest food, great
              coffee and a room that makes you want to stay. Come with friends, come with family,
              or come to unwind.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.big} delay={0.1 + i * 0.1}>
                <div className="glass rounded-2xl p-4 text-center sm:p-7 sm:text-left">
                  <p className="font-display text-3xl text-amber sm:text-5xl">{s.big}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted sm:text-xs">
                    {s.small}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ImageReveal className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-t-[12rem] rounded-b-3xl lg:col-span-5">
          <Image
            src={images.about}
            alt="Shisha smoke by candlelight"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
