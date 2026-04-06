import Link from "next/link";
import { RACKETS } from "@/lib/rackets";
import RacketCard from "@/components/RacketCard";

export const metadata = {
  title: "PadelPick — Find Your Perfect Padel Racket | UK Racket Finder",
  description:
    "Answer 4 quick questions and get personalised padel racket recommendations based on your level, position, playing style and sport background. Built for UK players.",
};

const GUIDES = [
  {
    slug: "best-padel-rackets-beginners-uk",
    title: "Best padel rackets for beginners UK 2026",
    excerpt: "Just starting out? We cut through the noise and tell you exactly what to buy — and what to avoid.",
    tag: "Beginner",
  },
  {
    slug: "best-padel-rackets-intermediate-uk",
    title: "Best padel rackets for intermediate players UK 2026",
    excerpt: "The biggest buying decision in padel. Our guide for players ready to step up their game.",
    tag: "Intermediate",
  },
  {
    slug: "best-padel-rackets-tennis-players-uk",
    title: "Best padel rackets for tennis players switching to padel",
    excerpt: "Your tennis instincts are an asset. Here's how to pick a racket that plays to your strengths.",
    tag: "Tennis converts",
  },
];

const STATS = [
  { value: "8+", label: "Reviewed rackets" },
  { value: "4", label: "Quiz dimensions" },
  { value: "UK", label: "Focused & GBP priced" },
  { value: "Free", label: "Always free to use" },
];

export default function HomePage() {
  const featured = RACKETS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,245,66,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <p className="section-label text-lime mb-4">UK padel racket finder</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide leading-[1.05] mb-6">
              Find the racket<br />
              <span className="text-lime">built for your game</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
              Answer 4 quick questions — your level, court position, playing style, and sport background — and get personalised racket picks from experts who actually play.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quiz" className="btn-primary text-base px-8 py-3 text-center">
                Find my racket →
              </Link>
              <Link href="/rackets" className="btn-secondary text-base px-8 py-3 text-center">
                Browse all rackets
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="font-display text-3xl text-lime tracking-wide">{value}</div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/[0.06] bg-court-mid/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <p className="section-label text-center mb-10">How it works</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Answer 4 questions", body: "Your level, position on court, racket sport background, and preferred playing style." },
              { step: "02", title: "Get matched", body: "Our scoring engine matches you against our full racket database across every dimension." },
              { step: "03", title: "Buy with confidence", body: "Each recommendation comes with a full explanation of why it suits your game — and a link to buy it in the UK." },
            ].map(({ step, title, body }) => (
              <div key={step} className="card">
                <div className="font-display text-4xl text-lime/30 tracking-widest mb-3">{step}</div>
                <h3 className="font-medium text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/quiz" className="btn-primary">Take the quiz — it takes 60 seconds →</Link>
          </div>
        </div>
      </section>

      {/* Featured rackets */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-label mb-1">Top rated</p>
            <h2 className="font-display text-3xl tracking-wide">Featured rackets</h2>
          </div>
          <Link href="/rackets" className="btn-secondary text-sm hidden sm:block">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((r) => (
            <RacketCard key={r.id} racket={r} />
          ))}
        </div>
        <div className="text-center mt-6 sm:hidden">
          <Link href="/rackets" className="btn-secondary">View all rackets →</Link>
        </div>
      </section>

      {/* Guides */}
      <section className="border-t border-white/[0.06] bg-court-mid/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-label mb-1">Buyer's guides</p>
              <h2 className="font-display text-3xl tracking-wide">Expert picks for every player</h2>
            </div>
            <Link href="/guides" className="btn-secondary text-sm hidden sm:block">All guides →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card card-hover flex flex-col gap-3 group">
                <span className="tag tag-lime w-fit">{g.tag}</span>
                <h3 className="font-medium text-white leading-snug group-hover:text-lime transition-colors">{g.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{g.excerpt}</p>
                <span className="text-xs text-lime font-medium">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-lime/[0.06] border border-lime/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/55 text-lg mb-8 max-w-lg mx-auto">
            The quiz takes 60 seconds and gives you three personalised racket picks — explained in plain English, priced in pounds.
          </p>
          <Link href="/quiz" className="btn-primary text-base px-10 py-3">
            Find my racket →
          </Link>
        </div>
      </section>
    </>
  );
}
