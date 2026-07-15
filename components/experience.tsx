"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="container-page py-24">
      <p className="section-label">{`// Career log`}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Experience Timeline</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Three organizations, one throughline: turning ambiguous problems into shipped analytics.
      </p>

      <div className="relative mt-12 space-y-10 border-l border-ink-border pl-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-signal-amber bg-ink" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{item.period}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {item.role} <span className="text-muted">— {item.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-inherit/90">{item.summary}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
