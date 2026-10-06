import { MapPin, Navigation } from "lucide-react";
import { brand } from "@/data/site";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import Button from "./Button";

export default function Location() {
  return (
    <section id="location" className="scroll-mt-20 bg-coal px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Location" title="COME FIND YOUR SPOT." />
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-start gap-4">
              <MapPin className="mt-1 text-amber" size={22} strokeWidth={1.4} />
              <div>
                <p className="font-display text-3xl">{brand.location}</p>
                <p className="text-muted">{brand.country}</p>
              </div>
            </div>
            <div className="mt-10">
              <Button href={brand.directions} external>
                <Navigation size={14} /> Get Directions
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Stylised map placeholder — swap for a real embed when the exact address is confirmed */}
        <Reveal delay={0.15}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-cream/10 bg-smoke">
            <svg
              viewBox="0 0 500 400"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="rgba(241,232,214,0.05)" />
                </pattern>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(217,164,65,0.35)" />
                  <stop offset="100%" stopColor="rgba(217,164,65,0)" />
                </radialGradient>
              </defs>
              <rect width="500" height="400" fill="url(#grid)" />
              <g fill="none" stroke="rgba(241,232,214,0.14)" strokeWidth="10" strokeLinecap="round">
                <path d="M-20 120 C120 150 200 80 340 130 S480 190 540 160" />
                <path d="M90 -20 C110 120 60 240 130 420" />
                <path d="M300 -20 C290 120 340 250 310 420" />
                <path d="M-20 300 C140 270 260 330 540 280" />
              </g>
              <g fill="none" stroke="rgba(241,232,214,0.07)" strokeWidth="4">
                <path d="M0 210 L500 230" />
                <path d="M200 0 L215 400" />
                <path d="M420 0 L400 400" />
              </g>
              <circle cx="250" cy="200" r="160" fill="url(#glow)" />
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute inset-0 -m-6 animate-ping rounded-full bg-amber/30" />
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-amber ring-8 ring-amber/20" />
            </div>

            <div className="glass absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl p-5 backdrop-blur-xl">
              <div>
                <p className="font-display text-2xl">SHESHA CAFE</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted">{brand.location}</p>
              </div>
              <MapPin className="text-amber" size={22} strokeWidth={1.4} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
