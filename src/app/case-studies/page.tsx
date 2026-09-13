import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Case Studies — Solo Agency",
  description: "Projekty, które zrealizowaliśmy — strategie, wyniki i wnioski.",
};

const cases = [
  {
    number: "01",
    client: "Klient A",
    category: "SEO / Content",
    result: "+320% ruchu organicznego w 6 miesięcy",
    description:
      "Kompleksowa strategia SEO dla e-commerce z branży beauty — audyt techniczny, przebudowa architektury treści i kampania link buildingowa.",
  },
  {
    number: "02",
    client: "Klient B",
    category: "Google Ads",
    result: "ROAS 8.4× przy budżecie 30 000 zł/mies.",
    description:
      "Optymalizacja kampanii Performance Max i Search dla sklepu z elektroniką — testy kreacji, segmentacja odbiorców i zarządzanie stawkami.",
  },
  {
    number: "03",
    client: "Klient C",
    category: "Web Development / SEO",
    result: "Czas ładowania skrócony o 67%, konwersja +41%",
    description:
      "Przeprojektowanie i wdrożenie nowej strony dla firmy B2B — nacisk na Core Web Vitals, UX i integrację z CRM.",
  },
  {
    number: "04",
    client: "Klient D",
    category: "Social Media / Content",
    result: "+18 000 obserwujących w 4 miesiące",
    description:
      "Strategia komunikacji i produkcja treści dla marki lifestyle — Instagram, LinkedIn i kampanie Meta Ads.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        {/* Hero */}
        <section
          className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
            style={{ color: "var(--muted)" }}
          >
            Nasze realizacje
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            Case Studies
          </h1>
        </section>

        {/* Lista */}
        <section className="w-full py-24 md:py-32 px-6 md:px-14">
          <div style={{ height: "1px", background: "var(--border)" }} />
          <ol className="list-none m-0 p-0">
            {cases.map((c) => (
              <li key={c.number}>
                <div
                  className="grid py-10 md:py-14 gap-6 md:gap-10"
                  style={{ gridTemplateColumns: "4rem 1fr 1fr" }}
                >
                  <span
                    className="font-semibold tabular-nums"
                    style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em", paddingTop: "0.2em" }}
                  >
                    {c.number}
                  </span>
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "var(--muted)" }}>
                      {c.category}
                    </p>
                    <span
                      className="font-semibold leading-tight"
                      style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
                    >
                      {c.client}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#355E58" }}>
                      {c.result}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed self-end text-right ml-auto max-w-sm" style={{ color: "var(--muted)" }}>
                    {c.description}
                  </p>
                </div>
                <div style={{ height: "1px", background: "var(--border)" }} />
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{ background: "#355E58" }}
        >
          <p
            className="font-semibold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)", color: "#F4EFE6", letterSpacing: "-0.025em", maxWidth: "60%" }}
          >
            Twój projekt może być następny.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase"
            style={{ color: "#D8C7B2" }}
          >
            Skontaktuj się
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>
      </main>

      <footer
        className="w-full flex items-center justify-between px-6 md:px-14 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: "var(--muted)" }}>
          © 2026 Solo Agency
        </span>
        <a href="/" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
          Strona główna
        </a>
      </footer>
    </>
  );
}
