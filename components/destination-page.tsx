import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import type { ReactNode } from "react";

export type DestinationContent = {
  country: string;
  city?: string;
  flag?: string;
  visualTone?: string;
  overview: string;
  reasons: string[];
  fields: string[];
  requirements?: string[];
  universitySection?: ReactNode;
};

const posters: Record<string, { src: string; width: number; height: number }> = {
  Spain: { src: "/team/Spain.jpeg", width: 1254, height: 1254 },
  Germany: { src: "/team/Germany.jpeg", width: 1254, height: 1254 },
  Portugal: { src: "/team/Portugal.jpeg", width: 1145, height: 1374 },
  Poland: { src: "/team/Poland.jpeg", width: 1254, height: 1254 },
  Latvia: { src: "/team/Latvia.jpeg", width: 1254, height: 1254 },
  Hungary: { src: "/team/Hungary.jpeg", width: 1254, height: 1254 },
  "the United Kingdom": { src: "/team/United Kingdom.jpeg", width: 1149, height: 1369 },
};

const visuals: Record<string, { city: string; flag: string; tone: string }> = {
  Spain: { city: "Barcelona", flag: "\u{1F1EA}\u{1F1F8}", tone: "from-red-800/75 via-red-700/25 to-amber-400/20" },
  Germany: { city: "Berlin", flag: "\u{1F1E9}\u{1F1EA}", tone: "from-black/70 via-red-800/30 to-amber-400/30" },
  Portugal: { city: "Lisbon", flag: "\u{1F1F5}\u{1F1F9}", tone: "from-emerald-800/70 via-gold/25 to-transparent" },
  Poland: { city: "Warsaw", flag: "\u{1F1F5}\u{1F1F1}", tone: "from-red-800/70 via-red-600/25 to-transparent" },
  Latvia: { city: "Riga", flag: "\u{1F1F1}\u{1F1FB}", tone: "from-red-950/75 via-red-800/25 to-transparent" },
  Hungary: { city: "Budapest", flag: "\u{1F1ED}\u{1F1FA}", tone: "from-red-800/70 via-white/10 to-emerald-900/45" },
  "the United Kingdom": { city: "London", flag: "\u{1F1EC}\u{1F1E7}", tone: "from-blue-950/75 via-red-800/30 to-transparent" },
};

export function DestinationPage({ country, city, flag, visualTone, overview, reasons, fields, universitySection }: DestinationContent) {
  const visual = visuals[country] ?? { city: country, flag: "\u{1F30D}", tone: "from-navy/80 via-gold/20 to-transparent" };
  const poster = posters[country];

  return <>
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1fr_.95fr]">
        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Study in Europe</p>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-tight sm:text-6xl">Study in {country}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{overview}</p>
          <div className="mt-9 flex flex-wrap gap-3"><CTAButton href="/contact" variant="light">Start your application</CTAButton><CTAButton href="#study-options" variant="outlineLight">Explore study options</CTAButton></div>
        </div>
        {poster ? (
          <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/25">
            <Image src={poster.src} alt={`Dijon Consultants study in ${country} guide`} width={poster.width} height={poster.height} className="h-auto w-full" sizes="(min-width: 1024px) 430px, 90vw" priority />
          </div>
        ) : (
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <Image src="/hero-campus.jpg" alt={`Study in ${country}`} width={1100} height={825} className="h-[370px] w-full object-cover sm:h-[460px]" priority />
            <div className={`absolute inset-0 bg-gradient-to-tr ${visualTone ?? visual.tone} mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 sm:p-9"><span className="text-5xl">{flag ?? visual.flag}</span><p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">International study destination</p><p className="mt-2 font-serif text-3xl font-bold text-white">{city ?? visual.city}, {country}</p></div>
          </div>
        )}
      </div>
    </section>

    <section id="study-options" className="container-page grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Why {country}</p>
        <h2 className="section-title mt-3">A study experience built around your future.</h2>
        <p className="mt-5 max-w-2xl leading-8 text-slate-600">Every student journey is different. Our advisors help you explore suitable universities, understand document requirements and plan your application with confidence.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">{reasons.map((reason, index) => <li key={reason} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="font-serif text-sm font-bold text-gold">0{index + 1}</span><p className="mt-3 leading-7 text-slate-700">{reason}</p></li>)}</ul>
      </div>
      <aside className="self-start rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"><p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Academic options</p><h2 className="mt-3 font-serif text-3xl font-bold text-navy">Popular fields of study</h2><ul className="mt-6 space-y-1">{fields.map((field) => <li key={field} className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-slate-700"><span>{field}</span><span className="text-gold">→</span></li>)}</ul><CTAButton href="/contact" className="mt-8 w-full">Discuss your options</CTAButton></aside>
    </section>

    {universitySection}

    <section className="container-page py-20"><div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Student visa guidance</p><h2 className="mt-3 font-serif text-3xl font-bold text-navy">Prepare your visa application with confidence.</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Dijon Consultants can help you understand the process, organise supporting documents and prepare for the next stage of your student visa application.</p><p className="mt-5 border-l-4 border-gold bg-slate-50 p-4 text-sm leading-6 text-slate-600"><strong className="text-navy">Important disclaimer:</strong> We provide guidance and support only. Final visa decisions are made solely by the relevant immigration authorities.</p></div></section>
    <section className="container-page pb-20"><div className="rounded-3xl bg-navy px-7 py-12 text-center text-white sm:px-12"><h2 className="font-serif text-3xl font-bold">Ready to study in {country}?</h2><p className="mt-3 text-slate-200">Speak with Dijon Consultants and start shaping your pathway today.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><CTAButton href="/contact" variant="light">Book Free Consultation</CTAButton><a href="tel:00351925152120" className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-navy">00351 92 5152 120</a></div></div></section>
  </>;
}
