import { RACKETS, getRacketBySlug } from "@/lib/rackets";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return RACKETS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const racket = getRacketBySlug(params.slug);
  if (!racket) return {};
  return {
    title: `${racket.brand} ${racket.name} Review UK — ${racket.year}`,
    description: racket.shortReview,
  };
}

const SHAPE_LABELS = { round: "Round", teardrop: "Teardrop", diamond: "Diamond" };
const BALANCE_LABELS = { low: "Low balance", mid: "Mid balance", "mid-high": "Mid-high balance", high: "High balance" };
const LEVEL_LABELS = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

export default function RacketPage({ params }) {
  const racket = getRacketBySlug(params.slug);
  if (!racket) notFound();

  const stats = [
    { label: "Power", val: racket.stats.power, colour: "#F5A623" },
    { label: "Control", val: racket.stats.control, colour: "#C8F542" },
    { label: "Manoeuvrability", val: racket.stats.maneuverability, colour: "#7BBFFF" },
    { label: "Sweet spot", val: racket.stats.sweetSpot, colour: "#C8F542" },
    { label: "Rebound", val: racket.stats.rebound, colour: "#F5A623" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
        <Link href="/rackets" className="hover:text-white transition-colors">Rackets</Link>
        <span>/</span>
        <span className="text-white/50">{racket.brand} {racket.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Main info */}
        <div className="md:col-span-2">
          <p className="section-label text-lime mb-2">{racket.brand} · {racket.year}</p>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide leading-tight mb-4">{racket.name}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {racket.tags.map((t) => (
              <span key={t} className="tag tag-lime">{t.replace(/-/g, " ")}</span>
            ))}
          </div>

          <p className="text-white/65 leading-relaxed mb-6">{racket.shortReview}</p>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            {[
              { label: "Shape", value: SHAPE_LABELS[racket.shape] },
              { label: "Balance", value: BALANCE_LABELS[racket.balance] || racket.balance },
              { label: "Surface", value: racket.surface },
              { label: "Core", value: racket.core },
              { label: "Weight", value: racket.weight },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between p-3 bg-white/[0.03] rounded-lg">
                <span className="text-white/40">{label}</span>
                <span className="text-white font-medium capitalize">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Price & buy */}
          <div className="card text-center">
            <div className="font-display text-5xl text-lime tracking-wide mb-1">£{racket.price}</div>
            <div className="text-xs text-white/30 mb-5">approximate UK price</div>
            <a
              href={racket.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-primary w-full block text-center text-sm"
            >
              {racket.buyText} →
            </a>
            <p className="text-[10px] text-white/20 mt-3 leading-relaxed">
              Affiliate link — we may earn a small commission at no extra cost to you.
            </p>
          </div>

          {/* Best for */}
          <div className="card">
            <p className="section-label mb-3">Best for</p>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-xs text-white/40 mb-1">Level</p>
                <div className="flex flex-wrap gap-1">
                  {racket.level.map((l) => (
                    <span key={l} className="tag tag-lime">{LEVEL_LABELS[l]}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-1 mt-2">Position</p>
                <div className="flex flex-wrap gap-1">
                  {racket.position.map((p) => (
                    <span key={p} className="tag tag-blue capitalize">{p === "both" ? "Both sides" : `${p} side`}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="card mb-8">
        <p className="section-label mb-5">Performance stats</p>
        <div className="flex flex-col gap-4">
          {stats.map(({ label, val, colour }) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">{label}</span>
                <span className="font-medium">{val} / 100</span>
              </div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${val}%`, background: colour }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        <div className="card">
          <p className="section-label text-lime mb-4">Pros</p>
          <ul className="flex flex-col gap-2">
            {racket.pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                <span className="text-lime mt-0.5">+</span> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <p className="section-label text-white/40 mb-4">Cons</p>
          <ul className="flex flex-col gap-2">
            {racket.cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-white/70">
                <span className="text-white/30 mt-0.5">−</span> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back & quiz CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-white/[0.03] border border-white/[0.07] rounded-xl">
        <div>
          <p className="font-medium text-white mb-1">Want personalised recommendations?</p>
          <p className="text-sm text-white/40">Take the 60-second quiz and see if this racket is the right match for your game.</p>
        </div>
        <Link href="/quiz" className="btn-primary text-sm whitespace-nowrap">Take the quiz →</Link>
      </div>
    </div>
  );
}
