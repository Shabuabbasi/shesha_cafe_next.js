"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import Button from "./Button";
import { Reveal } from "./Reveal";

/** `full` shows every item (used on /menu); otherwise a 3-item preview per category. */
export default function MenuPreview({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState<MenuCategory>("Shisha");
  const items = menuItems.filter((i) => i.category === active).slice(0, full ? undefined : 3);

  return (
    <section id="menu" className="relative scroll-mt-20 bg-coal px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Signature Menu"
            title="TASTE THE EVENING."
            text="A small preview of what's on the table. Demo items and prices; the final menu comes from the cafe."
          />
          <Reveal delay={0.2}>
            <div
              role="tablist"
              aria-label="Menu categories"
              className="glass flex w-full max-w-full gap-1 overflow-x-auto rounded-full p-1.5 lg:w-auto"
            >
              {menuCategories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active === c}
                  onClick={() => setActive(c)}
                  className="relative flex-1 whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors lg:flex-none"
                >
                  {active === c && (
                    <motion.span
                      layoutId="menu-tab"
                      className="absolute inset-0 rounded-full bg-amber"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className={`relative ${active === c ? "text-ink" : "text-cream/70"}`}>{c}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!full && (
          <Reveal className="mt-14 flex justify-center">
            <Button href="/menu" variant="outline">
              View Full Menu <ArrowRight size={14} />
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
