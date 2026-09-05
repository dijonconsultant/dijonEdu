"use client";

import { useState } from "react";

const whatsappUrl = "https://wa.me/923333007385";
const faqs = [
  ["Can I apply from Pakistan?", "Yes. We guide students applying from Pakistan, subject to the eligibility and admission rules of the selected university."],
  ["Do I need IELTS?", "Language requirements vary by university and programme. We will check the accepted evidence for your chosen course."],
  ["Can you help with documents?", "Yes. We guide you through the documents required for your selected university and application."],
  ["Can you guarantee a visa?", "No. Visa decisions are made by the relevant authorities, but we can help you prepare a complete application."],
] as const;

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-current" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z" /></svg>;
}

function ChatIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 3 21l1-4a8 8 0 1 1 2 1Z" /><path strokeLinecap="round" d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
}

export function SupportWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    {isChatOpen && <section className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl" aria-label="Dijon Consultants support chat">
      <div className="bg-navy px-5 py-4 text-white">
        <p className="font-semibold">Dijon support</p>
        <p className="mt-1 text-sm text-slate-200">Quick answers for your study journey</p>
      </div>
      <div className="space-y-2 p-4">
        {faqs.map(([question, answer], index) => <div key={question}>
          <button type="button" className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-3 text-left text-sm font-semibold text-navy transition duration-200 hover:border-gold hover:bg-slate-50" aria-expanded={selectedFaq === index} aria-controls={`support-answer-${index}`} onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}>
            <span>{question}</span><span className={`text-lg font-normal transition-transform duration-300 ease-out ${selectedFaq === index ? "rotate-45" : "rotate-0"}`}>+</span>
          </button>
          <div id={`support-answer-${index}`} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${selectedFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="min-h-0 overflow-hidden"><p className="px-3 pb-2 pt-2 text-sm leading-6 text-slate-600">{answer}</p></div>
          </div>
        </div>)}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb957]">
          <WhatsAppIcon /> Chat on WhatsApp
        </a>
      </div>
    </section>}
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => setIsChatOpen(!isChatOpen)} className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2" aria-label={isChatOpen ? "Close support chat" : "Open support chat"} aria-expanded={isChatOpen}>
        <ChatIcon />
      </button>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1fb957] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2" aria-label="Chat with Dijon Consultants on WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  </div>;
}
