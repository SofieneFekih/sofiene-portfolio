"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, Mail, Phone, Send, ShieldCheck } from "lucide-react";

interface ContactTokens {
  emailB64: string;
  phoneB64: string;
}

function decodeToken(encoded: string): string {
  try {
    return typeof window !== "undefined" ? window.atob(encoded) : "";
  } catch {
    return "";
  }
}

/**
 * Strips CR, LF, and ASCII control characters to prevent mailto header injection.
 */
function sanitizeHeaderInput(value: string): string {
  return value.replace(/[\r\n\x00-\x1F\x7F]/g, " ").trim();
}

export function ContactSection({ tokens }: { tokens: ContactTokens }) {
  const [revealedEmail, setRevealedEmail] = useState<string | null>(null);
  const [revealedPhone, setRevealedPhone] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "error" | "success";
    text: string;
  }>({
    type: "idle",
    text: "",
  });

  function handleRevealEmail() {
    setRevealedEmail(decodeToken(tokens.emailB64));
  }

  function handleRevealPhone() {
    setRevealedPhone(decodeToken(tokens.phoneB64));
  }

  async function handleCopyEmail() {
    if (!revealedEmail) return;
    try {
      await navigator.clipboard.writeText(revealedEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const rawName = String(formData.get("name") ?? "");
    const rawEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "").trim();

    const name = sanitizeHeaderInput(rawName);
    const email = sanitizeHeaderInput(rawEmail);

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please complete all fields before sending." });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    const targetEmail = revealedEmail ?? decodeToken(tokens.emailB64);
    if (!targetEmail) {
      setStatus({ type: "error", text: "Unable to initialize mail client." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nReply-To: ${email}\n\nMessage:\n${message}`
    );

    setStatus({ type: "success", text: "Opening your email client..." });
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-800/80 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-sky-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Protected Connect
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Start a Conversation
          </h2>
          <p className="mt-3 text-slate-400">
            Available for full-time software engineering opportunities, technical
            internships, and freelance web/mobile projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Direct Channels */}
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3 text-sky-400">
                <Mail className="h-5 w-5" />
                <h3 className="font-semibold text-slate-100">Direct Email</h3>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Encoded &amp; decoded on interaction to block scrapers
              </p>

              <div className="mt-4">
                {!revealedEmail ? (
                  <button
                    type="button"
                    onClick={handleRevealEmail}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400"
                  >
                    Reveal Email Address
                  </button>
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${revealedEmail}`}
                      className="font-mono text-sm text-sky-400 underline underline-offset-4"
                    >
                      {revealedEmail}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300 hover:border-sky-400"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3 text-sky-400">
                <Phone className="h-5 w-5" />
                <h3 className="font-semibold text-slate-100">Phone / WhatsApp</h3>
              </div>
              <p className="mt-1 text-xs text-slate-400">Monastir, Tunisia (CET / UTC+1)</p>

              <div className="mt-4">
                {!revealedPhone ? (
                  <button
                    type="button"
                    onClick={handleRevealPhone}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400"
                  >
                    Reveal Phone Number
                  </button>
                ) : (
                  <a
                    href={`tel:${revealedPhone.replace(/[^+\d]/g, "")}`}
                    className="font-mono text-sm text-sky-400 underline underline-offset-4"
                  >
                    {revealedPhone}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Safe Message Composer */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                Project or Role Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={1500}
                placeholder="Tell me about your team, timeline, or technical requirements..."
                className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <Send className="h-4 w-4" />
                Compose Email
              </button>

              {status.text && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs font-medium ${
                    status.type === "error" ? "text-rose-400" : "text-emerald-400"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}