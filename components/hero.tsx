"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile, stats } from "@/lib/data";
import ParticleField from "./particle-field";

const roles = ["Data Analyst", "Data Scientist", "ML Engineer", "Insights Builder",];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span className="font-mono text-2xl font-semibold text-signal-amber">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <ParticleField />
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <div className="container-page relative z-10 grid items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-label mb-5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-teal" />
            </span>
            Available for select engagements
          </p>

          <h1 className="font-display text-2xl font-semibold leading-[1.08] tracking-tight sm:text-3xl lg:text-4xl">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-muted">I work as a </span>
            <span className="text-signal-amber">
              {typed}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Portfolio
              <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-btn focus-ring flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-signal-amber"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-btn focus-ring flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-signal-amber"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="card-surface relative overflow-hidden p-2">
            <div
              className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-signal-violet/20 via-transparent to-signal-amber/20 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/profile.svg')" }}
              role="img"
              aria-label="Portrait of Ini Tom"
            />
          </div>
          <div className="glass absolute -bottom-6 left-1/2 w-[110%] -translate-x-1/2 rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
