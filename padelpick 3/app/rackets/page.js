import { RACKETS, BRANDS, SHAPES } from "@/lib/rackets";
import RacketCard from "@/components/RacketCard";
import Link from "next/link";

export const metadata = {
  title: "Padel Racket Reviews UK 2026 — All Rackets",
  description: "Browse all padel rackets reviewed by PadelPick. Filter by shape, level, brand, and price. GBP pricing and UK affiliate links.",
};

export default function RacketsPage({ searchParams }) {
  const { shape, level, brand } = searchParams || {};

  const filtered = RACKETS.filter((r) => {
    if (shape && r.shape !== shape) return false;
    if (level && !r.level.includes(level)) return false;
    if (brand && r.brand !== brand) return false;
    return true;
  });

  const filters = [
    { label: "Shape", param: "shape", options: SHAPES },
    { label: "Level", param: "level", options: ["beginner", "intermediate", "advanced"] },
    { label: "Brand", param: "brand", options: BRANDS },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="section-label text-lime mb-2">Database</p>
        <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3">All rackets</h1>
        <p className="text-white/50 text-sm">
          {filtered.length} racket{filtered.length !== 1 ? "s" : ""} — GBP priced, UK affiliate links.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
        {filters.map(({ label, param, options }) => (
          <div key={param}>
            <p className="section-label mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={{ pathname: "/rackets", query: { ...(shape && { shape }), ...(level && { level }), ...(brand && { brand }), [param]: undefined } }}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  !searchParams?.[param]
                    ? "bg-lime/10 border-lime/40 text-lime"
                    : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/70"
                }`}
              >
                All
              </Link>
              {options.map((opt) => (
                <Link
                  key={opt}
                  href={{ pathname: "/rackets", query: { ...(shape && { shape }), ...(level && { level }), ...(brand && { brand }), [param]: opt } }}
                  className={`text-xs px-3 py-1 rounded-full border capitalize transition-colors ${
                    searchParams?.[param] === opt
                      ? "bg-lime/10 border-lime/40 text-lime"
                      : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  {opt}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-white/40 mb-4">No rackets match those filters.</p>
          <Link href="/rackets" className="btn-secondary text-sm">Clear filters</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r) => <RacketCard key={r.id} racket={r} />)}
        </div>
      )}

      {/* Quiz CTA */}
      <div className="mt-16 text-center p-8 bg-lime/[0.05] border border-lime/20 rounded-2xl">
        <h2 className="font-display text-3xl tracking-wide mb-3">Not sure which one?</h2>
        <p className="text-white/50 text-sm mb-6">Take the 60-second quiz and get personalised picks for your game.</p>
        <Link href="/quiz" className="btn-primary">Find my racket →</Link>
      </div>
    </div>
  );
}
