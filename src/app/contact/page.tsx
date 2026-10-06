import type { Metadata } from "next";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Location from "@/components/Location";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/data/site";

export const metadata: Metadata = { title: "Contact — SHESHA CAFE" };

const info = [
  { icon: MapPin, label: "Find us", value: `${brand.location}, ${brand.country}` },
  { icon: Clock, label: "Hours", value: "Opening hours coming soon" },
  { icon: MessageCircle, label: "WhatsApp", value: "Placeholder link (demo)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="RESERVE YOUR EVENING."
        note="Demo page. No booking is submitted; reservation actions are placeholders."
      />
      <section className="px-5 pb-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {info.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <div className="glass h-full rounded-3xl p-8">
                <c.icon className="text-amber" size={26} strokeWidth={1.3} />
                <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-muted">{c.label}</p>
                <p className="mt-2 font-display text-2xl">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl items-start gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-4xl font-light sm:text-5xl">Tell us about your evening.</h2>
            <p className="mt-5 text-muted">
              Share a few details and the team will get back to you. Prefer to chat? Message us on
              WhatsApp.
            </p>
            <div className="mt-8">
              <Button href={brand.whatsapp} variant="outline" external>
                <MessageCircle size={14} /> WhatsApp Us
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <Location />
    </>
  );
}
