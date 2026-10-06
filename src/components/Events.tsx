import Image from "next/image";
import { Cake, GlassWater, Heart, Users } from "lucide-react";
import { images } from "@/data/site";
import { ImageReveal, Reveal } from "./Reveal";
import Button from "./Button";

const occasions = [
  { icon: Cake, title: "Birthday Celebrations" },
  { icon: Users, title: "Friends Gatherings" },
  { icon: Heart, title: "Date Nights" },
  { icon: GlassWater, title: "Private Events" },
];

export default function Events() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={images.events}
              alt="A warmly lit bar, set for the evening"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </ImageReveal>
          <Reveal delay={0.5} className="absolute -bottom-6 right-4 sm:-right-6">
            <div className="glass max-w-[15rem] rounded-2xl p-5 backdrop-blur-xl">
              <p className="font-display text-xl italic text-amber">Every table has a story.</p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-amber">
              Occasions
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-5xl font-light leading-[0.98] sm:text-6xl lg:text-7xl">
              MAKE IT <span className="italic text-gold">YOUR</span> NIGHT.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted sm:text-lg">
              Whatever the reason, bring it to Shesha. Tell us about your evening and we&apos;ll help
              shape it.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={0.1 + i * 0.08}>
                <li className="group flex items-center justify-between py-5 transition-colors hover:text-amber">
                  <span className="flex items-center gap-5">
                    <o.icon size={22} strokeWidth={1.2} className="text-amber" />
                    <span className="font-display text-2xl sm:text-3xl">{o.title}</span>
                  </span>
                  <span className="h-px w-6 bg-cream/30 transition-all duration-500 group-hover:w-12 group-hover:bg-amber" />
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-10">
            <Button href="/contact">Plan Your Evening</Button>
            <p className="mt-5 text-xs text-muted">Demo content. Event offerings to be confirmed by the cafe.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
