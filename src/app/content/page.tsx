import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Content — Solo Agency",
  description:
    "Treści, które pozycjonują, angażują i sprzedają — od strategii contentowej po gotowe materiały.",
};

const services = [
  {
    num: "01",
    title: "Strategia contentowa i plan redakcyjny",
    lead: "Treść bez strategii to hałas. Ze strategią — inwestycja.",
    body: "Zaczynamy od pytania, komu piszemy i po co. Analizujemy grupę docelową, jej pytania, obawy i moment, w którym styka się z marką. Mapujemy tematy na etapy lejka — od artykułów budujących świadomość, przez treści porównawcze, po materiały, które domykają decyzję zakupową.\n\nPlan redakcyjny to konkretna lista tematów z priorytetami, formatami i terminarze. Nie lista życzeń — harmonogram działania. Uwzględniamy sezonowość, kampanie i to, co już masz na stronie, żeby nie pisać od zera rzeczy, które wystarczy zaktualizować.",
  },
  {
    num: "02",
    title: "Artykuły blogowe i eksperckie",
    lead: "Artykuł, który naprawdę odpowiada na pytanie, pracuje latami.",
    body: "Piszemy artykuły, które są użyteczne dla czytelnika i widoczne w Google. Każdy temat poprzedzamy analizą intencji wyszukiwania — sprawdzamy, czego naprawdę szuka osoba wpisująca daną frazę, i piszemy odpowiedź na to pytanie, a nie na to, co nam się wydaje ważne.\n\nStruktura, nagłówki, długość i linkowanie wewnętrzne są dobierane do tematu i konkurencji. Nie piszemy na akord. Jeden solidny artykuł, który trafia na pierwsze strony Google i zostaje tam na lata, jest więcej wart niż dwadzieścia słabych tekstów, które nikt nie znajdzie.",
  },
  {
    num: "03",
    title: "Copywriting — strony, landing page, reklamy",
    lead: "Słowa, które sprawiają, że ktoś zostaje i działa.",
    body: "Copywriting to treść, której zadaniem jest wywołać konkretne działanie — kliknięcie, wypełnienie formularza, zakup, telefon. Piszemy teksty na strony usługowe, landing page, nagłówki, opisy ofert i reklamy. Każde zdanie ma cel i nie ma przypadkowych słów.\n\nZaczynamy od zrozumienia klienta: czego szuka, czego się boi i co musi usłyszeć, żeby zaufać. Potem dopasowujemy ton do marki — inaczej pisze się dla kancelarii prawnej, inaczej dla studia fitness. Efekt to tekst, który brzmi jak marka, a nie jak szablon z internetu.",
  },
  {
    num: "04",
    title: "Treści zoptymalizowane pod SEO i AI Search",
    lead: "Widoczny w Google i cytowany przez AI — jednocześnie.",
    body: "SEO i AI Search to dziś dwie oddzielne gry, które toczą się na tym samym boisku. Treść zoptymalizowana pod wyszukiwarki potrzebuje jasnej struktury, odpowiedniej gęstości fraz i danych strukturalnych. Treść, którą AI chętnie cytuje, potrzebuje konkretnych odpowiedzi, faktów i jasnego autorstwa.\n\nPiszemy materiały, które spełniają oba warunki. Nie upychamy fraz kosztem czytelności i nie piszemy dla robotów kosztem ludzi. Dobry tekst jest użyteczny dla czytelnika — wyszukiwarki i modele AI to zauważają.",
  },
  {
    num: "05",
    title: "E-booki, raporty i materiały eksperckie",
    lead: "Głęboka wiedza w formacie, który buduje autorytet.",
    body: "Materiały długoformatowe robią to, czego nie może zrobić post — budują pozycję eksperta i zostają z odbiorcą na dłużej. Tworzymy e-booki, raporty branżowe, white papers i poradniki. Planujemy strukturę, piszemy treść, dbamy o spójność z resztą komunikacji marki.\n\nTo też wartościowe aktywa marketingowe: służą jako lead magnety, tematy do rozmów sprzedażowych i materiał do dalszych treści — artykułów, postów i prezentacji. Jeden dobrze napisany raport potrafi pracować w wielu kanałach przez wiele miesięcy.",
  },
  {
    num: "06",
    title: "Opisy produktów i kategorii",
    lead: "Opis, który sprzedaje, zamiast informować.",
    body: "Większość opisów produktów odpowiada na pytanie czym to jest. Dobry opis odpowiada na pytanie dlaczego właśnie to i dlaczego teraz. Piszemy opisy, które pokazują wartość dla klienta, rozwiązują jego wątpliwości i są zoptymalizowane pod frazy, których używa podczas wyszukiwania.\n\nOpisy kategorii traktujemy jak treść strategiczną — to często pierwsze strony, które Google indeksuje i które przyciągają ruch z szerokich fraz. Tekst kategorii musi więc być użyteczny dla odwiedzającego i czytelny dla wyszukiwarki. Unikamy kopiowania od producenta i generycznych opisów, które powtarza połowa sklepów w sieci.",
  },
];

export default function ContentPage() {
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
            Kompetencje — Content
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
            Content
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
              Dobra treść to fundament każdej strategii cyfrowej. Tworzymy
              artykuły, copywriting i materiały, które odpowiadają na pytania
              odbiorców, budują autorytet marki i wspierają widoczność
              w wyszukiwarkach i narzędziach AI.
            </p>
          </div>
        </section>

        {/* ── Podejście ── jasny */}
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
                Jak podchodzimy do treści
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                Piszemy dla ludzi. Optymalizujemy dla wyszukiwarek.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Treść, która nie służy czytelnikowi, nie posłuży też Google ani modelom AI. Zaczynamy od zrozumienia, czego naprawdę szuka odbiorca — i piszemy na to odpowiedź, a nie na to, co dobrze wygląda w statystykach.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Nie produkujemy treści hurtowo. Jeden dobrze napisany artykuł, który trafia na pierwsze strony Google i jest cytowany przez AI, jest więcej wart niż dwadzieścia słabych tekstów, które nikt nie znajdzie.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Każda treść ma swój cel, swoje miejsce w lejku i mierzalny efekt. Piszemy po to, żeby coś się zmieniło — w widoczności, zaangażowaniu albo sprzedaży.
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
                  color: i % 2 === 0 ? "rgba(244,239,230,0.45)" : "var(--muted)",
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
                    color: i % 2 === 0 ? "rgba(244,239,230,0.75)" : "var(--foreground)",
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
                        color: i % 2 === 0 ? "rgba(244,239,230,0.6)" : "var(--muted)",
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
            Porozmawiajmy<br />o treściach<br />Twojej marki
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


