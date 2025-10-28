"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus(null);
    setSending(true);
    try {
      // sendForm attaches the <input type="file" name="my_file"> files automatically
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      if (res.status !== 200) throw new Error("Failed to send");
      setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="rounded-3xl bg-white border p-8 md:p-12">
        <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
          Contact
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
          Get in touch with Al Amwaj
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Send us your inquiry, BOQ, or CV. We’ll reply promptly.
        </p>
      </section>

      {/* Form (EmailJS) */}
      <section className="rounded-3xl bg-white border p-6 md:p-8">
        <form ref={formRef} onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Full Name</label>
            <input
              name="from_name"
              required
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Phone</label>
            <input
              name="phone"
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="+971 ..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Reason</label>
            <select
              name="reason"
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Request a Quote</option>
              <option>Apply for a Role</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="Tell us about your project or experience..."
            />
          </div>

          {/* CV upload — EmailJS will attach files from inputs named 'my_file' */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-700">Attach CV (PDF/DOC/DOCX, up to 10MB)</label>
            <input
              type="file"
              name="my_file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="rounded-md border px-3 py-2"
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between">
            {status && (
              <p className={`${status.ok ? "text-green-600" : "text-red-600"} text-sm`}>
                {status.msg}
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="ml-auto px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>

          <p className="md:col-span-2 text-xs text-slate-500">
            By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and{" "}
            <a href="/terms" className="underline">Terms</a>.
          </p>
        </form>
      </section>
    </div>
  );
}
