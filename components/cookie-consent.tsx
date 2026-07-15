"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    window.localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="glass fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl p-5 shadow-xl md:inset-x-auto md:left-6">
      <p className="text-sm text-inherit">
        This site uses minimal cookies to remember your theme preference and understand basic
        traffic. Read the{" "}
        <Link href="/privacy-policy" className="text-signal-amber underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => respond("accepted")} className="btn-primary px-5 py-2 text-xs">
          Accept
        </button>
        <button onClick={() => respond("declined")} className="btn-secondary px-5 py-2 text-xs">
          Decline
        </button>
      </div>
    </div>
  );
}
