"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setMessage("Message sent — we'll get back to you within 24 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setMessage(
        "Failed to send. Please email us directly at support@keyversely.com",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1 text-foreground"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={50}
          placeholder="Your name"
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-foreground"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          placeholder="you@example.com"
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={1000}
          placeholder="Describe your issue or question..."
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full flex items-center justify-center gap-2 py-3 px-4 font-semibold rounded-lg text-primary-foreground transition ${
          status === "sending"
            ? "bg-primary/60 cursor-not-allowed"
            : "bg-primary hover:opacity-90"
        }`}
      >
        {status === "sending" && <Loader2 className="animate-spin h-5 w-5" />}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
          <CheckCircle className="h-5 w-5 shrink-0" />
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {message}
        </div>
      )}
    </form>
  );
}
