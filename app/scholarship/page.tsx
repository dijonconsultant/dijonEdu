import Link from "next/link";
import { CTAButton } from "@/components/cta-button";

const scholarshipDestinations = [
  {
    name: "Europe",
    href: "/scholarship/europe",
    description: "Explore scholarship guidance for study opportunities across Europe.",
    number: "01",
  },
  {
    name: "United Kingdom",
    href: "/scholarship/uk",
    description: "Explore scholarship guidance for universities in the United Kingdom.",
    number: "02",
  },
  {
    name: "Canada",
    href: "/scholarship/canada",
    description: "Explore scholarship guidance for study opportunities in Canada.",
    number: "03",
  },
];

export default function ScholarshipPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-gold/25" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-page relative max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Scholarships</p>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-tight sm:text-6xl">Find the right funding path for your studies.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Select your preferred study destination to explore scholarship guidance with Dijon Consultant.</p>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {scholarshipDestinations.map((destination) => (
            <Link key={destination.href} href={destination.href} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
              <span className="font-serif text-sm font-bold tracking-[0.18em] text-gold">{destination.number}</span>
              <h2 className="mt-8 font-serif text-3xl font-bold text-navy">{destination.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{destination.description}</p>
              <span className="mt-7 inline-flex items-center font-semibold text-gold transition-transform group-hover:translate-x-1">Explore scholarships <span className="ml-2">→</span></span>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-24">
        <div className="rounded-3xl bg-navy px-7 py-12 text-center text-white sm:px-12">
          <h2 className="font-serif text-3xl font-bold">Need help with your scholarship application?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Our team can help you understand the next steps and prepare your application documents.</p>
          <CTAButton href="/contact" variant="light" className="mt-8">Speak with an advisor</CTAButton>
        </div>
      </section>
    </>
  );
}
