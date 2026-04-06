import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "PadelPick — Find Your Perfect Racket | UK Padel Racket Finder",
    template: "%s | PadelPick",
  },
  description:
    "The UK's best padel racket finder. Answer 4 quick questions and get personalised racket recommendations based on your level, court position, playing style and sport background.",
  keywords: ["padel racket", "padel racket finder", "best padel racket UK", "padel racket recommendation"],
  openGraph: {
    title: "PadelPick — Find Your Perfect Racket",
    description: "Personalised padel racket recommendations for UK players.",
    url: "https://padelpick.co.uk",
    siteName: "PadelPick",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
