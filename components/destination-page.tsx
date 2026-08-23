import { CTAButton } from "@/components/cta-button";
import type { ReactNode } from "react";

export type DestinationContent = {
  country: string;
  overview: string;
  reasons: string[];
  fields: string[];
  requirements?: string[];
  universitySection?: ReactNode;
};

export function DestinationPage({ country, overview, reasons, fields, universitySection }: DestinationContent) {
  return <>
    <section className="bg-navy py-20 text-white"><div className="container-page max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Study in Europe</p><h1 className="mt-4 font-serif text-5xl font-bold leading-tight sm:text-6xl">Study in {country}</h1><p className="mt-6 text-lg leading-8 text-slate-200">{overview}</p></div></section>
    <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-navy">Why {country}</p><h2 className="section-title mt-3">Why Study Here</h2><ul className="mt-7 space-y-4">{reasons.map((reason) => <li key={reason} className="flex gap-3 leading-7"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-navy" />{reason}</li>)}</ul></div><aside className="rounded-3xl bg-white p-7 shadow-sm"><h2 className="font-serif text-2xl font-bold text-navy">Popular Fields of Study</h2><ul className="mt-5 space-y-3">{fields.map((field) => <li key={field} className="border-b border-slate-100 pb-3 text-slate-700">{field}</li>)}</ul></aside></section>
    {universitySection}

    <section className="container-page py-20"><div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.18em] text-navy">Student visa guidance</p><h2 className="mt-3 font-serif text-3xl font-bold text-navy">Prepare your visa application with confidence.</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Dijon Consultants can help you understand the process, organise supporting documents and prepare for the next stage of your student visa application.</p><p className="mt-5 border-l-4 border-navy bg-slate-50 p-4 text-sm leading-6 text-slate-600"><strong className="text-navy">Important disclaimer:</strong> We provide guidance and support only. Final visa decisions are made solely by the relevant immigration authorities.</p></div></section>
    <section className="container-page pb-20"><div className="rounded-3xl bg-navy px-7 py-12 text-center text-white sm:px-12"><h2 className="font-serif text-3xl font-bold">Ready to study in {country}?</h2><p className="mt-3 text-slate-200">Speak with Dijon Consultants and start shaping your pathway today.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><CTAButton href="/contact" variant="light">Book Free Consultation</CTAButton><a href="tel:00351925152120" className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-navy">00351 92 5152 120</a></div></div></section>
  </>;
}
