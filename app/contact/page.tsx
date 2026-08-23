"use client";

import { FormEvent, useState } from "react";
import { CTAButton } from "@/components/cta-button";

const fieldClass = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none focus:border-navy";

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

  return <><section className="bg-navy py-20 text-white"><div className="container-page max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Admissions enquiry</p><h1 className="mt-4 font-serif text-5xl font-bold sm:text-6xl">Ready to Study in Europe?</h1><p className="mt-6 text-lg leading-8 text-slate-200">Complete the form and our admissions team will contact you to discuss suitable study options.</p><p className="mt-5 inline-block rounded-full border border-white/30 px-4 py-2 text-sm font-semibold">Free consultation</p></div></section><section className="container-page max-w-5xl py-20"><form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-9"><label className="text-sm font-semibold text-navy">Full Name<input required name="fullName" maxLength={100} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">WhatsApp Number<input required type="tel" name="whatsapp" maxLength={30} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Email<input required type="email" name="email" maxLength={254} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">City in Pakistan<input name="city" maxLength={100} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Highest Qualification<input name="qualification" maxLength={100} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Percentage / CGPA<input name="grade" maxLength={50} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Graduation Year<input name="graduationYear" maxLength={4} inputMode="numeric" className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Preferred Country<select name="country" className={fieldClass}><option>Portugal</option><option>Poland</option><option>Latvia</option><option>Hungary</option><option>Not sure yet</option></select></label><label className="text-sm font-semibold text-navy">Preferred Course<input name="course" maxLength={150} className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Study Level<select name="level" className={fieldClass}><option>Bachelor</option><option>Master</option></select></label><label className="text-sm font-semibold text-navy">English Test Status<input name="englishTest" maxLength={100} placeholder="e.g. IELTS, planned, not taken" className={fieldClass} /></label><label className="text-sm font-semibold text-navy">Budget Range<input name="budget" maxLength={100} className={fieldClass} /></label><label className="text-sm font-semibold text-navy sm:col-span-2">Message<textarea name="message" maxLength={2000} rows={5} className={fieldClass} /></label><div className="sm:col-span-2"><CTAButton type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Get My Study Options"}</CTAButton>{status === "success" && <p className="mt-4 text-sm font-medium text-green-700" role="status">Thank you. Your enquiry has been received; our admissions team will contact you shortly.</p>}{status === "error" && <p className="mt-4 text-sm font-medium text-red-700" role="alert">{error}</p>}<p className="mt-4 text-xs leading-5 text-slate-500">Your consultation is free. Submitting this form is an enquiry only. Admission and visa decisions are made by universities and relevant authorities.</p></div></form></section></>;
}
