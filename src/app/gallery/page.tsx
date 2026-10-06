import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import ReservationCTA from "@/components/ReservationCTA";

export const metadata: Metadata = { title: "Gallery — SHESHA CAFE" };

export default function GalleryPage() {
  return (
    <>
      <div className="pt-24 sm:pt-28" />
      <Gallery standalone />
      <ReservationCTA />
    </>
  );
}
