"use client";

import { FormEvent, useState } from "react";
import { CTAButton } from "@/components/cta-button";

const fieldClass = "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10";

const contactInfo = [
  { icon: "📞", label: "Phone", value: "00351 92 5152 120", href: "tel:00351925152120" },
  { icon: "💬", label: "WhatsApp", value: "+92 333 300 7385", href: "https://wa.me/923333007385" },
  { icon: "📧", label: "Email", value: "info@dijonconsultants.com", href: "mailto:info@dijonconsultants.com" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "We could not submit your enquiry. Please try again.");
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not submit your enquiry. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="container-page relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Enquiry
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
            Ready to Study in <span className="shimmer-text">Europe?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Complete the form and our admissions team will contact you to discuss suitable study options — completely free.
          </p>
          {/* Quick contact strip */}
          <div className="mt-8 flex flex-wrap gap-4">
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                <span>{c.icon}</span>
                <span>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="container-page max-w-5xl py-24">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-16 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">✅</div>
            <h2 className="mt-6 font-serif text-3xl font-bold text-navy">Enquiry Received!</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-500">
              Thank you. Our admissions team will contact you shortly to discuss your study options.
            </p>
            <button onClick={() => setStatus("idle")} className="mt-8 text-sm font-semibold text-navy hover:underline">
              Submit another enquiry →
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {/* Form header */}
            <div className="bg-gradient-to-r from-navy to-[#0d2240] px-8 py-6 text-white">
              <h2 className="font-serif text-2xl font-bold">Your Study Abroad Profile</h2>
              <p className="mt-1 text-sm text-slate-300">Fill in your details below — it only takes 2 minutes</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
              <label className="text-sm font-semibold text-navy">
                Full Name <span className="text-gold">*</span>
                <input required name="fullName" maxLength={100} className={fieldClass} placeholder="Your full name" />
              </label>
              <label className="text-sm font-semibold text-navy">
                WhatsApp Number <span className="text-gold">*</span>
                <input required type="tel" name="whatsapp" maxLength={30} className={fieldClass} placeholder="+92 300 0000000" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Email Address <span className="text-gold">*</span>
                <input required type="email" name="email" maxLength={254} className={fieldClass} placeholder="you@example.com" />
              </label>
              <label className="text-sm font-semibold text-navy">
                City in Pakistan
                <input name="city" maxLength={100} className={fieldClass} placeholder="e.g. Lahore, Karachi" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Highest Qualification
                <input name="qualification" maxLength={100} className={fieldClass} placeholder="e.g. FSc, Bachelor's" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Percentage / CGPA
                <input name="grade" maxLength={50} className={fieldClass} placeholder="e.g. 75% or 3.2 CGPA" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Graduation Year
                <input name="graduationYear" maxLength={4} inputMode="numeric" className={fieldClass} placeholder="e.g. 2024" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Preferred Country
                <select name="country" className={fieldClass}>
                  <option>Portugal</option>
                  <option>Poland</option>
                  <option>Latvia</option>
                  <option>Hungary</option>
                  <option>Germany</option>
                  <option>United Kingdom</option>
                  <option>Spain</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-navy">
                Preferred Course
                <input name="course" maxLength={150} className={fieldClass} placeholder="e.g. Business, Computer Science" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Study Level
                <select name="level" className={fieldClass}>
                  <option>Bachelor</option>
                  <option>Master</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-navy">
                English Test Status
                <input name="englishTest" maxLength={100} className={fieldClass} placeholder="e.g. IELTS 6.5, not taken yet" />
              </label>
              <label className="text-sm font-semibold text-navy">
                Budget Range
                <input name="budget" maxLength={100} className={fieldClass} placeholder="e.g. €5,000–€10,000/year" />
              </label>
              <label className="text-sm font-semibold text-navy sm:col-span-2">
                Message (Optional)
                <textarea name="message" maxLength={2000} rows={4} className={fieldClass} placeholder="Any additional details about your goals, questions or circumstances…" />
              </label>

              <div className="sm:col-span-2">
                {status === "error" && (
                  <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    ⚠️ {error}
                  </div>
                )}
                <CTAButton type="submit" disabled={status === "sending"} className="w-full justify-center py-4 text-base sm:w-auto sm:px-10">
                  {status === "sending" ? "⏳ Submitting…" : "Get My Study Options Free →"}
                </CTAButton>
                <p className="mt-4 text-xs leading-5 text-slate-400">
                  🔒 Your consultation is free. Submitting this form is an enquiry only. Admission and visa decisions are made by universities and relevant authorities.
                </p>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
