import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import MenuPreview from "@/components/MenuPreview";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Location from "@/components/Location";
import ReservationCTA from "@/components/ReservationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <MenuPreview />
      <Events />
      <Gallery />
      <About />
      <Location />
      <ReservationCTA />
    </>
  );
}
