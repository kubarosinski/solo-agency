import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "O nas — Solo Agency",
  description:
    "Łączymy strategię, kreację i technologię. Pracujemy z markami, które mają ambicje i cenią jakość ponad ilość.",
};

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
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-16"
            style={{ color: "var(--muted)" }}
          >
            Zespół
          </p>
          <div className="flex flex-row gap-8">
            {[
              { src: "/jakub.jpg", name: "Jakub Rosiński" },
              { src: "/krzysztof.jpg", name: "Krzysztof Weichert" },
            ].map((person) => (
              <div key={person.name} className="flex flex-col gap-4">
                <div
                  className="relative overflow-hidden"
                  style={{ width: "200px", height: "240px" }}
                >
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="200px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <span
                  className="font-semibold"
                  style={{ fontSize: "0.9rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
                >
                  {person.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Wartości ── zielony */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid rgba(244,239,230,0.12)", background: "#355E58" }}
        >
          <p className="text-[10px] tracking-[0.24em] uppercase font-medium mb-16" style={{ color: "rgba(244,239,230,0.45)" }}>
            Nasze wartości
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {values.map((val) => (
              <div key={val.num} className="flex flex-col gap-5">
                <span className="font-semibold tabular-nums" style={{ fontSize: "0.7rem", color: "rgba(244,239,230,0.45)", letterSpacing: "0.1em" }}>
                  {val.num}
                </span>
                <h2 className="font-semibold leading-tight" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", color: "#F4EFE6", letterSpacing: "-0.02em" }}>
                  {val.title}
                </h2>
                <p className="leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(244,239,230,0.6)" }}>
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
        <a href="/" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
          Strona główna
        </a>
      </footer>
    </>
  );
}
