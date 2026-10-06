"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice, type MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-smoke"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          variants={{ hover: { scale: 1.07 } }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-smoke via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-amber backdrop-blur-md">
          {item.category}
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-medium sm:text-3xl">{item.name}</h3>
          <span className="shrink-0 text-sm font-semibold text-amber">{formatPrice(item.price)}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-amber transition-transform duration-700 group-hover:scale-x-100" />
    </motion.article>
  );
}
