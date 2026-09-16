import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "AI Search — Solo Agency",
  description:
    "Coraz więcej pytań kończy się gotową odpowiedzią, a nie kliknięciem w link. Pracujemy nad tym, żeby Twoja marka była wśród polecanych, zanim konkurencja to zauważy.",
};

const services = [
  {
    num: "01",
    title: "Optymalizacja treści pod modele językowe (LLM)",
    lead: "Pisane dla ludzi. Czytelne dla maszyn.",
    body: "Model językowy nie czyta strony od góry do dołu, tylko wyciąga z niej fragmenty, które odpowiadają na pytanie. Łatwiej cytuje treści z jasną strukturą, konkretną odpowiedzią na początku sekcji, jednoznacznymi definicjami i sprawdzalnymi danymi. Przeglądamy Twoje kluczowe podstrony pod tym kątem: nagłówki, kolejność informacji, fakty, daty, autorstwo i dane strukturalne. Sprawdzamy też, czy roboty narzędzi AI mają w ogóle dostęp do strony i nie są blokowane w pliku robots.txt ani na poziomie serwera.\n\nNie przepisujemy marki pod algorytm. Ton i charakter zostają. Zmienia się to, jak łatwo wyciągnąć z tekstu właściwą informację. Efekt to treści, które model chętniej cytuje i trudniej mu je przekręcić.",
  },
  {
    num: "02",
    title: "Strategia obecności w Przeglądach od AI i Trybie AI",
    lead: "Google nadal jest największą wyszukiwarką. Zmienił się tylko wynik.",
    body: "Przegląd od AI pojawia się nad klasycznymi wynikami przy coraz większej liczbie zapytań. Tryb AI idzie dalej i zamienia wyszukiwanie w rozmowę. Oba korzystają z indeksu Google, więc solidne SEO jest punktem wyjścia, ale nie gwarancją. Sprawdzamy, które frazy ważne dla Twojego biznesu uruchamiają odpowiedzi AI, kogo Google w nich cytuje i jakie treści wygrywają.\n\nNa tej podstawie powstaje plan: które strony przebudować, na jakie pytania odpowiedzieć i gdzie celować w cytowanie zamiast w samą pozycję. Bierzemy pod uwagę też drugą stronę medalu. Gdy odpowiedź pojawia się na górze, mniej osób klika w wyniki. Dlatego wybieramy tematy, w których obecność realnie przekłada się na zapytania, a nie tylko na wyświetlenia.",
  },
  {
    num: "03",
    title: "Budowanie autorytetu marki w ekosystemie AI",
    lead: "Model powtarza to, co o Tobie mówi internet.",
    body: "Modele językowe budują obraz marki z wielu źródeł: mediów branżowych, rankingów, porównań, opinii, forów i materiałów wideo. Jeśli Twoja firma pojawia się w nich rzadko albo opisana jest niespójnie, model ją pominie lub pomyli z kimś innym. Zaczynamy od sprawdzenia, gdzie mówi się o Tobie, a gdzie o konkurentach, których AI już poleca.\n\nPotem planujemy obecność tam, gdzie modele szukają wiedzy: publikacje eksperckie, komentarze w mediach, rankingi branżowe, opinie klientów i spójny opis firmy w całej sieci. To połączenie PR i SEO, w którym liczą się także wzmianki bez linku. Nie publikujemy fałszywych opinii i nie spamujemy forów. Takie działania szybko wychodzą na jaw, a szkody zostają na długo.",
  },
  {
    num: "04",
    title: "Tworzenie treści przyjaznych dla AI Search",
    lead: "Treści, które da się zacytować.",
    body: "AI nie ma powodu cytować artykułu, który powtarza to, co napisano już w dziesięciu innych miejscach, bo model to wie. Cytuje treści, które wnoszą coś własnego: dane, badania, konkretne porównania, doświadczenie eksperta i jasne definicje. Tworzymy właśnie takie materiały. Są to odpowiedzi na realne pytania klientów, porównania, poradniki, raporty z własnymi danymi i strony eksperckie.\n\nKażdy tekst zaczyna się od bezpośredniej odpowiedzi, a dopiero potem daje kontekst i dowody. Podpisujemy autorów, podajemy daty i źródła. Pytania czerpiemy nie tylko z narzędzi, ale też z rozmów Twojego działu sprzedaży i obsługi klienta, bo tam najlepiej widać, o co ludzie naprawdę pytają.",
  },
  {
    num: "05",
    title: "Monitoring widoczności w narzędziach AI",
    lead: "Nie poprawisz czegoś, czego nie widzisz.",
    body: "ChatGPT nie ma swojego Search Console, więc widoczność trzeba zmierzyć inaczej. Ustalamy zestaw pytań, które zadają Twoi klienci na różnych etapach, od czym jest po co wybrać. Regularnie sprawdzamy odpowiedzi w ChatGPT, Perplexity, Gemini, Przeglądach od AI i Trybie AI. Mierzymy, jak często pojawia się Twoja marka, na którym miejscu i jak wypada na tle konkurencji.\n\nOdpowiedzi modeli różnią się między rozmowami, dlatego patrzymy na trendy z wielu zapytań, a nie na pojedyncze zrzuty ekranu. Śledzimy też ruch, który trafia na stronę z narzędzi AI. Raport jest krótki. Mówi, co się zmieniło, dlaczego i co robimy dalej.",
  },
  {
    num: "06",
    title: "Analiza cytowań marki przez modele AI",
    lead: "Liczy się nie tylko to, czy o Tobie mówią. Także to, co mówią.",
    body: "Monitoring pokazuje, jak często pojawiasz się w odpowiedziach. Analiza cytowań pokazuje, skąd model bierze wiedzę o Tobie i czy jest ona prawdziwa. Sprawdzamy, na jakie źródła powołuje się AI, czy informacje o ofercie, cenach i lokalizacji są aktualne i w jakim kontekście pojawia się Twoja marka. Częste problemy to nieaktualne dane z kilkuletniego artykułu, pomylenie z inną firmą albo polecanie konkurenta w temacie, w którym to Ty jesteś ekspertem.\n\nKażdy błąd ma swoje źródło, więc tam go naprawiamy. Aktualizujemy Twoje strony, kontaktujemy się z wydawcami i uzupełniamy luki treściami, których brakowało. Analiza źródeł cytowanych przy konkurencji pokazuje też, gdzie warto się pojawić w następnej kolejności.",
  },
];

export default function AiSearchPage() {
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
            Kompetencje — AI Search
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
            AI Search
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
              Coraz więcej pytań kończy się gotową odpowiedzią, a nie kliknięciem
              w link. ChatGPT, Perplexity, Gemini i Tryb AI w Google same decydują,
              które marki polecić. Pracujemy nad tym, żeby Twoja była wśród nich,
              zanim konkurencja to zauważy.
            </p>
          </div>
        </section>

        {/* ── Czym jest AI Search ── jasny */}
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
                Czym jest AI Search
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                Klient nie przegląda już dziesięciu linków. Zadaje pytanie i dostaje jedną odpowiedź.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Wyszukiwarki oparte na AI działają inaczej niż klasyczne. Model czyta dziesiątki źródeł, wybiera z nich najważniejsze informacje i składa je w jedną odpowiedź. Obok pokazuje kilka cytowanych stron. Reszta internetu dla użytkownika nie istnieje.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                W SEO walczysz o miejsce na liście wyników. W AI Search walczysz o miejsce w samej odpowiedzi. Wysoka pozycja w Google pomaga, ale nie wystarcza. Model wybiera źródła, które najjaśniej odpowiadają na pytanie, podają konkretne fakty i o których dobrze mówią inni.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Nikt nie steruje odpowiedziami modeli. Można jednak sprawić, że Twoja marka będzie dla nich najbardziej oczywistym wyborem.
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
            Porozmawiajmy<br />o widoczności<br />Twojej marki
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


