import type { Metadata } from "next";
import Header from "./components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Nie znaleziono strony | Solo Agency",
  description: "Ta strona nie istnieje. Wróć na stronę główną.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <section
          className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
            style={{ color: "var(--muted)" }}
          >
            Błąd 404
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            Nie ma tu nic.
          </h1>
          <p
            className="mt-10 font-medium leading-relaxed max-w-lg"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "var(--muted)" }}
          >
            Strona, której szukasz, nie istnieje lub została przeniesiona.
            Wróć na stronę główną i zacznij od nowa.
          </p>
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase nav-link"
            >
              Wróć na stronę główną
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <footer
        className="w-full flex items-center justify-between px-6 md:px-14 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: "var(--muted)" }}>
          © 2026 Solo Agency
        </span>
        <Link href="/" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
          Strona główna
        </Link>
      </footer>
    </>
  );
}
