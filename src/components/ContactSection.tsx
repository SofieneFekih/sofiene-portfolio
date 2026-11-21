"use client";

import { useActionState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { sendContactEmail, type ContactActionState } from "@/app/actions/sendEmail";

const INITIAL_STATE: ContactActionState = {
  status: "idle",
  message: "",
};

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, INITIAL_STATE);

  return (
    <section
      id="contact"
      className="border-t border-slate-800/80 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-sky-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Direct Message
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Start a Conversation
          </h2>
          <p className="mt-3 text-slate-400">
            Available for full-time software engineering opportunities and freelance
            web/mobile projects. Send a message below and I&apos;ll reply directly.
          </p>
        </div>

        <form
          action={formAction}
          className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
        >
          {/* Invisible honeypot trap for automated spam bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
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
              rows={5}
              required
              maxLength={2000}
              placeholder="Tell me about your team, timeline, or technical requirements..."
              className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isPending ? "Sending..." : "Send Message"}
            </button>

            {state.message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-xs font-medium ${
                  state.status === "error" ? "text-rose-400" : "text-emerald-400"
                }`}
              >
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}