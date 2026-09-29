import type { Metadata } from "next";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const title = "Kontakt — Solo Agency";
const description = "Skontaktuj się z nami i porozmawiajmy o Twoim projekcie.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.soloagency.pl/kontakt",
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

const schemaContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description,
  url: "https://www.soloagency.pl/kontakt",
  isPartOf: { "@id": "https://www.soloagency.pl/#organization" },
  inLanguage: "pl",
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={schemaContactPage} />
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
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
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
              className="flex flex-col justify-between gap-16 p-6 sm:p-10 md:p-14"
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
                    href="tel:+48512378161"
                    className="font-semibold inline-flex items-center gap-2"
                    style={{ fontSize: "1.3rem", color: "#F4EFE6" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +48 512 378 161
                  </a>
                  <a
                    href="tel:+48737132078"
                    className="font-semibold inline-flex items-center gap-2"
                    style={{ fontSize: "1.3rem", color: "#F4EFE6" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +48 737 132 078
                  </a>
                </div>
              </div>
            </div>

            {/* Prawa kolumna — formularz */}
            <div className="p-6 sm:p-10 md:p-14 border border-border border-t-0 md:border-t md:border-l-0">
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
