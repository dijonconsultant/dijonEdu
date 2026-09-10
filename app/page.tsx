import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";

const stats = [
  { value: "500+", label: "Students Guided" },
  { value: "7", label: "Countries" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "5★", label: "Client Rating" },
];

const reasons = [
  { icon: "🎓", title: "University & Course Selection", desc: "Guidance based on your academic background and career goals." },
  { icon: "📋", title: "Complete Application Support", desc: "From profile assessment to submission, we handle every step." },
  { icon: "📄", title: "Document Guidance", desc: "Clear checklists, SOP writing help, and application follow-up." },
  { icon: "✈️", title: "Pre-Departure Guidance", desc: "Accommodation, visa tips, and post-arrival information." },
  { icon: "🇵🇰", title: "Pakistan-Focused Support", desc: "Specialists in helping students from Pakistan study in Europe." },
  { icon: "🛂", title: "Work Permit Guidance", desc: "Know your rights to work during and after your studies." },
];

const destinations = [
  { name: "Portugal", description: "A welcoming lifestyle, quality education and an inspiring Atlantic setting.", emoji: "🇵🇹", slug: "portugal", color: "from-green-600 to-red-600" },
  { name: "Poland", description: "International programmes, historic cities and strong value for students.", emoji: "🇵🇱", slug: "poland", color: "from-white to-red-600" },
  { name: "Latvia", description: "A connected European study experience with an international outlook.", emoji: "🇱🇻", slug: "latvia", color: "from-red-700 to-red-900" },
  { name: "Hungary", description: "Academic tradition, vibrant student cities and a central location.", emoji: "🇭🇺", slug: "hungary", color: "from-red-600 to-green-700" },
  { name: "Germany", description: "Research-led universities, innovation and a strong international outlook.", emoji: "🇩🇪", slug: "germany", color: "from-gray-900 to-red-600" },
  { name: "United Kingdom", description: "Globally recognised universities and a wide choice of programmes.", emoji: "🇬🇧", slug: "uk", color: "from-blue-800 to-red-700" },
  { name: "Spain", description: "A vibrant culture, diverse cities and an engaging student experience.", emoji: "🇪🇸", slug: "spain", color: "from-red-600 to-yellow-500" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
        {/* Background image with parallax overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-campus.jpg"
            alt="European university campus"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-[#0d2240]/90" />
        </div>

        {/* Floating decorative blobs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="animate-blob absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="hero-particle h-3 w-3 top-[20%] left-[10%]" style={{ animationDelay: "0s" }} />
          <div className="hero-particle h-2 w-2 top-[60%] left-[20%]" style={{ animationDelay: "1s" }} />
          <div className="hero-particle h-4 w-4 top-[30%] right-[15%]" style={{ animationDelay: "2s" }} />
          <div className="hero-particle h-2 w-2 top-[70%] right-[25%]" style={{ animationDelay: "0.5s" }} />
          <div className="hero-particle h-3 w-3 top-[45%] left-[50%]" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Spinning ring decoration */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full border border-gold/10 animate-spin-slow hidden lg:block" />
        <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[350px] w-[350px] rounded-full border border-gold/15 animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse", animationDuration: "15s" }} />

        <div className="container-page relative z-10 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Your European Education Starts Here
              </span>
              <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Study in{" "}
                <span className="shimmer-text">Europe</span>
                <br />
                with Expert Support
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We help students from Pakistan explore universities in Portugal, Poland, Latvia,
                Hungary, Germany, UK and Spain — from first enquiry to arrival.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href="/contact" variant="light" className="shadow-lg animate-pulse-glow">
                  Apply Now →
                </CTAButton>
                <CTAButton href="/destinations" variant="outlineLight">
                  Explore Destinations
                </CTAButton>
                <CTAButton href="/contact" variant="outlineLight">
                  Talk to an Advisor
                </CTAButton>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <div key={s.label} className="stat-item text-center" style={{ animationDelay: `${i * 0.15}s` }}>
                    <p className="font-serif text-2xl font-bold text-gold sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating image card */}
            <div className="relative hidden lg:block">
              <div className="animate-float relative mx-auto w-full max-w-sm">
                <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                  <Image
                    src="/students.jpg"
                    alt="Students celebrating graduation"
                    width={480}
                    height={480}
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-3xl" />
                </div>

                {/* Floating badge 1 */}
                <div className="animate-float-delay absolute -top-6 -left-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-xl">
                  <p className="text-xs font-bold text-white">✅ Visa Approved</p>
                  <p className="text-xs text-slate-300">Lisbon, Portugal</p>
                </div>

                {/* Floating badge 2 */}
                <div className="animate-float-slow absolute -bottom-4 -right-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-xl">
                  <p className="text-xs font-bold text-white">🎓 500+ Students</p>
                  <p className="text-xs text-slate-300">Study abroad ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── WHY DIJON ── */}
      <section className="container-page py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Why Choose Us</span>
          <h2 className="section-title mt-3">Everything you need, in one place</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-500">
            A calm, personal approach to one of the most important decisions you will make.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="gradient-border group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="text-4xl">{r.icon}</span>
              <h3 className="mt-4 font-serif text-xl font-bold text-navy">{r.title}</h3>
              <p className="mt-2 leading-7 text-slate-500 text-sm">{r.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="relative overflow-hidden bg-navy py-24">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#1B3A63" />
          </svg>
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Choose Your Destination</span>
              <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">Explore Europe</h2>
            </div>
            <Link href="/destinations" className="group text-sm font-semibold text-gold hover:text-amber-400 transition-colors">
              View all destinations <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest, i) => (
              <Link
                key={dest.name}
                href={`/destinations/${dest.slug}`}
                className="dest-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="dest-flag text-5xl">{dest.emoji}</div>
                <h3 className="mt-5 font-serif text-xl font-bold text-white">{dest.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{dest.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Discover
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="overflow-hidden bg-white py-14">
        <div className="container-page text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Trusted By Students Across Pakistan</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-slate-300">
            {["University of Lisbon", "Wrocław University", "Riga TU", "Eötvös Loránd", "TU Berlin", "King's College"].map(u => (
              <span key={u} className="font-serif text-lg font-semibold text-navy/40 transition hover:text-navy">{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-campus.jpg"
              alt="Campus background"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/70" />
          </div>

          {/* Decorative elements */}
          <div className="pointer-events-none absolute top-4 right-4 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-32 w-32 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />

          <div className="relative z-10 px-8 py-16 text-center sm:px-16">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Ready to Begin?</span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              Start Your European<br />Study Journey Today.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Submit your academic details and our admissions team will identify the right options for you — completely free.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <CTAButton href="/contact" variant="light" className="shadow-xl animate-pulse-glow px-8 py-4 text-base">
                Get My Study Options Free →
              </CTAButton>
              <a
                href="tel:00351925152120"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                📞 00351 92 5152 120
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
