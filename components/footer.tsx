import Link from "next/link";

const quickLinks = [["About Us", "/about"], ["Countries", "/destinations"], ["Services", "/services"], ["Apply Now", "/contact"], ["FAQ", "/faq"], ["Contact Us", "/contact"]];
const destinations = ["Portugal", "Poland", "Latvia", "Hungary", "Germany", "United Kingdom", "Spain"];
const socialLinks = [['LinkedIn', 'https://www.linkedin.com/company/dijon-consultants1/'], ['Instagram', 'https://www.instagram.com/dijonconsultants/'], ['Facebook', 'https://www.facebook.com/profile.php?id=61593227767846']];

export function Footer() {
  return <footer className="mt-16 bg-navy py-12 text-slate-200">
    <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="font-serif text-xl font-bold text-white">Dijon Consultants</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">International education guidance for students applying from Pakistan.</p>
        <a className="mt-5 block font-semibold text-white hover:text-slate-300" href="tel:00351925152120">00351 92 5152 120</a>
        <a className="mt-2 block text-sm text-slate-300 hover:text-white" href="https://wa.me/923333007385" target="_blank" rel="noopener noreferrer">+92 333 3007385 (WhatsApp)</a>
        <a className="mt-2 inline-block text-sm text-slate-300 hover:text-white" href="mailto:info@dijonconsultants.com">info@dijonconsultants.com</a>
        <div className="mt-5"><p className="text-sm font-semibold text-white">Follow us</p><div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">{label}</a>)}</div></div>
      </div>
      <div><h2 className="font-semibold text-white">Quick Links</h2><ul className="mt-4 space-y-2 text-sm">{quickLinks.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}</ul></div>
      <div><h2 className="font-semibold text-white">Countries</h2><ul className="mt-4 space-y-2 text-sm">{destinations.map((name) => <li key={name}><Link href={`/destinations/${name === "United Kingdom" ? "uk" : name.toLowerCase()}`} className="hover:text-white">Study in {name}</Link></li>)}</ul></div>
      <div><h2 className="font-semibold text-white">Legal</h2><ul className="mt-4 space-y-2 text-sm"><li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li><li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li></ul></div>
    </div>
    <div className="container-page mt-10 border-t border-white/20 pt-5 text-xs leading-5 text-slate-400">
      <p>© 2026 Dijon Consultants. All rights reserved.</p>
      <p className="mt-2">Study abroad information is provided for guidance and may change without notice. University admission, tuition fees, deadlines, course availability, visa requirements and immigration rules are determined by the relevant institutions and authorities. Applicants should verify final requirements before submitting documents or making payments.</p>
      <p className="mt-2">We are an education consultancy and not a government authority. Admission and visa decisions are made by universities and relevant government authorities.</p>
    </div>
  </footer>;
}
