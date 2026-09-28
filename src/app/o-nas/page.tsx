import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nas — Solo Agency",
  description:
    "Łączymy strategię, kreację i technologię. Pracujemy z markami, które mają ambicje i cenią jakość ponad ilość.",
};

const team = [
  {
    src: "/jakub.jpg",
    sizes: "320px",
    name: "Jakub Rosiński",
    role: "SEO & web development",
    email: "jakub@soloagency.pl",
    bio: "AI zmienia sposób wyszukiwania, ale nie zasady gry. Jako inżynier i specjalista SEO buduję strony, które wygrywają w Google i w odpowiedziach AI. Łączę pracę nad kodem i nad treścią, bo jedno bez drugiego nie działa — odpowiadam za architekturę serwisu, szybkość i za to, żeby każda podstrona miała jasny powód istnienia.",
  },
  {
    src: "/krzysztof.jpg",
    // proporcje 0.86 przy kadrze 4:5 (0.8) - po dopasowaniu do wysokosci ma ok. 346 px szerokosci
    sizes: "350px",
    name: "Krzysztof Weichert",
    role: "SEO & widoczność w AI",
    email: "krzysztof@soloagency.pl",
    bio: "Informatyk z wykształcenia, SEO z wyboru. Sprawdzam, jak Google i modele AI wybierają źródła, i wdrażam zmiany, dzięki którym wybierają Ciebie. Zaczynam od danych — stanu technicznego strony, realnych zapytań i tego, kto dziś na nie odpowiada. Potem układam plan, który da się wdrożyć, a nie listę rekomendacji na sto stron.",
  },
];

const values = [
  {
    num: "01",
    title: "Przejrzystość",
    body: "Wiesz dokładnie, na czym stoisz. Co robimy, dlaczego i jakich efektów się spodziewać. Bez ukrytych kosztów, bez żargonu i bez obietnic, których nie możemy dotrzymać.",
  },
  {
    num: "02",
    title: "Precyzja",
    body: "Robimy mniej, ale lepiej. Każde działanie ma cel, każda decyzja ma uzasadnienie. Nie produkujemy treści, kampanii ani stron na zapas — tylko to, co faktycznie ma sens dla Twojej marki.",
  },
  {
    num: "03",
    title: "Długoterminowe myślenie",
    body: "Nie gonimy za szybkimi efektami, które znikają po miesiącu. Budujemy fundament — widoczność organiczną, silną markę i treści, które pracują latami. To wymaga cierpliwości, ale efekty są trwałe.",
  },
  {
    num: "04",
    title: "Partnerstwo",
    body: "Traktujemy każdy projekt jak własny. Interesuje nas sukces Twojej marki, a nie odfajkowanie zlecenia. Dlatego pytamy, słuchamy i angażujemy się bardziej, niż pewnie się spodziewasz.",
  },
];

export default function ONasPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── jasny */}
        <section
          className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6" style={{ color: "var(--muted)" }}>
            Kim jesteśmy
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)", color: "var(--foreground)", letterSpacing: "-0.03em", maxWidth: "80%" }}
          >
            Solo Agency
          </h1>
        </section>

        {/* ── Intro ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-12">
            <p className="font-medium leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#F4EFE6" }}>
              Łączymy strategię, kreację i technologię. Pracujemy z markami,
              które mają ambicje i cenią jakość ponad ilość. Każdy projekt
              traktujemy jak nasz własny.
            </p>
            <div className="flex md:justify-end items-start">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase"
                style={{ color: "#D8C7B2" }}
              >
                Poznajmy się
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Kim jesteśmy ── jasny */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.24em] uppercase font-medium" style={{ color: "var(--muted)" }}>O nas</p>
              <h2 className="font-semibold leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--foreground)", letterSpacing: "-0.025em" }}>
                Mały zespół. Duże możliwości.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Wierzymy, że najlepsze efekty powstają wtedy, gdy za projektem stoją ludzie, którzy naprawdę rozumieją biznes klienta i potrafią spojrzeć na niego szerzej niż przez pryzmat jednej usługi. Dlatego każdy projekt w Solo Agency trafia bezpośrednio do specjalisty, który odpowiada za jego jakość i rozwój.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Łączymy kompetencje z obszaru SEO, web developmentu, contentu, social mediów i Google Ads, ponieważ wszystkie te działania wpływają na siebie na kolejnych etapach kontaktu użytkownika z marką. Zamiast prowadzić je osobno, patrzymy na nie jako na elementy jednego procesu, który ma wspierać widoczność, pozyskiwanie klientów i rozwój biznesu.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Pracujemy z markami osobistymi, firmami usługowymi i rozwijającymi się biznesami. Niezależnie od skali najważniejsze jest dla nas partnerskie podejście, jakość pracy i działania, które mają realną wartość również w dłuższej perspektywie.
              </p>
            </div>
          </div>
        </section>

        {/* ── Zespół ── jasny */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex flex-col items-center text-center gap-14">
            <p
              className="text-[10px] tracking-[0.24em] uppercase font-medium"
              style={{ color: "var(--muted)" }}
            >
              Zespół
            </p>
            <h2
              className="font-semibold leading-tight max-w-xl mx-auto"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "var(--foreground)", letterSpacing: "-0.015em" }}
            >
              Dwie osoby, które prowadzą projekty od początku do końca.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {team.map((person) => (
                <div key={person.name} className="flex flex-col items-center text-center gap-6">
                  <div
                    className="relative w-full overflow-hidden mx-auto"
                    style={{ aspectRatio: "4 / 5", maxWidth: "320px", background: "var(--border)" }}
                  >
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      sizes={person.sizes}
                      quality={90}
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
                    <span
                      className="text-[11px] tracking-[0.18em] uppercase font-medium"
                      style={{ color: "var(--foreground)", opacity: 0.75 }}
                    >
                      {person.role}
                    </span>
                    <h3
                      className="font-semibold"
                      style={{ fontSize: "1.4rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
                    >
                      {person.name}
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                      {person.bio}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-xs font-medium"
                        style={{ letterSpacing: "0.04em", color: "var(--foreground)", borderBottom: "1px solid var(--border)", paddingBottom: "3px" }}
                      >
                        {person.email}
                      </a>
                      <a
                        href="#"
                        className="text-[11px] font-medium uppercase"
                        style={{ letterSpacing: "0.14em", color: "var(--foreground)", borderBottom: "1px solid var(--border)", paddingBottom: "3px" }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wartości ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <p className="text-[10px] tracking-[0.24em] uppercase font-medium mb-16" style={{ color: "rgba(244, 239, 230, 0.78)" }}>
            Nasze wartości
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {values.map((val) => (
              <div key={val.num} className="flex flex-col gap-5">
                <span className="font-semibold tabular-nums" style={{ fontSize: "0.7rem", color: "rgba(244, 239, 230, 0.78)", letterSpacing: "0.1em" }}>
                  {val.num}
                </span>
                <h2 className="font-semibold leading-tight" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", color: "#F4EFE6", letterSpacing: "-0.02em" }}>
                  {val.title}
                </h2>
                <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(244, 239, 230, 0.78)" }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Jak pracujemy ── jasny */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.24em] uppercase font-medium" style={{ color: "var(--muted)" }}>Jak pracujemy</p>
              <h2 className="font-semibold leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--foreground)", letterSpacing: "-0.025em" }}>
                Blisko, konkretnie i bez zbędnych warstw.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Zaczynamy od rozmowy — nie od wysłania briefu do wypełnienia. Chcemy zrozumieć biznes, klientów i cele, zanim zaproponujemy cokolwiek. To zajmuje trochę więcej czasu na początku i oszczędza go przez całą współpracę.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Komunikacja jest bezpośrednia. Masz kontakt do osoby, która faktycznie prowadzi Twój projekt — nie do account managera, który przekazuje informacje dalej. Decyzje zapadają szybko, a zmiany wdrażamy bez biurokracji.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" }}>
                Raporty są krótkie i napisane po ludzku. Mówią, co zrobiliśmy, co to dało i co planujemy dalej. Bez prezentacji, które mają robić wrażenie, a nie informować.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{ background: "#355E58" }}
        >
          <p className="font-semibold leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 5rem)", color: "#F4EFE6", letterSpacing: "-0.025em", maxWidth: "60%" }}>
            Porozmawiajmy<br />o rozwoju<br />Twojej marki
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
        <Link href="/" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
          Strona główna
        </Link>
      </footer>
    </>
  );
}
