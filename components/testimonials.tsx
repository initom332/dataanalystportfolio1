"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container-page py-24">
      <p className="section-label">{`// Peer review`}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Testimonials</h2>
      <p className="mt-3 max-w-2xl text-muted">
        What collaborators and clients say after working together.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface flex h-full flex-col p-6"
          >
            <Quote className="text-signal-amber" size={22} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-inherit/90">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-ink-border pt-4">
              <p className="font-display text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
