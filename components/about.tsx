"use client";

import { motion } from "framer-motion";
import { Target, Compass, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business-first",
    text: "Every model and dashboard is judged by the decision it improves, not its complexity."
  },
  {
    icon: Compass,
    title: "Rigorous by default",
    text: "Careful validation, honest uncertainty, and reproducible pipelines — no shortcuts on the fundamentals."
  },
  {
    icon: Sparkles,
    title: "Curious, always",
    text: "Constantly testing new tools and techniques, then bringing back only what earns its place in production."
  }
];

export default function About() {
  return (
    <section id="about" className="container-page py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label"
      >
        {`// 01 — about`}
      </motion.p>

      <div className="mt-6 grid gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From spreadsheets to shipped models.
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              I&apos;m a data analyst and data scientist with three years of experience turning messy,
              real-world data into dashboards, models, and tools that people actually use. My work spans
              the full lifecycle — from wrangling raw data and building pipelines, to training models and
              shipping the interfaces that put insight in front of decision-makers.
            </p>
            <p>
              I got here through the 3MTT fellowship and Amdari&apos;s applied data science program, then
              spent the last two years at 10Alytics working directly with clients across fintech and
              retail — where I learned that the best analysis is the one someone actually acts on.
            </p>
            <p>
              Outside client work, I&apos;m usually deep in a Kaggle dataset, contributing to open-source
              tooling, or writing up a project breakdown for other analysts learning the craft.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
        >
          {values.map((v) => (
            <div key={v.title} className="card-surface flex gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-amber/10 text-signal-amber">
                <v.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted">{v.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
