"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const DEFAULT_MESSAGE = `Hi ${profile.name.split(" ")[0]}, I found your portfolio and would like to get in touch.`;

export default function WhatsappWidget() {
  const [hovered, setHovered] = useState(false);

  if (!profile.whatsappNumber) return null;

  const href = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="focus-ring fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:pr-5"
    >
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <svg viewBox="0 0 32 32" className="relative h-5 w-5 fill-white">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.487L4 29l7.72-1.865A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.7a9.66 9.66 0 0 1-4.93-1.35l-.353-.21-4.58 1.106 1.127-4.463-.23-.366A9.65 9.65 0 0 1 5.3 15c0-5.9 4.8-10.7 10.701-10.7 5.9 0 10.699 4.8 10.699 10.7 0 5.9-4.799 10.7-10.699 10.7Zm5.87-8.017c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.572-1.588-.95-.847-1.592-1.893-1.779-2.213-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.359.527 1.823.674.766.244 1.462.21 2.014.127.614-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
        </svg>
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${
          hovered ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
