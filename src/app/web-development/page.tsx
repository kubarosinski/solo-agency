import type { Metadata } from "next";
import Header from "../components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development — Solo Agency",
  description:
    "Tworzymy strony usługowe i landing page pisane od zera — spersonalizowane pod markę, zoptymalizowane pod SEO i zaprojektowane tak, żeby konwertować.",
};

const advantages = [
  {
    num: "01",
    title: "Pełna personalizacja",
    body: "Zero gotowych szablonów. Każda strona powstaje od zera — dostosowana do marki, grupy docelowej i celu biznesowego. Wygląd, struktura i treść są projektowane specjalnie dla Ciebie.",
  },
  {
    num: "02",
    title: "Technologia dobrana do projektu",
    body: "Pracujemy w Next.js, Astro i czystym React — w zależności od tego, czego projekt naprawdę potrzebuje. Dla prostszych serwisów usługowych sięgamy po WordPress. Dobieramy narzędzia świadomie, nie z przyzwyczajenia.",
  },
  {
    num: "03",
    title: "Silna pozycja w Google",
    body: "Każda strona wychodzi od nas gotowa pod SEO — semantyczna struktura HTML, zoptymalizowane meta tagi, schema markup, szybkość ładowania i poprawna architektura treści. Nie trzeba tego dokładać po fakcie.",
  },
  {
    num: "04",
    title: "Wycena pod skalę i potrzeby",
    body: "Nie mamy jednego cennika. Koszt projektu zależy od zakresu, złożoności i celów — dlatego każdą wycenę przygotowujemy indywidualnie. Płacisz za to, czego faktycznie potrzebujesz.",
  },
];

const techStack = [
  {
    name: "Next.js",
    tag: "Wymagające projekty",
    desc: "SSR, SSG, ISR — pełna kontrola nad renderowaniem, natywne SEO i najwyższe wyniki Core Web Vitals.",
  },
  {
    name: "Astro",
    tag: "Statyczne i błyskawiczne",
    desc: "Minimalna ilość JavaScriptu w przeglądarce. Idealne dla stron, gdzie priorytetem jest prędkość i pozycja w Google.",
  },
  {
    name: "React",
    tag: "Interaktywne interfejsy",
    desc: "Gdy strona wymaga rozbudowanych komponentów i dynamicznych interakcji bez pełnego frameworka.",
  },
  {
    name: "WordPress",
    tag: "Prostsze projekty",
    desc: "Sprawdzony, łatwy w zarządzaniu. Dla projektów, gdzie klient chce samodzielnie edytować treści.",
  },
];

const pricingFactors = [
  "Zakres i liczba podstron",
  "Wybór technologii",
  "Poziom personalizacji designu",
  "Integracje i funkcjonalności",
  "Terminy realizacji",
];

const services = [
  "Strony usługowe",
  "Landing page i strony kampanii",
  "Strony wizytówkowe dla marek osobistych",
  "Redesign i migracja istniejących serwisów",
  "Utrzymanie, aktualizacje i wprowadzanie zmian",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── */}
        <section
          className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
            style={{ color: "var(--muted)" }}
          >
            Kompetencje — Web Development
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
              maxWidth: "85%",
            }}
          >
            Web<br />Development
          </h1>
        </section>

        {/* ── Intro ── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-12">
            <p
              className="font-medium leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#F4EFE6" }}
            >
              Projektujemy i budujemy strony usługowe oraz landing page — te dwa
              formaty, które najskuteczniej zamieniają ruch w zapytania i klientów.
              Każda realizacja powstaje od podstaw, pisana ręcznie pod konkretną
              markę, a nie składana z gotowych bloków.
            </p>
          </div>
        </section>

        {/* ── Co robimy ── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-12"
            style={{ color: "var(--muted)" }}
          >
            Co realizujemy
          </p>
          <div style={{ height: "1px", background: "var(--border)" }} />
          {services.map((item, i) => (
            <div key={i}>
              <div
                className="grid items-center py-6 md:py-8 gap-6"
                style={{ gridTemplateColumns: "4rem 1fr" }}
              >
                <span
                  className="font-semibold tabular-nums"
                  style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
                    color: "var(--foreground)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {item}
                </span>
              </div>
              <div style={{ height: "1px", background: "var(--border)" }} />
            </div>
          ))}
        </section>

        {/* ── Jak pracujemy ── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-16"
            style={{ color: "rgba(244, 239, 230, 0.78)" }}
          >
            Jak to robimy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {advantages.map((adv) => (
              <div key={adv.num} className="flex flex-col gap-5">
                <span
                  className="font-semibold tabular-nums"
                  style={{ fontSize: "0.7rem", color: "rgba(244, 239, 230, 0.78)", letterSpacing: "0.1em" }}
                >
                  {adv.num}
                </span>
                <h2
                  className="font-semibold leading-tight"
                  style={{
                    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                    color: "#F4EFE6",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {adv.title}
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(244, 239, 230, 0.78)" }}
                >
                  {adv.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technologia / przykład ── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 md:max-w-[60%]">
              <p
                className="text-[10px] tracking-[0.24em] uppercase font-medium"
                style={{ color: "var(--muted)" }}
              >
                Technologia
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                Narzędzia dobrane do projektu
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}
              >
                Nie mamy jednego ulubionego frameworka. Dobieramy technologię pod
                konkretny projekt — jego cel, skalę i potrzeby klienta.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col gap-4 p-8"
                  style={{ background: "var(--background)" }}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-semibold"
                      style={{
                        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                        color: "var(--foreground)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {tech.name}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.18em] uppercase font-medium"
                      style={{ color: "var(--muted)" }}
                    >
                      {tech.tag}
                    </span>
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.85rem", color: "var(--muted)" }}
                  >
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wycena ── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-16 items-start">
            <div className="flex flex-col gap-6">
              <p
                className="text-[10px] tracking-[0.24em] uppercase font-medium"
                style={{ color: "var(--muted)" }}
              >
                Wycena
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                Indywidualna,<br />pod skalę projektu
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}
              >
                Nie stosujemy sztywnych pakietów. Cena projektu zależy od zakresu
                — liczby podstron, stopnia personalizacji, wyboru technologii i potrzeb
                danej marki. Wycenę przygotowujemy po krótkim briefingu, żeby trafiała
                dokładnie w to, czego potrzebujesz.
              </p>
            </div>
            <div
              className="flex flex-col gap-3 rounded-sm p-8"
              style={{ border: "1px solid var(--border)" }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase font-medium mb-2"
                style={{ color: "var(--muted)" }}
              >
                Na wycenę wpływa m.in.
              </p>
              {pricingFactors.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
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
            Porozmawiajmy<br />o Twojej stronie
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase"
            style={{ color: "#D8C7B2" }}
          >
            Napisz do nas
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

      </main>

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
        <Link
          href="/"
          className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link"
        >
          Strona główna
        </Link>
      </footer>
    </>
  );
}


