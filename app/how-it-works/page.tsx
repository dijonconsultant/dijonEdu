"use client";

import { CTAButton } from "@/components/cta-button";
import { useEffect, useRef, useState } from "react";

/* ─── Scroll-reveal hook ─── */
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

/* ─── Individual step reveal ─── */
function useStepReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Animated vertical line ─── */
function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHeight(100), 300);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="absolute left-[27px] top-16 bottom-16 w-0.5 bg-slate-100 hidden sm:block overflow-hidden">
      <div
        className="w-full bg-gradient-to-b from-navy via-gold to-navy transition-all duration-[2500ms] ease-out"
        style={{ height: `${height}%` }}
      />
    </div>
  );
}

/* ─── Single animated step ─── */
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, visible } = useStepReveal();
  return (
    <article
      ref={ref}
      className={`relative mb-6 grid grid-cols-[4rem_1fr] gap-5 sm:grid-cols-[5.5rem_1fr] transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon bubble */}
      <div
        className={`step-number relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-xl shadow-lg transition-all duration-500 ${
          visible ? "scale-100 rotate-0" : "scale-0 rotate-45"
        }`}
        style={{ transitionDelay: `${index * 80 + 200}ms` }}
      >
        <span>{step.icon}</span>
        {/* Pulse ring */}
        {visible && (
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-white" style={{ animationDuration: "2s", animationDelay: `${index * 0.3}s`, animationIterationCount: "2" }} />
        )}
      </div>

      {/* Card */}
      <div className="step-card gradient-border group rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Step label + line */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gold tracking-widest">STEP {String(index + 1).padStart(2, "0")}</span>
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{step.icon}</span>
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold text-navy group-hover:text-gold transition-colors duration-300">{step.title}</h2>
        <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
        {/* Animated underline */}
        <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
      </div>
    </article>
  );
}

const steps = [
  { title: "Free Consultation", desc: "Tell us about your academic background, interests, budget and study-abroad goals. No commitment, no fees.", icon: "💬", color: "from-navy to-slate-700" },
  { title: "Profile Assessment", desc: "We review your profile and discuss the opportunities that may suit you best based on your grades, budget and timeline.", icon: "📊", color: "from-[#7A0D18] to-[#B01020]" },
  { title: "Destination Selection", desc: "Explore Portugal, Poland, Latvia, Hungary, Germany, UK and Spain to find the environment that feels right for you.", icon: "🌍", color: "from-slate-700 to-navy" },
  { title: "Course & University Shortlisting", desc: "Create a focused shortlist of programmes and institutions that match your profile and goals.", icon: "🎓", color: "from-[#B01020] to-[#7A0D18]" },
  { title: "Application Preparation", desc: "Prepare your application, documents and submissions with structured guidance through every requirement.", icon: "📋", color: "from-navy to-[#7A0D18]" },
  { title: "Visa Guidance", desc: "Build an organised student-visa file and understand each step of the process so nothing is missed.", icon: "🛂", color: "from-[#7A0D18] to-navy" },
  { title: "Pre-Departure Support", desc: "Get ready for travel, arrival and the start of your student life in Europe with practical tips and guidance.", icon: "✈️", color: "from-[#B01020] to-navy" },
];

const stats = [
  { value: "7", suffix: "+", label: "Steps to Success" },
  { value: "500", suffix: "+", label: "Students Guided" },
  { value: "7", suffix: "", label: "Countries Covered" },
  { value: "24", suffix: "h", label: "Response Time" },
];

export default function HowItWorksPage() {
  const heroSection = useReveal(0.1);
  const statsSection = useReveal(0.2);
  const ctaSection = useReveal(0.2);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="animate-blob absolute top-1/2 right-1/4 h-60 w-60 rounded-full bg-white/3 blur-3xl" style={{ animationDelay: "4s" }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        {/* Floating particles */}
        <div className="hero-particle absolute left-[15%] top-[25%] h-2 w-2 opacity-50" style={{ animationDelay: "0s" }} />
        <div className="hero-particle absolute left-[75%] top-[20%] h-3 w-3 opacity-40" style={{ animationDelay: "1s" }} />
        <div className="hero-particle absolute left-[55%] top-[65%] h-2 w-2 opacity-30" style={{ animationDelay: "2.5s" }} />
        <div className="hero-particle absolute left-[30%] top-[70%] h-1.5 w-1.5 opacity-40" style={{ animationDelay: "3.5s" }} />

        <div
          ref={heroSection.ref}
          className={`container-page relative z-10 max-w-4xl transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            How It Works
          </span>
          <h1
            className={`mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "150ms" }}
          >
            A clear route from first conversation to{" "}
            <span className="shimmer-text">departure.</span>
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg leading-8 text-slate-300 transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}
          >
            Our seven-step process gives your European study plan structure, momentum and support at every stage.
          </p>
          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-1000 ${heroSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "450ms" }}
          >
            <CTAButton href="/contact" variant="light" className="animate-pulse-glow">
              Start Today — It&apos;s Free →
            </CTAButton>
            <a href="#steps" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              See the Steps ↓
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F7F7F5" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div
          ref={statsSection.ref}
          className="container-page grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${statsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-serif text-4xl font-bold text-navy">
                {s.value}{s.suffix}
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STEPS TIMELINE ── */}
      <section id="steps" className="container-page max-w-4xl py-20">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">The Journey</span>
          <h2 className="section-title mt-4">Your 7-step path to studying abroad.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">Every step is designed to keep things clear, organised and moving forward.</p>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <AnimatedLine />

          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          ref={ctaSection.ref}
          className={`mt-14 overflow-hidden rounded-3xl bg-navy p-10 text-center text-white relative transition-all duration-1000 ${ctaSection.visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl animate-float-slow" />
          <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />

          <span
            className={`text-5xl inline-block transition-all duration-700 ${ctaSection.visible ? "scale-100 rotate-0" : "scale-0 -rotate-45"}`}
            style={{ transitionDelay: "200ms" }}
          >
            🚀
          </span>
          <p
            className={`mt-4 text-lg text-slate-300 transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "300ms" }}
          >
            Your next step is just a conversation away.
          </p>
          <h2
            className={`mt-2 font-serif text-3xl font-bold transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "400ms" }}
          >
            Ready to begin your journey?
          </h2>
          <div
            className={`mt-7 transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <CTAButton href="/contact" variant="light" className="animate-pulse-glow">
              Book Free Consultation →
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
