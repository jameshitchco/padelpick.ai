import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-court-mid mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-2xl tracking-widest text-lime mb-2">
            Padel<span className="text-white">Pick</span>
          </div>
          <p className="text-sm text-white/40 leading-relaxed">
            The UK's best padel racket finder. Personalised recommendations for every player.
          </p>
        </div>

        <div>
          <div className="section-label mb-4">Rackets</div>
          <div className="flex flex-col gap-2">
            <Link href="/rackets" className="text-sm text-white/50 hover:text-white transition-colors">All rackets</Link>
            <Link href="/rackets?shape=diamond" className="text-sm text-white/50 hover:text-white transition-colors">Diamond shape</Link>
            <Link href="/rackets?shape=round" className="text-sm text-white/50 hover:text-white transition-colors">Round shape</Link>
            <Link href="/rackets?level=beginner" className="text-sm text-white/50 hover:text-white transition-colors">Beginner rackets</Link>
          </div>
        </div>

        <div>
          <div className="section-label mb-4">Guides</div>
          <div className="flex flex-col gap-2">
            <Link href="/guides/best-padel-rackets-beginners-uk" className="text-sm text-white/50 hover:text-white transition-colors">Best for beginners</Link>
            <Link href="/guides/best-padel-rackets-intermediate-uk" className="text-sm text-white/50 hover:text-white transition-colors">Best for intermediates</Link>
            <Link href="/guides/best-padel-rackets-left-side-uk" className="text-sm text-white/50 hover:text-white transition-colors">Best for left side</Link>
            <Link href="/guides/best-padel-rackets-tennis-players-uk" className="text-sm text-white/50 hover:text-white transition-colors">Best for tennis players</Link>
          </div>
        </div>

        <div>
          <div className="section-label mb-4">About</div>
          <div className="flex flex-col gap-2">
            <Link href="/quiz" className="text-sm text-white/50 hover:text-white transition-colors">Racket finder quiz</Link>
            <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About PadelPick</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} PadelPick. All rights reserved.</p>
          <p className="text-xs text-white/25">
            PadelPick uses affiliate links. We may earn a commission when you buy through our links — at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
