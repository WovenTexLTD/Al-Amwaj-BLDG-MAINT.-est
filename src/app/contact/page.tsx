"use client";

import { useState } from "react";

export default function ContactPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) validateAndSet(f);
  }

  function validateAndSet(f: File) {
    const okTypes = ["application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const ok = okTypes.includes(f.type) || [".pdf", ".doc", ".docx"].some(ext => f.name.toLowerCase().endsWith(ext));
    if (!ok) {
      setStatus({ type: "err", msg: "Please upload a PDF, DOC, or DOCX file." });
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setStatus({ type: "err", msg: "File too large (max 10 MB)." });
      return;
    }
    setStatus(null);
    setFile(f);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    if (file) form.set("cv", file);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setStatus({ type: "ok", msg: "Thank you! We received your details." });
      e.currentTarget.reset();
      setFile(null);
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
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
          Send us your inquiry, BOQ, or CV. We’ll get back to you promptly.
        </p>
      </section>

      {/* Form */}
      <section className="rounded-3xl bg-white border p-6 md:p-8">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Full Name</label>
            <input
              name="name"
              required
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-700">Email</label>
            <input
              type="email"
              name="email"
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
              className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B2042]/40"
              placeholder="Tell us about your project or experience..."
            />
          </div>

          {/* CV Drop Zone */}
          <div className="md:col-span-2">
            <label
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 cursor-pointer transition
                ${dragOver ? "border-[#0B2042] bg-[#0B2042]/5" : "border-slate-300 hover:border-[#0B2042]/60"}`}
            >
              <input
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) validateAndSet(f);
                }}
              />
              <div className="text-sm text-slate-700">
                <strong>Drag & drop</strong> your CV here, or click to browse
              </div>
              <div className="text-xs text-slate-500">PDF, DOC, or DOCX. Max 10MB.</div>

              {file && (
                <div className="mt-3 text-sm text-slate-700 flex items-center gap-3">
                  <span className="rounded bg-slate-100 px-2 py-1">{file.name}</span>
                  <button
                    type="button"
                    className="text-[#0B2042] underline"
                    onClick={() => setFile(null)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </label>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex items-center justify-between">
            {status && (
              <p className={`${status.type === "ok" ? "text-green-600" : "text-red-600"} text-sm`}>
                {status.msg}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="ml-auto px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
