"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/data/site";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-cream/10 bg-ink/75 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-2xl font-medium tracking-[0.28em] text-cream"
          >
            SHESHA<span className="text-amber"> ·</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-amber ${
                  item.href === pathname ? "text-amber" : "text-cream/80"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="!px-6 !py-3">
              Reserve a Table
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-amber/15 blur-3xl" />
            <nav className="relative flex flex-col" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-cream/10 py-4 font-display text-4xl font-light text-cream"
                  >
                    <span className="text-xs tracking-widest text-amber">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mt-10"
              onClick={() => setOpen(false)}
            >
              <Button href="/contact">Reserve a Table</Button>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">{brand.location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
