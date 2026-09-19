import Link from "next/link";
import { updatesData } from "@/data/updates";

export function LatestUpdatesPreview() {
  const featuredUpdates = updatesData.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-24 border-y border-slate-200/60">
      <div className="container-page relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Stay Informed
            </span>
            <h2 className="section-title mt-3">Latest Updates &amp; Insights</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Timely visa regulation changes, university application deadlines, and scholarship announcements for Pakistani students.
            </p>
          </div>
          <Link
            href="/updates"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-red-700 transition-colors"
          >
            Browse all updates &amp; guides
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUpdates.map((update, i) => (
            <article
              key={update.id}
              className="update-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${update.categoryBadgeBg} ${update.categoryBadgeText}`}
                  >
                    {update.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{update.readTime}</span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-navy group-hover:text-gold transition-colors">
                  <Link href={`/updates/${update.slug}`}>
                    {update.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {update.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {update.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{update.date}</span>
                <Link
                  href={`/updates/${update.slug}`}
                  className="font-semibold text-gold inline-flex items-center gap-1 group-hover:underline"
                >
                  Read Update →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
