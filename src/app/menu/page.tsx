import type { Metadata } from "next";
import MenuPreview from "@/components/MenuPreview";
import ReservationCTA from "@/components/ReservationCTA";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Menu — SHESHA CAFE" };

export default function MenuPage() {
  return (
    <>
      <PageHeader eyebrow="The Menu" title="MADE FOR LONG EVENINGS." note="Demo menu. Items and prices are placeholders." />
      <MenuPreview full />
      <ReservationCTA />
    </>
  );
}
