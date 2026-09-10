import Image from "next/image";
import { CTAButton } from "@/components/cta-button";

const values = [
  { num: "01", title: "Responsible Counselling", desc: "Advice grounded in your academic qualifications, preferred field, budget, language requirements and long-term study goals.", icon: "🎯" },
  { num: "02", title: "Clear Information", desc: "Practical university and application information so you can make a fully informed decision.", icon: "💡" },
  { num: "03", title: "Student-Centred Support", desc: "A personal process that respects your plans, questions and individual circumstances.", icon: "🤝" },
];

const team = [
  { name: "Alina Zaid", designation: "Country Manager", role: "Country Manager", qualification: "PhD Strategic Studies", image: "/team/alina-zaid.jpeg", position: "center 35%", summary: "Leads country-level operations and helps ensure students receive a clear, supportive and consistent experience with Dijon Consultants.", responsibilities: ["Oversee local operations and service delivery", "Coordinate team priorities and student-support activities", "Build relationships that support the company's growth and standards"] },
  { name: "Ayeza Zubair", designation: "Recruitment Manager", role: "Recruitment Manager", qualification: "MBA", image: "/team/ayeza-zubair.jpeg", position: "center 35%", summary: "Helps students take the right next step by guiding applications, managing recruitment conversations, and keeping the process clear and responsive.", responsibilities: ["Coordinate student recruitment and enquiry follow-ups", "Match prospective students with suitable university options", "Support a smooth application journey from enquiry to enrolment"] },
  { name: "Minahil Shahzad", designation: "Developer", role: "Developer", qualification: "BS Software Engineering", image: "/team/minahil-shahzad.jpeg", position: "center 45%", summary: "Supports Dijon Consultants' digital platforms, helping create dependable online experiences for students and the wider team.", responsibilities: ["Develop and maintain company web platforms", "Improve performance, usability and digital workflows", "Support technical updates and new digital features"] },
  { name: "Sabra Akhter", designation: "Developer", role: "Developer", qualification: "BS", image: "/team/Sabra.jpeg", position: "center 35%", summary: "Supports Dijon Consultants' digital tools and helps maintain dependable online experiences for students and the wider team.", responsibilities: ["Develop and maintain company web platforms", "Support technical updates and digital workflows", "Help improve website usability and performance"] },
  { name: "Anzal Ashfaq", designation: "Social Media Marketing Specialist", role: "Social Media Marketing", qualification: "Bachelor of Business Administration (BBA)", image: "/team/social-media-marketing-specialist.jpeg", position: "center 35%", summary: "Leads Dijon Consultants' digital presence, helping prospective students discover clear and reliable study-abroad guidance.", responsibilities: ["Plan and manage content across social channels", "Create campaigns that explain services and student pathways", "Monitor engagement and maintain a consistent brand voice"] },
  { name: "Sania Khan", designation: "Admission Coordinator", role: "Admission Coordinator", qualification: "BBA", image: "/team/Sania.jpeg", position: "center 35%", summary: "Coordinates admission steps and helps students move through the application process with clear, timely support.", responsibilities: ["Coordinate student admission applications and follow-ups", "Support document collection and application updates", "Keep students informed throughout the admission process"] },
];

export default function AboutPage() {
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
            About Dijon Consultants
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Helping students make <span className="shimmer-text">Europe</span> feel within reach.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We are an international education consultancy supporting students from Pakistan who want to pursue higher education in Europe.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="container-page grid gap-14 py-24 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Story</span>
          <h2 className="section-title mt-3">A more personal way to plan your future.</h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-navy to-gold" />
        </div>
        <div className="space-y-5 leading-8 text-slate-600">
          <p>Our role is to simplify the university selection and application process by providing clear information, practical guidance and application support.</p>
          <p>Students are guided according to their academic qualifications, preferred field, budget, language requirements and long-term study goals. Admission is always subject to the university's official eligibility and selection rules.</p>
        </div>
      </section>

      {/* ── MISSION & APPROACH ── */}
      <section className="bg-white py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {/* Mission card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Mission</span>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight">
              To help Pakistani students explore suitable European higher-education options with clarity and confidence.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              We provide guidance, not guaranteed outcomes. Final admission and visa decisions remain with the relevant universities and authorities.
            </p>
          </div>
          {/* Approach */}
          <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Approach</span>
            <h2 className="section-title mt-3">Listen. Assess. Support.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              We start by understanding your profile, then identify suitable options based on current requirements. From document preparation to pre-departure planning, we keep the journey structured and understandable.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="container-page py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Values</span>
          <h2 className="section-title mt-3">What guides our work.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="gradient-border group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="text-4xl">{v.icon}</span>
              <span className="mt-4 block font-serif text-4xl font-bold text-navy/20">{v.num}</span>
              <h3 className="mt-2 font-serif text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-3 leading-7 text-slate-500 text-sm">{v.desc}</p>
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-navy to-gold transition-all duration-500 group-hover:w-full rounded-full" />
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/contact">Talk to an Advisor</CTAButton>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-page relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Team</span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">Meet the people behind Dijon.</h2>
            <p className="mt-4 leading-8 text-slate-300">A dedicated team working to share clear, useful guidance with students at every step.</p>
          </div>
          <div className="mt-12 space-y-8">
            {team.map((member, index) => (
              <article key={member.name} className="team-profile overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm lg:grid lg:grid-cols-[minmax(19rem,0.78fr)_1fr]">
                <div className="relative h-[28rem] overflow-hidden lg:h-full">
                  <Image src={member.image} alt={`${member.name} at Dijon Consultants`} fill className="object-cover transition-transform duration-700 hover:scale-105" style={{ objectPosition: member.position }} sizes="(min-width: 1024px) 40vw, 100vw" priority={index === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="flex min-h-[28rem] flex-col justify-center p-8 sm:p-12">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold w-fit">
                    {member.designation}
                  </span>
                  <h3 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">{member.name}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">{member.summary}</p>
                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">Key Responsibilities</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                      {member.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <dl className="mt-8 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Role</dt>
                      <dd className="mt-2 text-xl font-semibold text-white">{member.role}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Qualification</dt>
                      <dd className="mt-2 text-lg leading-7 text-slate-300">{member.qualification}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
