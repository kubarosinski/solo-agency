import type { Metadata } from "next";
import Header from "../components/Header";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const title = "Social Media — Solo Agency";
const description =
  "Strategia, treści i prowadzenie kanałów, które budują markę i przekładają się na realne wyniki biznesowe.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.soloagency.pl/social-media",
    siteName: "Solo Agency",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const services = [
  {
    num: "01",
    title: "Strategia i planowanie komunikacji",
    lead: "Najpierw plan. Potem posty.",
    body: "Bez strategii social media to losowe treści wrzucane w przypadkowych momentach. Zaczynamy od analizy marki, grupy docelowej i konkurencji. Ustalamy, na jakich platformach warto być, z jaką częstotliwością, jakim tonem i z jakim celem. Każdy kanał dostaje swoją rolę — inaczej działa Instagram, inaczej LinkedIn, inaczej TikTok.\n\nStrategia określa filary tematyczne, formaty treści i lejek komunikacyjny od pierwszego kontaktu z marką po decyzję zakupową. Nie piszemy strategii do szuflady. To dokument roboczy, który ewoluuje razem z wynikami.",
  },
  {
    num: "02",
    title: "Tworzenie i publikacja treści",
    lead: "Treści, które zatrzymują przewijanie.",
    body: "Piszemy, projektujemy i montujemy. Teksty postów, opisy, stories, reelsy, karuzele, grafiki i krótkie wideo — wszystko w jednym miejscu. Każda treść jest dostosowana do platformy i do etapu, na którym jest odbiorca. Inaczej piszemy do kogoś, kto pierwszy raz widzi markę, inaczej do lojalnego obserwatora.\n\nNie produkujemy treści hurtowo. Wolimy mniej, ale lepiej — z wyraźnym głosem marki, konkretnym przekazem i powodem, żeby się zatrzymać. Kalendarz publikacji planujemy z wyprzedzeniem, z przestrzenią na bieżące reakcje na to, co dzieje się w branży.",
  },
  {
    num: "03",
    title: "Prowadzenie profili i obsługa społeczności",
    lead: "Social media to rozmowa, nie tablica ogłoszeń.",
    body: "Odpowiadamy na komentarze i wiadomości, moderujemy dyskusje i dbamy o to, żeby każdy kontakt z marką zostawiał dobre wrażenie. Społeczność buduje się latami przez konsekwentną, ludzką komunikację — nie przez ignorowanie pytań i kasowanie krytycznych komentarzy.\n\nObsługujemy profile na Instagramie, LinkedIn, Facebooku i TikToku. Ustalamy z klientem poziom zaangażowania — od pełnego outsourcingu po wsparcie wewnętrznego zespołu. W każdym przypadku marka mówi jednym głosem, niezależnie od tego, kto akurat pisze.",
  },
  {
    num: "04",
    title: "Kampanie reklamowe Meta Ads",
    lead: "Zasięg organiczny to za mało. Reklama go zwielokrotnia.",
    body: "Dobre treści organiczne i płatna dystrybucja to para, która działa razem. Tworzymy i prowadzimy kampanie na Facebooku i Instagramie — od kampanii zasięgowych budujących świadomość marki, przez retargeting, po kampanie lead generation i sprzedażowe. Dobieramy formaty, targetowanie i budżety do konkretnego celu.\n\nOptymalizujemy na bieżąco. Testujemy grupy odbiorców, kreacje i komunikaty. Nie zostawiamy kampanii na autopilocie. Każda złotówka budżetu reklamowego ma dawać efekt, który da się zmierzyć.",
  },
  {
    num: "05",
    title: "Analiza wyników i raportowanie",
    lead: "Mierzymy to, co ma znaczenie dla biznesu.",
    body: "Zasięg i polubienia to nie wyniki. Wyniki to zapytania, kliknięcia w link, zapisy na listę i sprzedaż. Śledzimy metryki, które faktycznie coś mówią o skuteczności działań — zaangażowanie, ruch na stronie z social media, konwersje i koszt pozyskania kontaktu.\n\nRaport miesięczny jest krótki i napisany ludzkim językiem. Mówi, co działało, co nie i co zmieniamy w kolejnym miesiącu. Bez dziesiątek wykresów, które wyglądają imponująco, ale nic nie wnoszą.",
  },
  {
    num: "06",
    title: "Współpraca z twórcami i influencerami",
    lead: "Rekomendacja od człowieka waży więcej niż reklama od marki.",
    body: "Pomagamy dobierać twórców, którzy pasują do marki wartościami i odbiorcami, a nie tylko rozmiarem zasięgu. Mikro-influencer z zaangażowaną niszową społecznością często daje lepszy efekt niż konto z milionem followersów i zerowym zaufaniem.\n\nKoordynujemy współpracę od briefu po rozliczenie: ustalamy zasady, weryfikujemy materiały, pilnujemy terminów i mierzymy efekty. Dbamy o to, żeby treść partnerska była naturalnym przedłużeniem komunikacji marki, a nie widocznym z daleka sponsorowanym postem.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing",
  description,
  url: "https://www.soloagency.pl/social-media",
  provider: { "@id": "https://www.soloagency.pl/#organization" },
  areaServed: "PL",
  serviceType: "Social Media Marketing",
  inLanguage: "pl",
};

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd data={schemaService} />
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
            Kompetencje — Social Media
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
            Social<br />Media
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
              Media społecznościowe to nie tylko posty. To ekosystem budowania
              relacji z klientami, wzmacniania marki i docierania do ludzi tam,
              gdzie spędzają czas. Tworzymy strategie, produkujemy treści i
              prowadzimy kanały, które angażują i przekładają się na wyniki.
            </p>
          </div>
        </section>

        {/* ── Czym jest Social Media marketing ── jasny */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <p
                className="text-[10px] tracking-[0.24em] uppercase font-medium"
                style={{ color: "var(--muted)" }}
              >
                Jak do tego podchodzimy
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                Nie wrzucamy postów. Budujemy obecność marki.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Każda platforma rządzi się innymi prawami. To, co działa na LinkedIn, nie zadziała na TikToku. Zaczynamy od zrozumienia, gdzie są Twoi klienci i co chcą tam znaleźć — dopiero potem dobieramy formaty i częstotliwość.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Social media to długa gra. Efekty budują się przez konsekwentną obecność, wyraźny głos marki i treści, które dają odbiorcy realną wartość — a nie przez wirusowe posty raz na kwartał.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Mierzymy to, co ma znaczenie dla biznesu: ruch na stronie, zapytania i sprzedaż — nie tylko zasięg i polubienia.
              </p>
            </div>
          </div>
        </section>

        {/* ── Lista usług ── naprzemiennie */}
        {services.map((svc, i) => (
          <section
            key={svc.num}
            className="w-full py-24 md:py-32 px-6 md:px-14"
            style={{
              borderBottom: i % 2 === 0 ? "1px solid rgba(244,239,230,0.12)" : "1px solid var(--border)",
              background: i % 2 === 0 ? "#355E58" : "var(--background)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[3rem_1fr] gap-8 md:gap-16">
              <span
                className="font-semibold tabular-nums pt-1"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: i % 2 === 0 ? "rgba(244, 239, 230, 0.78)" : "var(--muted)",
                }}
              >
                {svc.num}
              </span>
              <div className="flex flex-col gap-6">
                <h2
                  className="font-semibold leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    color: i % 2 === 0 ? "#F4EFE6" : "var(--foreground)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {svc.title}
                </h2>
                <p
                  className="font-medium"
                  style={{
                    fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                    color: i % 2 === 0 ? "rgba(244, 239, 230, 0.85)" : "var(--foreground)",
                  }}
                >
                  {svc.lead}
                </p>
                <div className="flex flex-col gap-4">
                  {svc.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="leading-relaxed"
                      style={{
                        fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                        color: i % 2 === 0 ? "rgba(244, 239, 230, 0.78)" : "var(--muted)",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

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
            Porozmawiajmy<br />o obecności<br />Twojej marki
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


