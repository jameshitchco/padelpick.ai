import Link from "next/link";

export const metadata = {
  title: "Padel Racket Buyer's Guides UK 2026",
  description: "Expert padel racket buyer's guides for UK players — beginners, intermediates, left-side players, tennis converts and more.",
};

const GUIDES = [
  {
    slug: "best-padel-rackets-beginners-uk",
    title: "Best padel rackets for beginners UK 2026",
    excerpt: "Just starting out? We cut through the noise and tell you exactly what to buy — and what to avoid spending money on as a beginner.",
    tag: "Beginner",
    readTime: "6 min read",
  },
  {
    slug: "best-padel-rackets-intermediate-uk",
    title: "Best padel rackets for intermediate players UK 2026",
    excerpt: "The biggest buying decision in padel. Our in-depth guide for players who've got the basics down and are ready to step up.",
    tag: "Intermediate",
    readTime: "8 min read",
  },
  {
    slug: "best-padel-rackets-left-side-uk",
    title: "Best padel rackets for left-side players UK 2026",
    excerpt: "Playing the left side changes everything about what you need from a racket. Diamond shapes, high balance, and why sweet spot size matters less than you think.",
    tag: "Left side",
    readTime: "7 min read",
  },
  {
    slug: "best-padel-rackets-tennis-players-uk",
    title: "Best padel rackets for tennis players switching to padel",
    excerpt: "Your tennis instincts are an asset on the padel court. Here's how to pick a racket that plays to your existing strengths.",
    tag: "Tennis converts",
    readTime: "6 min read",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <p className="section-label text-lime mb-2">Buyer's guides</p>
      <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3">Expert picks for every player</h1>
      <p className="text-white/50 text-sm mb-10 max-w-xl">
        Each guide is written by players who've actually used the rackets. We tell you exactly who each racket is for — and who should avoid it.
      </p>

      <div className="flex flex-col gap-4">
        {GUIDES.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="card card-hover flex flex-col sm:flex-row gap-4 group">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag tag-lime">{g.tag}</span>
                <span className="text-xs text-white/30">{g.readTime}</span>
              </div>
              <h2 className="font-medium text-white text-base leading-snug mb-2 group-hover:text-lime transition-colors">{g.title}</h2>
              <p className="text-sm text-white/50 leading-relaxed">{g.excerpt}</p>
            </div>
            <div className="flex items-center text-lime text-sm font-medium whitespace-nowrap">
              Read guide →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center p-8 bg-lime/[0.05] border border-lime/20 rounded-2xl">
        <h2 className="font-display text-3xl tracking-wide mb-3">Want a personal recommendation?</h2>
        <p className="text-white/50 text-sm mb-6">Skip the reading — take the 60-second quiz and get picks tailored to your game.</p>
        <Link href="/quiz" className="btn-primary">Find my racket →</Link>
      </div>
    </div>
  );
}
