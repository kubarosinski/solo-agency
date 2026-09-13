import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Kontakt — Solo Agency",
  description: "Skontaktuj się z nami i porozmawiajmy o Twoim projekcie.",
};

export default function KontaktPage() {
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
            Napisz do nas
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            Kontakt
          </h1>
        </section>

        {/* Dane kontaktowe */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p
                className="text-[10px] tracking-[0.24em] uppercase font-medium mb-8"
                style={{ color: "var(--muted)" }}
              >
                E-mail
              </p>
              <a
                href="mailto:hello@soloagency.pl"
                className="font-semibold nav-link"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                hello@soloagency.pl
              </a>
            </div>
            <div>
              <p
                className="text-[10px] tracking-[0.24em] uppercase font-medium mb-8"
                style={{ color: "var(--muted)" }}
              >
                Telefon
              </p>
              <a
                href="tel:+48000000000"
                className="font-semibold nav-link"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                +48 000 000 000
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ background: "#355E58" }}
        >
          <p
            className="font-semibold leading-tight mb-16"
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              color: "#F4EFE6",
              letterSpacing: "-0.025em",
              maxWidth: "70%",
            }}
          >
            Każdy wielki projekt zaczyna się od rozmowy.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(244, 239, 230, 0.6)", maxWidth: "480px" }}
          >
            Opowiedz nam o swoim projekcie, a my wrócimy do Ciebie w ciągu 24 godzin z konkretnymi propozycjami.
          </p>
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
