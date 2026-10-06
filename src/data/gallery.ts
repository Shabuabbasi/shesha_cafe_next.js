import { img } from "./site";

export type GalleryCategory = "Celebrations & Birthdays" | "Rooftop Views" | "Lounge & Ambiance";

export const galleryCategories: GalleryCategory[] = [
  "Celebrations & Birthdays",
  "Rooftop Views",
  "Lounge & Ambiance",
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Layout hint for the editorial masonry grid. */
  shape: "tall" | "wide" | "square";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: img("1635547821500-77542481940c", 1200), alt: "Shisha with warm smoke at a lounge bar", category: "Lounge & Ambiance", shape: "tall" },
  { id: "g2", src: img("1514933651103-005eec06c04b", 1400), alt: "Warmly lit bar with shelves of bottles", category: "Lounge & Ambiance", shape: "wide" },
  { id: "g3", src: img("1630175772812-3368aad7982d", 1200), alt: "Shisha wrapped in smoke by candlelight", category: "Lounge & Ambiance", shape: "square" },
  { id: "g4", src: img("1519671482749-fd09be7ccebf", 1200), alt: "Friends sharing a toast", category: "Celebrations & Birthdays", shape: "tall" },
  { id: "g5", src: img("1578985545062-69928b1d9587", 1200), alt: "Chocolate drip cake for a celebration", category: "Celebrations & Birthdays", shape: "square" },
  { id: "g6", src: img("1559339352-11d035aa65de", 1400), alt: "Open-air terrace set for the evening", category: "Rooftop Views", shape: "wide" },
  { id: "g7", src: img("1495474472287-4d71bcdd2085", 1200), alt: "Cheers over latte art", category: "Celebrations & Birthdays", shape: "square" },
  { id: "g8", src: img("1574238752695-675b86d49267", 1200), alt: "Brass shisha against red velvet", category: "Lounge & Ambiance", shape: "tall" },
];
