"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const occasions = ["Just a night out", "Birthday", "Date night", "Friends gathering", "Private event"];

type Values = {
  name: string;
  phone: string;
  date: string;
  guests: string;
  occasion: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  name: "",
  phone: "",
  date: "",
  guests: "2",
  occasion: occasions[0],
  message: "",
};

const field =
  "w-full rounded-xl border border-cream/15 bg-ink/40 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-amber [color-scheme:dark]";
const label = "mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.date) e.date = "Please choose a date.";
  if (!v.guests || Number(v.guests) < 1) e.guests = "At least 1 guest.";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    // Demo only: nothing is sent anywhere.
    if (Object.keys(found).length === 0) setSent(true);
  };

  const err = (k: keyof Values) =>
    errors[k] && <p className="mt-1.5 text-xs text-amber">{errors[k]}</p>;

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 className="text-amber" size={44} strokeWidth={1.2} />
            <h3 className="mt-6 font-display text-4xl">Thank you, {values.name.split(" ")[0]}.</h3>
            <p className="mt-3 max-w-sm text-muted">
              This is a demo form, so nothing has been sent. In the live site, your request would
              reach the cafe team here.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initial);
                setSent(false);
              }}
              className="mt-8 text-[11px] uppercase tracking-[0.25em] text-amber underline-offset-8 hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className={label}>Name</label>
              <input id="name" className={field} value={values.name} onChange={set("name")} placeholder="Your name" autoComplete="name" />
              {err("name")}
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone</label>
              <input id="phone" type="tel" className={field} value={values.phone} onChange={set("phone")} placeholder="+92 3XX XXXXXXX" autoComplete="tel" />
              {err("phone")}
            </div>
            <div>
              <label htmlFor="date" className={label}>Date</label>
              <input id="date" type="date" className={field} value={values.date} onChange={set("date")} />
              {err("date")}
            </div>
            <div>
              <label htmlFor="guests" className={label}>Guests</label>
              <input id="guests" type="number" min={1} max={40} className={field} value={values.guests} onChange={set("guests")} />
              {err("guests")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="occasion" className={label}>Occasion</label>
              <select id="occasion" className={field} value={values.occasion} onChange={set("occasion")}>
                {occasions.map((o) => (
                  <option key={o} value={o} className="bg-ink">{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={label}>Message (optional)</label>
              <textarea id="message" rows={4} className={`${field} resize-none`} value={values.message} onChange={set("message")} placeholder="Anything we should know?" />
            </div>
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-cream sm:w-auto"
              >
                <Send size={14} /> Request a Table
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
