import { CTAButton } from "@/components/cta-button";

const steps = [
  { title: "Free Consultation", desc: "Tell us about your academic background, interests, budget and study-abroad goals.", icon: "💬", color: "from-blue-500 to-navy" },
  { title: "Profile Assessment", desc: "We review your profile and discuss the opportunities that may suit you best.", icon: "📊", color: "from-purple-500 to-blue-600" },
  { title: "Destination Selection", desc: "Explore Portugal, Poland, Latvia, Hungary, Germany, UK and Spain to find the environment that feels right.", icon: "🌍", color: "from-emerald-500 to-teal-600" },
  { title: "Course & University Shortlisting", desc: "Create a focused shortlist of programmes and institutions to pursue.", icon: "🎓", color: "from-gold to-amber-600" },
  { title: "Application Preparation", desc: "Prepare your application, documents and submissions with structured support.", icon: "📋", color: "from-orange-500 to-red-500" },
  { title: "Visa Guidance", desc: "Build an organised student-visa file and understand the process ahead.", icon: "🛂", color: "from-red-500 to-pink-600" },
  { title: "Pre-Departure Support", desc: "Get ready for travel, arrival and the start of your student life in Europe.", icon: "✈️", color: "from-sky-500 to-blue-600" },
];

export default function HowItWorksPage() {
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
            How It Works
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            A clear route from first conversation to <span className="shimmer-text">departure.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Our seven-step process gives your European study plan structure, momentum and support.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="container-page max-w-4xl py-24">
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-14 bottom-14 w-0.5 bg-gradient-to-b from-navy via-gold to-navy opacity-20 hidden sm:block" />

          {steps.map((step, index) => (
            <article
              key={step.title}
              className="step-item relative mb-6 grid grid-cols-[4rem_1fr] gap-5 sm:grid-cols-[5.5rem_1fr]"
              style={{ "--step-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              {/* Number bubble */}
              <div className={`step-number relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-xl shadow-lg`}>
                <span>{step.icon}</span>
              </div>

              {/* Card */}
              <div className="step-card gradient-border group rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">Step {String(index + 1).padStart(2, "0")}</span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <h2 className="mt-2 font-serif text-2xl font-bold text-navy">{step.title}</h2>
                    <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
                  </div>
                </div>
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-navy p-10 text-center text-white relative">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <p className="text-lg text-slate-300">Your next step is just a conversation away.</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">Ready to begin your journey?</h2>
          <CTAButton href="/contact" variant="light" className="mt-7 animate-pulse-glow">
            Book Free Consultation →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
