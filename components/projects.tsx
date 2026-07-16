"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const categories = ["All", "Analytics", "Machine Learning", "NLP", "Computer Vision", "Data Engineering"];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-surface group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-signal-violet/15 to-signal-amber/15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="section-label absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          className="focus-ring mt-4 self-start font-mono text-xs uppercase tracking-wider text-signal-amber"
          aria-expanded={open}
        >
          {open ? "Hide case study" : "View case study"}
        </button>

        {open && (
          <div className="mt-4 space-y-3 border-t border-ink-border pt-4 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Business problem
              </p>
              <p className="mt-1 text-inherit/90">{project.businessProblem}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Methodology
              </p>
              <p className="mt-1 text-inherit/90">{project.methodology}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Results</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-inherit/90">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-border px-3 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 text-sm font-medium text-inherit hover:text-signal-amber"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 text-sm font-medium text-inherit hover:text-signal-amber"
          >
            <ExternalLink size={16} /> Live demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="container-page py-24">
      <p className="section-label">{`// Featured work`}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
      <p className="mt-3 max-w-2xl text-muted">
        A sample of end-to-end projects spanning analytics, machine learning, NLP, and computer
        vision — each one shipped to solve a real business problem.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`focus-ring rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                category === c
                  ? "border-signal-amber bg-signal-amber text-ink"
                  : "border-ink-border text-muted hover:text-inherit"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative w-full max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            aria-label="Search projects"
            className="focus-ring w-full rounded-full border border-ink-border bg-transparent py-2 pl-9 pr-4 text-sm outline-none placeholder:text-muted"
          />
        </label>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-12 text-center text-muted">
            No projects match that search. Try a different term or category.
          </p>
        )}
      </div>
    </section>
  );
}
