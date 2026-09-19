export interface UpdateArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "visa-rules" | "intake-deadlines" | "scholarships" | "work-rights";
  categoryLabel: string;
  categoryBadgeBg: string;
  categoryBadgeText: string;
  date: string;
  readTime: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  keyTakeaways: string[];
  content: string[];
}

export const updatesData: UpdateArticle[] = [
  {
    id: "1",
    slug: "schengen-student-visa-rules-pakistan-2026",
    title: "European Student Visa Updates: Key Document & Appointment Rules for Pakistani Applicants",
    excerpt: "Consulates across Islamabad and Karachi have streamlined student visa appointment booking and financial verification guidelines for Poland, Portugal, Germany, and Hungary.",
    category: "visa-rules",
    categoryLabel: "Visa Rule Changes",
    categoryBadgeBg: "bg-red-100",
    categoryBadgeText: "text-red-700",
    date: "September 15, 2026",
    readTime: "4 min read",
    featured: true,
    author: {
      name: "Dijon Visa Advisory Desk",
      role: "Immigration & Compliance Team"
    },
    tags: ["Schengen Visa", "Pakistan Applicants", "Bank Statements", "VFS Global"],
    keyTakeaways: [
      "Block accounts or sponsorship verification must match official consular exchange rates updated monthly.",
      "Portugal and Poland now require apostille / MOFA attestation on all prior academic degrees and police clearance certificates.",
      "Visa interview appointments must be booked at least 8 to 12 weeks prior to intake commencement.",
      "Dijon Consultants provides end-to-end checklist audits before your consular appointment."
    ],
    content: [
      "Navigating European student visa requirements from Pakistan requires precise planning and compliance with the latest consular directives. In recent months, embassies in Islamabad and consulates in Karachi have enhanced document verification procedures to reduce processing backlogs.",
      "For Pakistani students targeting Germany, the blocked account (Sperrkonto) remains mandatory, with living expense requirements pegged to federal guidelines. For Poland and Hungary, notarized sponsor bank statements with clear proof of source of income and tax returns (FBR) are closely evaluated.",
      "Portugal has further established expedited channels for higher education admissions, requiring registered acceptance letters from recognized Portuguese universities along with confirmed accommodation agreements.",
      "To avoid delays, applicants are advised to prepare police character certificates (with MOFA attestation) and academic transcripts well in advance. Our team at Dijon Consultants assists you at every stage, verifying documentation authenticity and preparing candidates for embassy interviews."
    ]
  },
  {
    id: "2",
    slug: "fall-2026-spring-2027-intake-deadlines-europe",
    title: "Upcoming Intake Deadlines for European Universities (Fall 2026 & Spring 2027)",
    excerpt: "A comprehensive timeline of university application cut-offs across Germany, Poland, Latvia, Portugal, Hungary, and the UK.",
    category: "intake-deadlines",
    categoryLabel: "Intake Deadlines",
    categoryBadgeBg: "bg-blue-100",
    categoryBadgeText: "text-blue-700",
    date: "September 10, 2026",
    readTime: "3 min read",
    featured: true,
    author: {
      name: "Admissions Office",
      role: "Academic Guidance Team"
    },
    tags: ["Application Deadlines", "Uni-Assist", "Spring 2027", "Fall 2026"],
    keyTakeaways: [
      "German Uni-Assist portals typically close for international applications 2–3 months before lecture start dates.",
      "Poland public universities operate early-bird review rounds; submitting early significantly boosts acceptance rates.",
      "Spring intake (February/March start) applications are currently open for Latvia, Poland, and Hungary.",
      "UK clearing and direct university admissions are accepting applications for upcoming intakes with fast-track CAS issuance."
    ],
    content: [
      "Timing is everything when applying to European universities. With competitive entry standards and visa lead times, staying ahead of application deadlines is crucial for students from Pakistan.",
      "Most German universities operating via Uni-Assist or direct application portals evaluate applications in rolling cycles. Securing your VPD (Vorprüfungsdokumentation) early ensures your application is reviewed before department quotas fill up.",
      "In Poland and Latvia, leading technical universities offer February/March Spring intakes in Engineering, Computer Science, and Business Management. These intakes feature smaller cohorts, allowing for focused classroom environments and quicker visa processing.",
      "Don't wait until the final deadline week. Early applications provide adequate buffer time to arrange apostille attestations, receive unconditional offer letters, and secure visa interview slots."
    ]
  },
  {
    id: "3",
    slug: "stipendium-hungaricum-daad-scholarships-guide",
    title: "Government Scholarships in Europe: Fully Funded Opportunities for Pakistani Students",
    excerpt: "Breakdown of Stipendium Hungaricum, DAAD scholarships, and Erasmus Mundus joint master's programmes covering 100% tuition and living allowances.",
    category: "scholarships",
    categoryLabel: "Scholarship News",
    categoryBadgeBg: "bg-amber-100",
    categoryBadgeText: "text-amber-800",
    date: "September 02, 2026",
    readTime: "5 min read",
    featured: true,
    author: {
      name: "Scholarship Research Cell",
      role: "Dijon Consultants"
    },
    tags: ["Stipendium Hungaricum", "DAAD", "Erasmus+", "Full Funding"],
    keyTakeaways: [
      "Stipendium Hungaricum covers 100% tuition, monthly stipend, free dormitory housing, and health insurance in Hungary.",
      "Applications for Hungarian government scholarships are processed via HEC Pakistan alongside the official Tempus portal.",
      "DAAD scholarships for Germany prioritize candidates with strong academic backgrounds and developmental or research focus.",
      "Erasmus Mundus awards allow students to study across 2–3 European countries with complete cost coverage."
    ],
    content: [
      "European governments offer some of the most generous international scholarship programmes in the world. For Pakistani applicants with strong academic records, fully funded options eliminate tuition and living costs.",
      "The Stipendium Hungaricum programme, administered jointly with the Higher Education Commission (HEC) of Pakistan, awards thousands of scholarships annually across Bachelor's, Master's, and PhD levels in Budapest, Debrecen, Szeged, and Pécs.",
      "Germany's DAAD (German Academic Exchange Service) provides targeted scholarships such as EPOS and Helmut Schmidt programmes, covering monthly allowances of €934 to €1,200 alongside travel allowances and health coverage.",
      "Our counselors guide applicants through writing winning Motivation Letters (SOPs), assembling research proposals, and meeting all HEC and university verification standards."
    ]
  },
  {
    id: "4",
    slug: "post-study-work-rights-europe-comparison",
    title: "Student Work Rights & Post-Study Visas in Europe: Country-by-Country Breakdown",
    excerpt: "Understand how many hours you can work during your degree, plus stay-back visa durations in Germany (18 months), UK (2 years), Poland, and Portugal.",
    category: "work-rights",
    categoryLabel: "Work Rights & Visas",
    categoryBadgeBg: "bg-emerald-100",
    categoryBadgeText: "text-emerald-800",
    date: "August 28, 2026",
    readTime: "4 min read",
    featured: false,
    author: {
      name: "Dijon Career Advisory",
      role: "Student Welfare Services"
    },
    tags: ["Work Permit", "Part-Time Jobs", "Post-Study Visa", "Graduate Route"],
    keyTakeaways: [
      "Germany allows 140 full days or 280 half days of work per year for international students, with an 18-month job search visa after graduation.",
      "The UK Graduate Route provides 2 full years of unsponsored work rights upon completing a Master's or Bachelor's degree.",
      "Poland allows international full-time students to work without requiring a separate work permit.",
      "Portugal allows students to work up to 20 hours per week during term time and full-time during official vacation periods."
    ],
    content: [
      "One of the biggest questions Pakistani students ask is: 'Can I support myself through part-time work while studying in Europe, and what are my chances of staying back after graduation?'",
      "Most European nations offer robust work entitlements designed to help students gain valuable professional experience and offset living costs. In Germany, recent legislative updates increased permissible student work hours, while minimum wage rates offer solid earnings.",
      "After graduating, countries like Germany, the UK, Poland, and Portugal grant dedicated job-seeking residency permits, allowing graduates to transition seamlessly into European employment and EU Blue Card status.",
      "Dijon Consultants advises students on local labour regulations, tax numbers (e.g., NIF in Portugal, PESEL in Poland, Steuernummer in Germany), and CV formatting tailored for European employers."
    ]
  }
];
