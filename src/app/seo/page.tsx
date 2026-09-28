import type { Metadata } from "next";
import Header from "../components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO — Solo Agency",
  description:
    "Widoczność, która nie znika, gdy kończy się budżet reklamowy. Łączymy analizę techniczną, treści i autorytet domeny, aby Twoja marka była pierwszą odpowiedzią tam, gdzie szukają jej klienci.",
};

const services = [
  {
    num: "01",
    title: "Audyt techniczny i optymalizacja strony",
    lead: "Najpierw fundamenty. Potem cała reszta.",
    body: "Najlepsze treści nie pomogą, jeśli Google nie może ich znaleźć, odczytać albo zrozumieć. Dlatego zaczynamy od strony tak, jak widzi ją robot wyszukiwarki. Sprawdzamy indeksację, strukturę adresów i linkowania wewnętrznego, przekierowania, duplikaty treści, tagi kanoniczne, mapę witryny, plik robots.txt i dane strukturalne. Przy stronach opartych na JavaScripcie sprawdzamy też, czy treść w ogóle dociera do wyszukiwarki.\n\nNie dostajesz stu stron raportu, który trafi do szuflady. Dostajesz listę problemów uporządkowaną według wpływu na widoczność — od tego, co blokuje wyniki dziś, po to, co warto poprawić przy okazji. Potem wdrażamy poprawki sami albo razem z Twoim zespołem i sprawdzamy, czy przyniosły efekt.",
  },
  {
    num: "02",
    title: "Badanie słów kluczowych i strategia treści",
    lead: "Nie zgadujemy, czego szukają Twoi klienci. Sprawdzamy to.",
    body: "Za każdym wyszukiwaniem stoi intencja. Ktoś chce się czegoś dowiedzieć, porównać opcje albo kupić od razu. Analizujemy frazy, które wpisują Twoi klienci, ich potencjał ruchu, trudność i to, co dziś wyświetla się na nie w Google. Grupujemy je w tematy i przypisujemy do konkretnych podstron — tak aby żadna fraza nie została bez odpowiedzi i żadne dwie strony nie konkurowały ze sobą o to samo.\n\nZ tej mapy powstaje plan treści: co poprawić na istniejących stronach, co napisać od nowa i w jakiej kolejności. Priorytet mają tematy, które najszybciej przełożą się na zapytania i sprzedaż, a nie te, które najlepiej wyglądają w statystykach.",
  },
  {
    num: "03",
    title: "Link building i budowanie autorytetu domeny",
    lead: "Linki to głosy zaufania. Liczy się, kto głosuje.",
    body: "Google traktuje odnośniki z innych stron jak rekomendacje. Jeden link z uznanego portalu branżowego znaczy więcej niż setka z przypadkowych katalogów. Zaczynamy od analizy Twojego obecnego profilu linków i porównania go z konkurencją. Wiemy wtedy, ile brakuje i gdzie warto szukać.\n\nAutorytet budujemy przez publikacje eksperckie, obecność w mediach branżowych, współprace i treści, do których inni chcą linkować sami. Omijamy farmy linków, zaplecza i hurtowe pakiety. To skróty, które działają krótko, a za które Google prędzej czy później wystawia rachunek w postaci spadków.",
  },
  {
    num: "04",
    title: "SEO lokalne i Profil Firmy w Google",
    lead: "Klient z Twojego miasta powinien trafić do Ciebie.",
    body: "Gdy ktos wpisuje w poblizu albo nazwe miasta, Google pokazuje najpierw mape i trzy firmy. Pozostale sa duzo mniej widoczne. Optymalizujemy Twoj Profil Firmy w Google: kategorie, opis, uslugi, zdjecia, godziny otwarcia i regularne wpisy. Dbamy o to, zeby nazwa, adres i telefon byly identyczne we wszystkich miejscach w sieci, bo niespojne dane obnizaja zaufanie wyszukiwarki.\n\nPomagamy tez w systematycznym zbieraniu opinii i odpowiadaniu na nie. Jesli dzialasz w kilku lokalizacjach, tworzymy dla kazdej osobna, wartosciowa podstrone zamiast kopiowac ta sama tresc ze zmieniona nazwa miasta.",
  },
  {
    num: "05",
    title: "Monitoring pozycji i raportowanie",
    lead: "Mierzymy to, co widać w wynikach firmy, a nie tylko w wykresach.",
    body: "Śledzimy pozycje fraz, które mają znaczenie, ruch organiczny w Google Search Console i Google Analytics oraz to, co najważniejsze: ile z tego ruchu zamienia się w zapytania, telefony i zakupy. Na bieżąco obserwujemy też zmiany algorytmu i ruchy konkurencji, żeby reagować, zanim spadki staną się problemem.\n\nRaport jest krótki i napisany ludzkim językiem. Mówi, co działa, co nie działa i co robimy w kolejnym miesiącu. Bez żargonu i bez wykresów, które mają tylko robić wrażenie.",
  },
  {
    num: "06",
    title: "Optymalizacja Core Web Vitals",
    lead: "Szybkość to nie detal. To pierwsze wrażenie.",
    body: "Core Web Vitals to wskaźniki, którymi Google ocenia doświadczenie użytkownika. LCP mierzy, jak szybko pojawia się główna treść strony. INP sprawdza, jak szybko strona reaguje na kliknięcia. CLS pokazuje, czy elementy nie przeskakują podczas wczytywania. Mierzymy je na danych od prawdziwych użytkowników, a nie tylko w warunkach testowych.\n\nPoprawiamy to, co spowalnia stronę: ciężkie obrazy i czcionki, nadmiar skryptów, wolny serwer, brak cache'owania. Efekt widać podwójnie — wyszukiwarka dostaje stronę, którą chętniej pokazuje, a użytkownicy zostają dłużej i rzadziej rezygnują w połowie ładowania.",
  },
];

export default function SeoPage() {
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
            Kompetencje — SEO
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
            SEO
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
              Widoczność, która nie znika, gdy kończy się budżet reklamowy.
              Łączymy analizę techniczną, treści i autorytet domeny, aby Twoja
              marka była pierwszą odpowiedzią tam, gdzie szukają jej klienci.
            </p>
          </div>
        </section>

        {/* ── Czym jest SEO ── jasny */}
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
                Czym jest SEO
              </p>
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.025em",
                }}
              >
                SEO to nie oszukiwanie algorytmu. To bycie najlepszą odpowiedzią.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Pozycjonowanie sprawia, że Twoja strona pojawia się w Google wtedy, gdy ktoś szuka dokładnie tego, co oferujesz. Nie płacisz za każde kliknięcie i nie walczysz o uwagę osób, które nie są zainteresowane.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Na widoczność pracują trzy rzeczy. Strona, którą wyszukiwarka rozumie i szybko wczytuje. Treści, które odpowiadają na realne potrzeby. Autorytet, dzięki któremu Google Ci ufa. Zaniedbanie jednej osłabia pozostałe.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                To gra długodystansowa. Efekty narastają stopniowo, a potem pracują na Ciebie każdego dnia.
              </p>
            </div>
          </div>
        </section>

        {/* ── Lista usług ── naprzemiennie zielony/jasny (01 zielony, 02 jasny...) */}
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

        {/* ── CTA ── zielony (06 jest jasny, więc CTA zielony ok) */}
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


