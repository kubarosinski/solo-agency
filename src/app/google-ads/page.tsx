import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Google Ads — Solo Agency",
  description:
    "Tworzymy i prowadzimy kampanie Google Ads, które generują realne wyniki — nie tylko kliknięcia, ale zapytania i przychody.",
};

const advantages = [
  {
    num: "01",
    title: "Kampanie skrojone pod cel",
    body: "Nie uruchamiamy kampanii szablonowych. Każda struktura konta, dobór słów kluczowych i kreacja reklamowa są tworzone pod konkretny cel biznesowy i grupę docelową.",
  },
  {
    num: "02",
    title: "Optymalizacja, nie ustawienie i zapomnenie",
    body: "Kampania to żywy organizm. Regularnie analizujemy dane, testujemy warianty reklam, dostosowujemy stawki i eliminujemy słowa kluczowe, które kosztują bez efektu.",
  },
  {
    num: "03",
    title: "Pełna przejrzystość",
    body: "Masz dostęp do konta i widzisz każdą złotówkę budżetu. Regularne raporty pokazują co działa, co nie i co planujemy zmienić.",
  },
  {
    num: "04",
    title: "Wycena dopasowana do modelu współpracy",
    body: "Oferujemy dwa modele rozliczenia — stała opłata za konfigurację i prowadzenie kampanii albo prowizja od budżetu reklamowego. Dobieramy model do skali i preferencji klienta.",
  },
];

const services = [
  "Kampanie Search — reklamy w wynikach wyszukiwania",
  "Performance Max — zasięg w całej sieci Google",
  "Remarketing i kampanie Display",
  "Kampanie produktowe Google Shopping",
  "Testy A/B reklam i stron docelowych",
  "Audyt i optymalizacja istniejących kampanii",
];

const pricingModels = [
  {
    name: "Konfiguracja i utrzymanie",
    tag: "Stała opłata miesięczna",
    desc: "Płacisz ustaloną kwotę za konfigurację kampanii, bieżącą optymalizację i raportowanie. Model przejrzysty i przewidywalny — niezależny od wysokości budżetu reklamowego.",
  },
  {
    name: "Prowizja od budżetu",
    tag: "Procent wydatków na reklamy",
    desc: "Wynagrodzenie naliczane jako procent miesięcznych wydatków reklamowych. Naturalnie skaluje się razem z kampanią — im więcej inwestujesz, tym większy nasz udział w sukcesie.",
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── jasny */}
        <section
          className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
            style={{ color: "var(--muted)" }}
          >
            Kompetencje — Google Ads
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
            Google<br />Ads
          </h1>
        </section>

        {/* ── Intro ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-12">
            <p
              className="font-medium leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#F4EFE6" }}
            >
              Płatne kampanie w Google to najszybsza droga do klientów, którzy
              aktywnie szukają Twojej oferty. Tworzymy i prowadzimy kampanie, które
              generują realne wyniki — nie tylko kliknięcia, ale zapytania i przychody.
            </p>
          </div>
        </section>

        {/* ── Co robimy ── jasny */}
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

        {/* ── Jak pracujemy ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-16"
            style={{ color: "rgba(244,239,230,0.45)" }}
          >
            Jak to robimy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {advantages.map((adv) => (
              <div key={adv.num} className="flex flex-col gap-5">
                <span
                  className="font-semibold tabular-nums"
                  style={{ fontSize: "0.7rem", color: "rgba(244,239,230,0.45)", letterSpacing: "0.1em" }}
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
                  style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(244,239,230,0.6)" }}
                >
                  {adv.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Modele rozliczenia ── jasny */}
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
                Dwa modele rozliczenia
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}
              >
                Nie ma jednego słusznego modelu. Dobieramy go do skali budżetu,
                specyfiki projektu i preferencji klienta.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
              {pricingModels.map((model) => (
                <div
                  key={model.name}
                  className="flex flex-col gap-4 p-8 md:p-12"
                  style={{ background: "var(--background)" }}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-semibold"
                      style={{
                        fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                        color: "var(--foreground)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {model.name}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.18em] uppercase font-medium"
                      style={{ color: "var(--muted)" }}
                    >
                      {model.tag}
                    </span>
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}
                  >
                    {model.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── zielony */}
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
            Porozmawiajmy<br />o Twojej kampanii
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
        <a
          href="/"
          className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link"
        >
          Strona główna
        </a>
      </footer>
    </>
  );
}


