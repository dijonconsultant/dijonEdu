import { CTAButton } from "@/components/cta-button";

const steps = [
  ["Free Consultation", "Tell us about your academic background, interests, budget and study-abroad goals."],
  ["Profile Assessment", "We review your profile and discuss the opportunities that may suit you best."],
  ["Destination Selection", "Explore Portugal, Poland, Latvia and Hungary to find the environment that feels right."],
  ["Course & University Shortlisting", "Create a focused shortlist of programmes and institutions to pursue."],
  ["Application Preparation", "Prepare your application, documents and submissions with structured support."],
  ["Visa Guidance", "Build an organised student-visa file and understand the process ahead."],
  ["Pre-Departure Support", "Get ready for travel, arrival and the start of your student life in Europe."]
];

export default function HowItWorksPage() {
  return <><section className="bg-navy py-20 text-white"><div className="container-page max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">How it works</p><h1 className="mt-4 font-serif text-5xl font-bold leading-tight sm:text-6xl">A clear route from first conversation to departure.</h1><p className="mt-6 text-lg leading-8 text-slate-200">Our seven-step process gives your European study plan structure, momentum and support.</p></div></section><section className="container-page max-w-4xl py-20"><div className="relative">{steps.map(([title, description], index) => <article key={title} className="step-item relative grid grid-cols-[3.5rem_1fr] gap-3 pb-10 sm:grid-cols-[5.5rem_1fr] sm:gap-5" style={{ "--step-delay": `${index * 90}ms` } as React.CSSProperties}><div className="step-number relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-serif text-xl font-bold text-white">{index + 1}</div><div className="step-card rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-navy">{title}</h2><p className="mt-2 leading-7 text-slate-600">{description}</p></div></article>)}</div><div className="mt-6 text-center"><p className="text-lg text-slate-600">Your next step is just a conversation away.</p><CTAButton href="/contact" className="mt-5">Book Free Consultation</CTAButton></div></section></>;
}
