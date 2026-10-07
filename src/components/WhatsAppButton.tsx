"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { brand } from "@/data/site";

const message = encodeURIComponent("Hi SHESHA CAFE, I'd like to reserve a table.");

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`${brand.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SHESHA CAFE on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-ink shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 [animation-duration:3s]" />
      <MessageCircle className="relative" size={24} strokeWidth={1.8} />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 group-hover:max-w-40 group-hover:pr-1 md:block">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
