import type { Metadata } from "next";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

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

        {/* Kontakt + formularz — panel dzielony */}
        <section className="w-full py-24 md:py-32 px-6 md:px-14">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ background: "var(--background)", boxShadow: "0 1px 0 var(--border)" }}
          >
            {/* Lewa kolumna — dane kontaktowe */}
            <div
              className="flex flex-col justify-between gap-16 p-10 md:p-14"
              style={{ background: "#355E58", color: "#F4EFE6" }}
            >
              <div className="flex flex-col gap-6">
                <span
                  className="text-[11px] tracking-[0.22em] uppercase font-medium"
                  style={{ color: "rgba(244, 239, 230, 0.78)" }}
                >
                  Napisz do nas
                </span>
                <h2
                  className="font-bold leading-[1.06]"
                  style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)", letterSpacing: "-0.02em" }}
                >
                  Każdy wielki projekt zaczyna się od rozmowy.
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ maxWidth: "300px", color: "rgba(244, 239, 230, 0.85)" }}
                >
                  Opowiedz nam o swoim projekcie, a my wrócimy do Ciebie w ciągu 24 godzin z konkretnymi propozycjami.
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[11px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "rgba(244, 239, 230, 0.78)" }}
                  >
                    E-mail
                  </span>
                  <a
                    href="mailto:hello@soloagency.pl"
                    className="font-semibold self-start"
                    style={{
                      fontSize: "1.3rem",
                      color: "#F4EFE6",
                      borderBottom: "1px solid rgba(244,239,230,.35)",
                      paddingBottom: "3px",
                    }}
                  >
                    hello@soloagency.pl
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[11px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "rgba(244, 239, 230, 0.78)" }}
                  >
                    Telefon
                  </span>
                  <a
                    href="tel:+48000000000"
                    className="font-semibold"
                    style={{ fontSize: "1.3rem", color: "#F4EFE6" }}
                  >
                    +48 000 000 000
                  </a>
                </div>
              </div>
            </div>

            {/* Prawa kolumna — formularz */}
            <div className="p-10 md:p-14" style={{ border: "1px solid var(--border)", borderLeft: "none" }}>
              <ContactForm />
            </div>
          </div>
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
