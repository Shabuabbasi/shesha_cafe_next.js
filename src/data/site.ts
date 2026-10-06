/**
 * Central brand + image configuration.
 * Replace the `img()` ids below (or swap in local /public paths) with the
 * client's real photography. Every component reads from here.
 */

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const brand = {
  name: "SHESHA CAFE",
  location: "I-8, Islamabad",
  country: "Pakistan",
  tagline: "Where the Night Feels Different.",
  support: "Premium Shisha • Food • Coffee • Good Vibes",
  // Placeholder contact links for the demo
  whatsapp: "https://wa.me/920000000000",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  directions: "https://www.google.com/maps/search/?api=1&query=I-8+Islamabad",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/#experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero: img("1635547821500-77542481940c", 2200),
  events: img("1514933651103-005eec06c04b", 1600),
  about: img("1630175772812-3368aad7982d", 1400),
  cta: img("1572116469696-31de0f17cc34", 2200),
  location: img("1517248135467-4c7edcad34c4", 1400),
};
export { img };
