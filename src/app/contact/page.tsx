// src/components/ContactForm.tsx
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_z5mx13b",     // ← your Service ID
        "template_pucfoa5",    // ← your Template ID
        formRef.current,
        {
          publicKey: "ONmqxyCzDzmDFMvaX", // ← your Public key
        }
      );

      setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        msg: "Sorry, something went wrong. Please try again or email info@alamwaj.com.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="
        mx-auto w-full max-w-2xl
        px-4 sm:px-6
        pt-4 sm:pt-8
        pb-[calc(2rem+env(safe-area-inset-bottom))]
      "
    >
      <div className="rounded-2xl bg-white/95 shadow-sm ring-1 ring-slate-200 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="px-4 sm:px-6 pt-5 sm:pt-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#0B2042]">Send us a message</h1>
          <p className="mt-1 text-slate-600 text-sm">We usually reply within one business day.</p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="px-4 sm:px-6 pb-5 sm:pb-6 mt-4 grid gap-4">
          {/* Full Name */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">Full Name</label>
            <input
              type="text"
              name="user_name"            // <-- must match your EmailJS template var
              autoComplete="name"
              required
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-[15px] placeholder:text-slate-400 outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">Email</label>
            <input
              type="email"
              name="user_email"          // <-- template var
              autoComplete="email"
              required
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-[15px] placeholder:text-slate-400 outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
            />
          </div>

          {/* Phone */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">Phone</label>
            <input
              type="tel"
              name="phone"               // <-- template var (optional)
              inputMode="tel"
              autoComplete="tel"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-[15px] placeholder:text-slate-400 outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
            />
          </div>

          {/* Reason */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">Reason</label>
            <select
              name="reason"              // <-- template var
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-[15px] outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Request a Quote</option>
              <option>Project Collaboration</option>
              <option>Careers / Hiring</option>
            </select>
          </div>

          {/* Message */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">Message</label>
            <textarea
              name="message"             // <-- template var
              rows={5}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-[15px] placeholder:text-slate-400 outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
            />
          </div>

          {/* File upload (EmailJS supports file attachments with sendForm) */}
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-800">
              Attach CV (PDF/DOC/DOCX, up to 10MB)
            </label>
            <input
              type="file"
              name="cv"                   // <-- template var (add it to your template)
              accept=".pdf,.doc,.docx"
              className="file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-[15px] outline-none focus-visible:border-[#0B2042] focus-visible:ring-2 focus-visible:ring-[#0B2042]/20"
            />
            <p className="text-xs text-slate-500">Max size 10MB.</p>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#0B2042] px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </div>

          {/* Status */}
          {status && (
            <p
              className={`text-sm mt-1 ${
                status.ok ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {status.msg}
            </p>
          )}

          {/* Legal */}
          <p className="text-xs text-slate-500">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="underline">Privacy Policy</a> and{" "}
            <a href="/terms" className="underline">Terms</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
