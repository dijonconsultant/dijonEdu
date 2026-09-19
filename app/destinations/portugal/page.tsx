import { DestinationPage } from "@/components/destination-page";

const aveiroAreas = ["Biology & Life Sciences", "Civil Engineering", "Communication & Arts", "Economics, Management, Industrial Engineering & Tourism", "Education & Psychology", "Electronics, Telecommunications & Informatics", "Environment & Planning", "Languages & Cultures", "Materials & Ceramic Engineering", "Mechanical Engineering", "Medical Sciences"];
const algarveCourses = ["Agronomy", "Biochemistry", "Bioengineering", "Business Administration", "Civil Engineering", "Economics", "Electrical and Computer Engineering", "Hotel Management", "Informatics", "Marine Biology", "Mechanical Engineering", "Pharmaceutical Sciences", "Psychology", "Tourism"];

function ProgrammeList({ items }: { items: string[] }) {
  return <ul className="mt-4 grid min-w-0 gap-2 sm:grid-cols-2">
    {items.map((item) => <li key={item} className="flex min-w-0 items-start gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm leading-5 text-slate-700"><span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span className="min-w-0 break-words">{item}</span></li>)}
  </ul>;
}

export default function PortugalPage() {
  return <DestinationPage
    country="Portugal"
    overview="Portugal offers internationally recognised higher education, a multicultural environment and access to the wider European academic and professional ecosystem. We currently support applications connected with the University of Aveiro and the University of Algarve."
    reasons={["Internationally recognised higher education in a welcoming European setting.", "Access to a multicultural academic and professional ecosystem.", "Bachelor, integrated master, master and doctoral study options.", "Programme choice across science, engineering, business, health, arts and technology."]}
    fields={["Engineering & Technology", "Business & Management", "Life & Health Sciences", "Tourism & Hospitality", "Arts, Languages & Culture"]}
    requirements={["Passport or accepted identity document", "Qualification that gives access to the selected level of higher education", "Academic transcripts and classification", "Language-proficiency evidence where required", "Required declarations, translations or legalisation/Apostille where applicable"]}
    universitySection={
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">University options</p>
            <h2 className="section-title mt-3">Portugal university information</h2>
            <p className="mt-4 leading-7 text-slate-600">Course availability, fees, deadlines and language requirements change by intake. Check the latest official requirements before applying.</p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Aveiro</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-navy sm:text-3xl">University of Aveiro</h3>
              </div>
              <div className="min-w-0 p-6 sm:p-8">
                <p className="leading-7 text-slate-600">A public university in Aveiro with 16 departments and four polytechnic schools, spanning engineering, sciences, humanities, social sciences, health, arts and technology. Study levels include undergraduate, integrated master, master, doctoral and advanced-training options.</p>
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-navy">Course areas</p>
                <ProgrammeList items={aveiroAreas} />
                <div className="mt-6 rounded-2xl border border-gold/15 bg-gold/5 p-4 text-sm leading-6 text-slate-700"><strong className="text-navy">Language note:</strong> Many undergraduate programmes are taught in Portuguese; some programmes or degrees are taught in English. Verify the language of instruction for the exact programme.</div>
              </div>
            </article>

            <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Algarve</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-navy sm:text-3xl">University of Algarve</h3>
              </div>
              <div className="min-w-0 p-6 sm:p-8">
                <p className="leading-7 text-slate-600">UAlg welcomes international students to undergraduate, integrated master, master and doctoral studies. Its published 2026/27 international undergraduate call includes 41 programmes and 326 places.</p>
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-navy">Selected 2026/27 courses</p>
                <ProgrammeList items={algarveCourses} />
                <div className="mt-6 rounded-2xl border border-gold/15 bg-gold/5 p-4 text-sm leading-6 text-slate-700"><span className="font-semibold text-navy">Fees:</span> Published 2026/27 international undergraduate tuition varies by programme from €1,750–€4,500; the published application fee is €50 per course.</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    }
  />;
}
