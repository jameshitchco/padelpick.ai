# PadelPick

The UK's best padel racket finder — personalised recommendations based on level, court position, playing style, and sport background.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project structure

```
padelpick/
├── app/
│   ├── layout.js          # Root layout, Nav + Footer
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles + Tailwind
│   ├── quiz/
│   │   └── page.js        # 4-step quiz + results
│   ├── rackets/
│   │   ├── page.js        # Racket index with filters
│   │   └── [slug]/
│   │       └── page.js    # Individual racket review
│   └── guides/
│       └── page.js        # Buyer's guides index
├── components/
│   ├── Nav.js             # Sticky nav
│   ├── Footer.js          # Footer with links
│   └── RacketCard.js      # Reusable racket card
└── lib/
    └── rackets.js         # Racket database + scoring logic
```

## Adding rackets

Edit `lib/rackets.js` — add a new object to the `RACKETS` array following the existing format.

## Deploying to Vercel

1. Push to GitHub
2. Connect repo at vercel.com
3. Deploy — zero config needed with Next.js

## Affiliate setup

Replace `affiliateUrl` values in `lib/rackets.js` with your actual affiliate links from:
- Amazon Associates UK
- Padel Corner
- Total Padel

## Tech stack

- Next.js 14 (App Router)
- Tailwind CSS
- Vercel (hosting)
- No database needed at this stage — all data in `lib/rackets.js`
