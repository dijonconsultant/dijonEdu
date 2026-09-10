import { CTAButton } from "@/components/cta-button";

const services = [
  { icon: "🔍", title: "Profile Assessment", desc: "A free consultation to review your qualification, grades, study gap, preferred course and budget.", color: "from-blue-500 to-navy" },
  { icon: "🎓", title: "University & Course Selection", desc: "Guidance towards options based on your profile and current university requirements.", color: "from-purple-500 to-blue-600" },
  { icon: "📋", title: "Eligibility & Documents", desc: "A clear checklist for eligibility, academic records and supporting documents.", color: "from-emerald-500 to-teal-600" },
  { icon: "📤", title: "Application Submission", desc: "Support with forms, submissions and application-status follow-up.", color: "from-gold to-amber-600" },
  { icon: "✍️", title: "SOP, CV & Academic Guidance", desc: "Guidance for motivation letters, CVs and academic documentation.", color: "from-orange-500 to-red-500" },
  { icon: "📩", title: "Admission-Letter Guidance", desc: "Help understanding the steps requested after an admission decision.", color: "from-pink-500 to-rose-600" },
  { icon: "🛂", title: "Visa-Document Guidance", desc: "Guidance to prepare applicable visa documents after admission.", color: "from-red-500 to-orange-500" },
  { icon: "✈️", title: "Pre-Departure & Arrival", desc: "Accommodation, student-life and post-arrival information where available.", color: "from-sky-500 to-blue-600" },
  { icon: "💼", title: "Work Permit Guidance", desc: "Information and guidance regarding part-time work rights during studies and post-study work permits.", color: "from-indigo-500 to-purple-600" },
];

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Support for every stage of your <span className="shimmer-text">study-abroad</span> journey.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From initial profile assessment to pre-departure planning, we help keep each next step clear.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <article key={s.title} className="gradient-border group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon with colored gradient background */}
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {s.icon}
              </div>

              {/* Step number */}
              <span className="absolute right-6 top-6 font-serif text-4xl font-bold text-slate-100 transition-colors group-hover:text-slate-200">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-5 font-serif text-xl font-bold text-navy">{s.title}</h2>
              <p className="mt-2 leading-7 text-slate-500 text-sm">{s.desc}</p>
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
            </article>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white relative">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
          <span className="text-3xl">⚠️</span>
          <h2 className="mt-3 font-serif text-2xl font-bold">Important Disclaimer</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300 leading-7">
            We do not guarantee admission, visa approval, employment, residence status or any specific financial outcome. Final decisions are made by universities and government authorities.
          </p>
          <CTAButton href="/contact" variant="light" className="mt-8 animate-pulse-glow">
            Get My Study Options Free →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
