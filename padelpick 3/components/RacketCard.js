import Link from "next/link";

const SHAPE_LABELS = { round: "Round", teardrop: "Teardrop", diamond: "Diamond" };
const BALANCE_LABELS = { low: "Low balance", mid: "Mid balance", "mid-high": "Mid-high balance", high: "High balance" };

export default function RacketCard({ racket, rank }) {
  const tagColour = (tag) => {
    if (["power", "pro-power", "elite", "attack"].includes(tag)) return "tag-amber";
    if (["control", "touch", "feel"].includes(tag)) return "tag-blue";
    return "tag-lime";
  };

  return (
    <Link href={`/rackets/${racket.slug}`} className="block">
      <div className={`card card-hover h-full flex flex-col ${rank === 0 ? "border-lime/40 bg-lime/[0.06]" : ""}`}>
        {rank !== undefined && (
          <div className="flex items-center justify-between mb-3">
            <span className="section-label text-lime">
              {rank === 0 ? "Top pick" : rank === 1 ? "2nd pick" : "3rd pick"}
            </span>
            {rank === 0 && (
              <span className="tag tag-lime">Best match</span>
            )}
          </div>
        )}

        <div className="flex justify-between items-start mb-3 gap-3">
          <div>
            <p className="section-label text-white/30 mb-1">{racket.brand}</p>
            <h3 className="font-display text-2xl tracking-wide leading-tight">{racket.name}</h3>
            <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">
              {SHAPE_LABELS[racket.shape]} · {BALANCE_LABELS[racket.balance] || racket.balance}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-display text-2xl text-lime tracking-wide">£{racket.price}</div>
            <div className="text-xs text-white/30 mt-0.5">approx.</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {racket.tags.slice(0, 3).map((t) => (
            <span key={t} className={`tag ${tagColour(t)}`}>{t.replace(/-/g, " ")}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-4">
          {[
            { label: "Power", val: racket.stats.power, colour: "#F5A623" },
            { label: "Control", val: racket.stats.control, colour: "#C8F542" },
            { label: "Manoeuvrability", val: racket.stats.maneuverability, colour: "#7BBFFF" },
            { label: "Sweet spot", val: racket.stats.sweetSpot, colour: "#C8F542" },
          ].map(({ label, val, colour }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] text-white/40 mb-1 uppercase tracking-wide">
                <span>{label}</span><span>{val}</span>
              </div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${val}%`, background: colour }} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/55 leading-relaxed flex-1">{racket.shortReview}</p>

        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <span className="text-xs text-lime font-medium">View full review →</span>
        </div>
      </div>
    </Link>
  );
}
