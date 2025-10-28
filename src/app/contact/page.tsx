"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:info@yourdomain.com?subject=Website%20Inquiry&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <section className="space-y-6 max-w-lg">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full rounded-md px-3 py-2"
        />
        <input
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full rounded-md px-3 py-2"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border w-full rounded-md px-3 py-2 h-32"
        />
        <a href={mailto} className="bg-slate-900 text-white px-4 py-2 rounded-md inline-block">
          Send Message
        </a>
      </form>
      <p className="text-slate-600">
        Email: info@yourdomain.com<br />
        Location: Dubai, UAE<br />
        Hours: Sun–Thu, 9am–6pm
      </p>
    </section>
  );
}
