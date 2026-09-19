"use client";

import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { useEffect, useRef, useState } from "react";

/* ─── Reusable scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [visible, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  { icon: "🔍", title: "Profile Assessment", desc: "A free consultation to review your qualification, grades, study gap, preferred course and budget.", color: "from-navy to-slate-700" },
  { icon: "🎓", title: "University & Course Selection", desc: "Guidance towards options based on your profile and current university requirements.", color: "from-[#7A0D18] to-[#B01020]" },
  { icon: "📋", title: "Eligibility & Documents", desc: "A clear checklist for eligibility, academic records and supporting documents.", color: "from-slate-700 to-navy" },
  { icon: "📤", title: "Application Submission", desc: "Support with forms, submissions and application-status follow-up.", color: "from-[#B01020] to-[#7A0D18]" },
  { icon: "✍️", title: "SOP, CV & Academic Guidance", desc: "Guidance for motivation letters, CVs and academic documentation.", color: "from-navy to-[#7A0D18]" },
  { icon: "📩", title: "Admission-Letter Guidance", desc: "Help understanding the steps requested after an admission decision.", color: "from-[#7A0D18] to-navy" },
  { icon: "🛂", title: "Visa-Document Guidance", desc: "Guidance to prepare applicable visa documents after admission.", color: "from-[#B01020] to-navy" },
  { icon: "✈️", title: "Pre-Departure & Arrival", desc: "Accommodation, student-life and post-arrival information where available.", color: "from-navy to-[#B01020]" },
  { icon: "💼", title: "Work Permit Guidance", desc: "Information and guidance regarding part-time work rights during studies and post-study work permits.", color: "from-slate-800 to-[#7A0D18]" },
];

const whyUs = [
  { icon: "🤝", title: "Personalised Guidance", desc: "Every student gets individual attention — we understand your background, goals and constraints before recommending any path." },
  { icon: "🌍", title: "7+ Countries Covered", desc: "Portugal, Poland, Latvia, Hungary, Germany, UK, Spain and more — we know the admission landscape across Europe." },
  { icon: "📊", title: "Transparent Process", desc: "No hidden fees, no false promises. We clearly explain every step, requirement and realistic expectation upfront." },
  { icon: "⏱️", title: "Fast Turnaround", desc: "We respond within 24 hours and keep your application moving forward without unnecessary delays." },
];

const steps = [
  { num: "01", title: "Book Free Consultation", desc: "Fill in our contact form or call us — your first session is completely free with no obligation." },
  { num: "02", title: "Profile Review", desc: "We assess your academic background, grades, budget and preferred countries or courses." },
  { num: "03", title: "University Shortlisting", desc: "We shortlist suitable universities and programmes that match your profile and goals." },
  { num: "04", title: "Application & Documents", desc: "We guide you through every document, form and submission step by step." },
  { num: "05", title: "Admission & Visa", desc: "After admission, we help you understand the visa documentation process." },
  { num: "06", title: "Pre-Departure Support", desc: "We help you prepare for accommodation, travel and life in your destination country." },
];

const testimonials = [
  { name: "Ayesha R.", country: "Now studying in Portugal 🇵🇹", text: "Dijon Consultant made the entire process feel manageable. From choosing the right university to understanding my visa documents, they were with me at every step." },
  { name: "Hamza M.", country: "Now studying in Poland 🇵🇱", text: "I was confused about which universities to apply to. The team shortlisted options that actually matched my grades and budget. Very professional and honest." },
  { name: "Zara K.", country: "Now studying in Latvia 🇱🇻", text: "What I appreciated most was their transparency. They never made unrealistic promises and always gave me honest information about my chances." },
];

export default function ServicesPage() {
  const heroSection = useReveal(0.1);
  const splitSection = useReveal(0.1);
  const gridSection = useReveal(0.05);
  const stepsSection = useReveal(0.05);
  const whySection = useReveal(0.1);
  const testimonialsSection = useReveal(0.1);
  const ctaSection = useReveal(0.2);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy py-28 text-white">
        {/* Animated blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="animate-blob absolute top-1/2 left-1/3 h-60 w-60 rounded-full bg-white/3 blur-3xl" style={{ animationDelay: "3s" }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        {/* Floating particles */}
        <div className="hero-particle absolute left-[10%] top-[20%] h-2 w-2 opacity-60" style={{ animationDelay: "0s" }} />
        <div className="hero-particle absolute left-[80%] top-[15%] h-3 w-3 opacity-40" style={{ animationDelay: "1.5s" }} />
        <div className="hero-particle absolute left-[60%] top-[70%] h-2 w-2 opacity-50" style={{ animationDelay: "3s" }} />
        <div className="hero-particle absolute left-[25%] top-[65%] h-1.5 w-1.5 opacity-30" style={{ animationDelay: "2s" }} />

        <div
          ref={heroSection.ref}
          className={`container-page relative z-10 max-w-4xl transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Our Services
          </span>
          <h1
            className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            style={{ transitionDelay: "150ms" }}
          >
            Support for every stage of your <span className="shimmer-text">study-abroad</span> journey.
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg leading-8 text-slate-300 transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}
          >
            From initial profile assessment to pre-departure planning, we help keep each next step clear.
          </p>
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "450ms" }}
          >
            <CTAButton href="/contact" variant="light" className="animate-pulse-glow">
              Book Free Consultation →
            </CTAButton>
            <a href="#services-grid" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View All Services ↓
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F7F7F5" />
          </svg>
        </div>
      </section>

      {/* ── CONSULTATION IMAGE SPLIT ── */}
      <section className="container-page py-20">
        <div
          ref={splitSection.ref}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Text side */}
          <div className={`transition-all duration-1000 ${splitSection.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">How We Help</span>
            <h2 className="section-title mt-4">Your journey abroad starts with a conversation.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-500">
              We begin by listening — understanding your academic background, financial situation, career goals and preferred destinations.
            </p>
            <ul className="mt-8 space-y-4">
              {["Free first consultation — no commitment required", "Honest assessment of your profile and options", "Clear guidance on realistic timelines and costs", "Support available in Urdu & English"].map((pt, i) => (
                <li
                  key={pt}
                  className={`flex items-start gap-3 text-slate-600 transition-all duration-700 ${splitSection.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className={`mt-8 transition-all duration-700 ${splitSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "700ms" }}>
              <CTAButton href="/contact">Book Your Free Session →</CTAButton>
            </div>
          </div>

          {/* Image side */}
          <div className={`relative transition-all duration-1000 ${splitSection.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "200ms" }}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 to-navy/10 blur-2xl" />
            <Image
              src="/services-consultation.jpg"
              alt="Student consultation at Dijon Consultant"
              width={700}
              height={467}
              className="relative rounded-2xl shadow-2xl object-cover w-full hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Floating badge — animated */}
            <div className={`absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-100 transition-all duration-700 ${splitSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
              <span className="text-3xl">🎓</span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Students Guided</p>
                <p className="text-xl font-bold text-navy">
                  <Counter to={500} suffix="+" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services-grid" className="bg-slate-50/60 py-20">
        <div className="container-page">
          <div
            ref={gridSection.ref}
            className={`text-center mb-12 transition-all duration-800 ${gridSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">What We Offer</span>
            <h2 className="section-title mt-4">Everything you need, under one roof.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">We cover every stage of the study-abroad process — from your first enquiry to the day you land.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <article
                key={s.title}
                className={`gradient-border group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${gridSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-slate-50/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                  {s.icon}
                </div>
                <span className="absolute right-6 top-6 font-serif text-4xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                <p className="mt-2 leading-7 text-slate-500 text-sm">{s.desc}</p>
                <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS STEPS ── */}
      <section className="container-page py-20">
        <div ref={stepsSection.ref} className={`text-center mb-14 transition-all duration-800 ${stepsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">The Process</span>
          <h2 className="section-title mt-4">From enquiry to enrolment — step by step.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">We keep the process transparent so you always know where you stand and what comes next.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:border-gold/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${stepsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Animated connector line on hover */}
              <div className="absolute top-0 left-0 h-1 w-0 rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-navy to-gold group-hover:w-full transition-all duration-500" />
              <div className="flex items-center gap-4 mb-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white font-bold text-lg group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300">{step.title}</h3>
              </div>
              <p className="text-slate-500 text-sm leading-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-navy py-20 text-white">
        <div className="container-page">
          <div
            ref={whySection.ref}
            className="grid items-center gap-14 lg:grid-cols-2"
          >
            {/* Text + cards */}
            <div className={`transition-all duration-1000 ${whySection.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">Why Dijon</span>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Why students trust <span className="shimmer-text">Dijon Consultant.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We are not just an agency — we are your guide throughout one of the most important decisions of your life.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {whyUs.map((item, i) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 ${whySection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`relative transition-all duration-1000 ${whySection.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "200ms" }}>
              <div className="absolute -inset-4 rounded-3xl bg-gold/5 blur-2xl" />
              <Image
                src="/services-success.jpg"
                alt="Students graduating from European university"
                width={800}
                height={450}
                className="relative rounded-2xl shadow-2xl object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              />
              <div className={`absolute -top-5 -right-5 rounded-2xl bg-gold px-5 py-4 shadow-xl text-white text-center transition-all duration-700 ${whySection.visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: "600ms" }}>
                <p className="text-3xl font-bold"><Counter to={7} suffix="+" /></p>
                <p className="text-xs font-semibold opacity-90">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="container-page py-20">
        <div
          ref={testimonialsSection.ref}
          className={`text-center mb-12 transition-all duration-800 ${testimonialsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">Student Stories</span>
          <h2 className="section-title mt-4">What our students say.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 ${testimonialsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Animated stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className={`text-gold text-lg transition-all duration-300 ${testimonialsSection.visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                    style={{ transitionDelay: `${(i * 150) + (j * 60)}ms` }}
                  >★</span>
                ))}
              </div>
              <p className="text-slate-600 leading-7 text-sm italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy to-gold text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ── */}
      <section className="container-page pb-20">
        <div
          ref={ctaSection.ref}
          className={`overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center text-white relative transition-all duration-1000 ${ctaSection.visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-gold/10 blur-2xl animate-float-slow" />
          <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <span className={`text-5xl transition-all duration-700 inline-block ${ctaSection.visible ? "scale-100 rotate-0" : "scale-0 -rotate-45"}`} style={{ transitionDelay: "200ms" }}>🚀</span>
          <h2 className={`mt-4 font-serif text-3xl font-bold sm:text-4xl transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
            Ready to start your journey?
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-slate-300 leading-7 transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
            Book a free consultation today — no commitment, no hidden fees.
          </p>
          <div className={`mt-8 transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "500ms" }}>
            <CTAButton href="/contact" variant="light" className="animate-pulse-glow">
              Get My Free Consultation →
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-slate-400 max-w-2xl mx-auto">
            ⚠️ Disclaimer: We do not guarantee admission, visa approval, employment, or residency. All final decisions rest with universities and government authorities.
          </p>
        </div>
      </section>
    </>
  );
}
