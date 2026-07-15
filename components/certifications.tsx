"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="container-page py-24">
      <p className="section-label">{`// Verified credentials`}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Certifications</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Structured learning from programs that pushed rigor over convenience.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-surface flex items-start gap-4 p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-teal/15 text-signal-teal">
              <BadgeCheck size={20} />
            </span>
            <div>
              <p className="font-display font-semibold leading-snug">{cert.name}</p>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
