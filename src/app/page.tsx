import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Statement from "./components/Statement";
import Process from "./components/Process";
import CaseTeasers from "./components/CaseTeasers";
import Services from "./components/Services";

const title = "Agencja SEO Poznań — Solo Agency";
const description =
  "Agencja SEO i marketingu z Poznania. Butikowa agencja kreatywna, która tworzy odważne doświadczenia cyfrowe dla ambitnych marek.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Solo Agency",
    locale: "pl_PL",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Stats />
        <Statement />
        <Process />
        <CaseTeasers />
        <Services />

        {/* CTA */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{ background: "#355E58" }}
        >
          <p
            className="font-semibold leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              color: "#F4EFE6",
              letterSpacing: "-0.025em",
              maxWidth: "60%",
            }}
          >
            Porozmawiajmy<br />o Twoim projekcie
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase"
            style={{ color: "#D8C7B2" }}
          >
            Napisz do nas
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>
      </main>

      {/* Minimal footer */}
      <footer
        className="w-full flex items-center justify-between px-6 md:px-14 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          © 2026 Solo Agency
        </span>
        <span
          className="text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          Wszelkie prawa zastrzeżone
        </span>
      </footer>
    </>
  );
}
