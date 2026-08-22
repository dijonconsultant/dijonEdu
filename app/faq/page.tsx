"use client";

import { useState } from "react";

const faqs = [
  ["Can I apply from Pakistan?", "Yes. International students can apply subject to the eligibility and admission rules of the selected university and programme."],
  ["Can I apply for Bachelor’s and Master’s programmes?", "Yes. The available level depends on the university, programme and your academic qualification."],
  ["Do I need IELTS?", "Language requirements vary by university and programme. The exact accepted evidence must be checked before application."],
  ["Can you guarantee admission or a visa?", "No. Admission is decided by the university and visa decisions are made by the competent authorities."],
  ["Can you help with documents?", "Yes. We can guide applicants on the documents required for the selected university and application."],
  ["What is the cost of studying in Europe?", "Tuition and living costs vary substantially by country, university, programme and city. We provide a course-specific estimate rather than one universal figure."]
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <><section className="bg-navy py-20 text-white"><div className="container-page max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Frequently asked questions</p><h1 className="mt-4 font-serif text-5xl font-bold sm:text-6xl">Your questions, answered.</h1><p className="mt-6 text-lg leading-8 text-slate-200">Everything you may want to know before planning your European education with Dijon Consultants.</p></div></section><section className="container-page max-w-4xl py-20"><div className="divide-y divide-slate-200 rounded-2xl bg-white px-6 shadow-sm sm:px-8">{faqs.map(([question, answer], index) => { const isOpen = openIndex === index; return <article key={question} className="py-2"><button type="button" className="flex w-full items-center justify-between gap-5 py-5 text-left font-serif text-xl font-bold text-navy" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{question}</span><span className={`shrink-0 text-2xl font-normal transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span></button><div id={`faq-answer-${index}`} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="min-h-0 overflow-hidden"><p className="max-w-3xl pb-5 leading-7 text-slate-600">{answer}</p></div></div></article>; })}</div></section></>;
}
