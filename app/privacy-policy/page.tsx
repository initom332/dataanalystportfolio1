import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Ini Tom portfolio website."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="container-page py-32">
        <p className="section-label">{`// Legal`}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-inherit/90">
          <section>
            <h2 className="font-display text-xl font-semibold">What this site collects</h2>
            <p className="mt-2">
              This portfolio collects only what is needed to respond to messages sent through the
              contact form (name, email address, and message content) and basic, anonymized
              analytics about page visits. No data is sold or shared with third parties for
              advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Cookies</h2>
            <p className="mt-2">
              A small local storage entry remembers your theme preference (dark or light) and
              whether you have acknowledged the cookie notice. These are not used for tracking
              across other websites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Contact form data</h2>
            <p className="mt-2">
              Messages submitted through the contact form are delivered via a transactional email
              service (EmailJS) solely to respond to your inquiry. Submissions are not added to
              any marketing list.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Your rights</h2>
            <p className="mt-2">
              You may request that any message data be deleted at any time by emailing the address
              listed on the{" "}
              <Link href="/#contact" className="text-signal-amber underline underline-offset-2">
                contact section
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
