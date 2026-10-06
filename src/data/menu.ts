import { img } from "./site";

export type MenuCategory = "Shisha" | "Food" | "Drinks" | "Desserts";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  /** Demo price in PKR. Replace with real client pricing. */
  price: number;
  image: string;
  featured?: boolean;
}

export const menuCategories: MenuCategory[] = ["Shisha", "Food", "Drinks", "Desserts"];

export const formatPrice = (p: number) => `Rs. ${p.toLocaleString("en-PK")}`;

export const menuItems: MenuItem[] = [
  {
    id: "sh-1",
    category: "Shisha",
    name: "Midnight Amber",
    description: "A slow-burning blend of dark fruit and warm spice, served on a fresh coal bed.",
    price: 1800,
    image: img("1511302188604-d1d5ba206381", 900),
    featured: true,
  },
  {
    id: "sh-2",
    category: "Shisha",
    name: "Velvet Mint",
    description: "Cool, clean and smooth — a refined classic for long conversations.",
    price: 1600,
    image: img("1574238752695-675b86d49267", 900),
    featured: true,
  },
  {
    id: "sh-3",
    category: "Shisha",
    name: "Signature Lounge Blend",
    description: "The house selection, mixed to order. Ask your host for today's pairing.",
    price: 2200,
    image: img("1630175772812-3368aad7982d", 900),
  },
  {
    id: "fd-1",
    category: "Food",
    name: "Smoked Steak & Fries",
    description: "Grilled striploin, herb butter and crisp skin-on fries.",
    price: 2900,
    image: img("1600891964092-4316c288032e", 900),
    featured: true,
  },
  {
    id: "fd-2",
    category: "Food",
    name: "Stacked Lounge Burger",
    description: "Double patty, melted cheddar, caramelised onions, toasted sesame bun.",
    price: 1700,
    image: img("1572802419224-296b0aeee0d9", 900),
    featured: true,
  },
  {
    id: "fd-3",
    category: "Food",
    name: "Wood-Fired Flatbread",
    description: "Charred crust, roasted toppings and fresh herbs. Made for sharing.",
    price: 1500,
    image: img("1565299624946-b28f40a0ae38", 900),
  },
  {
    id: "dr-1",
    category: "Drinks",
    name: "Flat White",
    description: "Double espresso, silky steamed milk, finished with latte art.",
    price: 650,
    image: img("1495474472287-4d71bcdd2085", 900),
    featured: true,
  },
  {
    id: "dr-2",
    category: "Drinks",
    name: "Citrus Cooler",
    description: "Fresh lime, mint and soda over crushed ice. Light and bright.",
    price: 600,
    image: img("1551024709-8f23befc6f87", 900),
  },
  {
    id: "dr-3",
    category: "Drinks",
    name: "Smoked Oak Mocktail",
    description: "Orange peel, spiced syrup and a slow-melt ice sphere.",
    price: 850,
    image: img("1470337458703-46ad1756a187", 900),
  },
  {
    id: "ds-1",
    category: "Desserts",
    name: "Dark Chocolate Drip Cake",
    description: "Rich ganache, whipped cocoa cream, served by the slice.",
    price: 950,
    image: img("1578985545062-69928b1d9587", 900),
    featured: true,
  },
  {
    id: "ds-2",
    category: "Desserts",
    name: "Honey Pancake Stack",
    description: "Warm pancakes, banana, mint and a slow pour of golden honey.",
    price: 1100,
    image: img("1567620905732-2d1ec7ab7445", 900),
  },
  {
    id: "ds-3",
    category: "Desserts",
    name: "Cookie Cream Shake",
    description: "Thick chocolate shake, cookie crumble and whipped cream.",
    price: 900,
    image: img("1572490122747-3968b75cc699", 900),
  },
];
