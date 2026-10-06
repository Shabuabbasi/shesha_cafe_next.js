"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "solid",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "bg-amber text-ink hover:bg-cream"
      : "border border-cream/30 text-cream hover:border-amber hover:text-amber";

  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Link href={href} className={`${base} ${styles} ${className}`} {...extra}>
        {children}
      </Link>
    </motion.span>
  );
}
