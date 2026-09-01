import Link from "next/link";
import { CTAButton } from "@/components/cta-button";

const reasons = [
  "University and course guidance based on your academic background and career goals.",
  "Application support from initial profile assessment to university submission.",
  "Document guidance and application follow-up.",
  "Pre-departure guidance for students travelling to Europe.",
  "Support designed for students applying from Pakistan."
];

const destinations = [
  { name: "Portugal", description: "A welcoming lifestyle, quality education and an inspiring Atlantic setting.", accent: "PT" },
  { name: "Poland", description: "International programmes, historic cities and strong value for students.", accent: "PL" },
  { name: "Latvia", description: "A connected European study experience with an international outlook.", accent: "LV" },
  { name: "Hungary", description: "Academic tradition, vibrant student cities and a central location.", accent: "HU" },
  { name: "Germany", description: "Research-led universities, innovation and a strong international outlook.", accent: "DE" },
  { name: "United Kingdom", description: "Globally recognised universities and a wide choice of programmes.", accent: "UK" },
  { name: "Spain", description: "A vibrant culture, diverse cities and an engaging student experience.", accent: "ES" }
];

export default function HomePage() {
  return <>
    <section className="overflow-hidden bg-navy text-white">
      <div className="container-page grid min-h-[560px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Your European education starts here</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-tight sm:text-6xl">Study in Europe with Professional Admission Support</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Build your future in Europe. We help students from Pakistan explore suitable universities and courses in Portugal, Poland, Latvia, Hungary, Germany, the United Kingdom and Spain, prepare their applications, and receive guidance throughout the admission journey.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="/contact" variant="light" className="shadow-lg">Apply Now</CTAButton>
            <CTAButton href="/destinations" variant="outlineLight">Find Your Course</CTAButton>
            <CTAButton href="/contact" variant="outlineLight">Talk to an Advisor</CTAButton>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
          <p className="font-serif text-2xl font-bold">Your journey, made simple.</p>
          <div className="mt-7 space-y-5 text-sm text-slate-100"><p className="border-l-2 border-white pl-4">Find a programme that fits your future.</p><p className="border-l-2 border-white pl-4">Prepare a considered, complete application.</p><p className="border-l-2 border-white pl-4">Move forward with visa guidance you can trust.</p></div>
        </div>
      </div>
    </section>

    <section className="container-page grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-navy">Why Dijon</p><h2 className="section-title mt-3">Why Choose Us</h2><p className="mt-4 max-w-md leading-8">A calm, personal approach to one of the most important decisions you will make.</p></div>
      <ul className="grid gap-4 sm:grid-cols-2">{reasons.map((reason, index) => <li key={reason} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">{index + 1}</span><span className="leading-6 text-slate-700">{reason}</span></li>)}</ul>
    </section>

    <section className="bg-white py-20">
      <div className="container-page"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-navy">Choose your destination</p><h2 className="section-title mt-3">Explore Europe</h2></div><Link href="/destinations" className="text-sm font-semibold text-navy hover:underline">View all destinations →</Link></div><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((destination) => <Link key={destination.name} href={`/destinations/${destination.name === "United Kingdom" ? "uk" : destination.name.toLowerCase()}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-navy hover:shadow-lg"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif font-bold text-white">{destination.accent}</span><h3 className="mt-6 font-serif text-2xl font-bold text-navy">{destination.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{destination.description}</p><span className="mt-5 inline-block text-sm font-semibold text-navy">Discover {destination.name} <span className="transition group-hover:ml-1">→</span></span></Link>)}</div></div>
    </section>

    <section className="container-page py-20">
      <div className="rounded-3xl bg-navy px-7 py-12 text-center text-white sm:px-12"><p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Ready to begin?</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Start your European study journey today.</h2><p className="mx-auto mt-4 max-w-2xl text-slate-200">Submit your academic details and our admissions team will help identify suitable options.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><CTAButton href="/contact" variant="light">Get My Study Options</CTAButton><a href="tel:00351925152120" className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-navy">00351 92 5152 120</a></div></div>
    </section>
  </>;
}
