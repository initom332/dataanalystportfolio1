"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

// Paste your form endpoint URL here (Formspree, Getform, Web3Forms, etc.)
// e.g. "https://formspree.io/f/abcdwxyz"
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message
          })
        });
        if (!res.ok) throw new Error(`Form endpoint responded with ${res.status}`);
      } else {
        // Fallback: no endpoint configured yet. See README for setup.
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container-page py-24">
      <p className="section-label">{`// Get in touch`}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Let&apos;s work together</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Open to data analyst, data scientist, and consulting engagements. Reach out with a project
        brief, a role, or just a question.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-surface space-y-5 p-6"
        >
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring flex items-center gap-3 text-sm hover:text-signal-amber"
          >
            <Mail size={18} className="text-signal-amber" /> {profile.email}
          </a>
          </a>
          {profile.whatsappNumber && (
            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                `Hi ${profile.name.split(" ")[0]}, I found your portfolio and would like to get in touch.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-3 text-sm hover:text-signal-amber"
            >
              <MessageCircle size={18} className="text-signal-amber" /> WhatsApp
            </a>
          <p className="flex items-center gap-3 text-sm text-muted">
            <MapPin size={18} className="text-signal-amber" /> {profile.location}
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-3 text-sm hover:text-signal-amber"
          >
            <Linkedin size={18} className="text-signal-amber" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-3 text-sm hover:text-signal-amber"
          >
            <Github size={18} className="text-signal-amber" /> GitHub
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card-surface space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="focus-ring mt-1 w-full rounded-lg border border-ink-border bg-transparent px-4 py-3 text-sm outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="focus-ring mt-1 w-full rounded-lg border border-ink-border bg-transparent px-4 py-3 text-sm outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="focus-ring mt-1 w-full rounded-lg border border-ink-border bg-transparent px-4 py-3 text-sm outline-none"
              placeholder="Tell me about the project or role..."
            />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center">
            <Send size={16} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-xs text-signal-teal">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-signal-rose">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
