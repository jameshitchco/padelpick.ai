"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-white/[0.08] bg-court-mid/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-display text-2xl tracking-widest text-lime hover:opacity-90 transition-opacity">
          Padel<span className="text-white">Pick</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/rackets" className="text-sm text-white/60 hover:text-white transition-colors">Rackets</Link>
          <Link href="/guides" className="text-sm text-white/60 hover:text-white transition-colors">Guides</Link>
          <Link href="/quiz" className="btn-primary text-sm">Find my racket →</Link>
        </div>

        <button
          className="md:hidden text-white/60 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open
              ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-court-mid px-4 py-4 flex flex-col gap-4">
          <Link href="/rackets" className="text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Rackets</Link>
          <Link href="/guides" className="text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Guides</Link>
          <Link href="/quiz" className="btn-primary text-sm text-center" onClick={() => setOpen(false)}>Find my racket →</Link>
        </div>
      )}
    </nav>
  );
}
