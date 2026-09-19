import { CTAButton } from "@/components/cta-button";

export default function ScholarshipDestinationPage({ destination, description }: { destination: string; description: string }) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-page relative max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Scholarships</p>
          <h1 className="mt-5 font-serif text-5xl font-bold sm:text-6xl">Scholarships for {destination}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">How we can help</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy">Prepare a stronger scholarship application.</h2>
          <p className="mt-5 leading-8 text-slate-600">Dijon Consultant can guide you through eligibility checks, document preparation and the application process for relevant scholarship opportunities.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Ask about scholarships</CTAButton>
            <CTAButton href="/scholarship" variant="secondary">All scholarship destinations</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
