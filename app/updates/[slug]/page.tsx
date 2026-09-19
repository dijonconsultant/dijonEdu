import Link from "next/link";
import { notFound } from "next/navigation";
import { updatesData, type UpdateArticle } from "@/data/updates";
import { CTAButton } from "@/components/cta-button";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return updatesData.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = updatesData.find((item) => item.slug === params.slug);
  if (!article) return { title: "Update Not Found" };

  return {
    title: `${article.title} | Dijon Consultants`,
    description: article.excerpt,
    keywords: article.tags,
  };
}

export default function UpdateDetailPage({ params }: PageProps) {
  const article = updatesData.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = updatesData
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container-page relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/updates" className="hover:text-white">Updates</Link>
            <span>/</span>
            <span className="text-gold truncate max-w-xs">{article.categoryLabel}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${article.categoryBadgeBg} ${article.categoryBadgeText}`}>
              {article.categoryLabel}
            </span>
            <span className="text-xs text-slate-300">📅 {article.date}</span>
            <span className="text-xs text-slate-300">⏱️ {article.readTime}</span>
          </div>

          <h1 className="mt-5 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
              DC
            </div>
            <div>
              <p className="font-semibold text-white">{article.author.name}</p>
              <p className="text-xs text-slate-400">{article.author.role}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F7F7F5" />
          </svg>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <section className="container-page max-w-4xl py-16">
        {/* Key Takeaways Box */}
        <div className="rounded-2xl border-l-4 border-gold bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
            <span>📌</span> Key Insights &amp; Important Takeaways
          </h2>
          <ul className="mt-4 space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
            {article.keyTakeaways.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-gold font-bold mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Text Body */}
        <div className="mt-10 space-y-6 text-base sm:text-lg leading-8 text-slate-700">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Related Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-navy to-[#262a33] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Personalized Guidance</span>
            <h3 className="font-serif text-2xl font-bold mt-1">Need help applying for this intake or visa?</h3>
            <p className="mt-2 text-sm text-slate-300 max-w-lg">
              Book a consultation with our experienced counselors for profile assessment, SOP review, and document checklists.
            </p>
          </div>
          <CTAButton href="/contact" variant="light" className="shrink-0 animate-pulse-glow">
            Apply For Guidance →
          </CTAButton>
        </div>

        {/* Related Updates */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 border-t border-slate-200 pt-12">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-navy">More Updates &amp; Guidance</h3>
              <Link href="/updates" className="text-sm font-semibold text-gold hover:underline">
                View all →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${rel.categoryBadgeBg} ${rel.categoryBadgeText}`}>
                    {rel.categoryLabel}
                  </span>
                  <h4 className="mt-3 font-serif text-lg font-bold text-navy">
                    <Link href={`/updates/${rel.slug}`} className="hover:text-gold transition-colors">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                  <Link
                    href={`/updates/${rel.slug}`}
                    className="mt-4 inline-block text-xs font-semibold text-gold"
                  >
                    Read article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
