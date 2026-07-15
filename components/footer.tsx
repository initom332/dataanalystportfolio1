import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">
            {profile.name.split(" ")[0]}
            <span className="text-signal-amber">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{profile.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-border hover:border-signal-amber"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-border hover:border-signal-amber"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-border hover:border-signal-amber"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div>
          <p className="section-label">Quick links</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring text-sm text-muted hover:text-signal-amber">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label">Legal</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/privacy-policy" className="focus-ring text-sm text-muted hover:text-signal-amber">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="focus-ring text-sm text-muted hover:text-signal-amber">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-center justify-center gap-3 border-t border-ink-border py-6 text-xs text-muted md:flex-row">
        <p>
          © {year} GrandisInnovo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
