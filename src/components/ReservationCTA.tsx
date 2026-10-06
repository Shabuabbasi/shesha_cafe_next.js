import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { brand, images } from "@/data/site";
import { Reveal } from "./Reveal";
import Button from "./Button";

export default function ReservationCTA() {
  return (
    <section className="grain relative isolate overflow-hidden px-5 py-36 text-center sm:px-8 sm:py-52">
      <Image
        src={images.cta}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-amber">
            Reservations
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            YOUR TABLE IS <span className="italic text-gold">WAITING.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Reserve a Table</Button>
            <Button href={brand.whatsapp} variant="outline" external>
              <MessageCircle size={14} /> WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
