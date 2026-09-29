import Header from "./Header";
import Link from "next/link";
import LegalLinks from "./LegalLinks";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  sectionPrefix?: string;
  sections: LegalSection[];
}

export default function LegalPage({ eyebrow, title, effectiveDate, sectionPrefix = "", sections }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 pt-40"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
            style={{ color: "var(--muted)" }}
          >
            {eyebrow}
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight md:max-w-[80%]"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h1>
          <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
            Obowiązuje od: {effectiveDate}
          </p>
        </section>

        {/* Spis treści + treść */}
        <section className="w-full py-24 md:py-32 px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            <nav aria-labelledby="toc-heading" className="md:sticky md:top-28 self-start">
              <p
                id="toc-heading"
                className="text-[10px] tracking-[0.24em] uppercase font-medium mb-6"
                style={{ color: "var(--muted)" }}
              >
                Spis treści
              </p>
              <ol className="list-none m-0 p-0 flex flex-col">
                {sections.map((s, i) => (
                  <li key={s.id} style={{ borderTop: "1px solid var(--border)" }}>
                    <a
                      href={`#${s.id}`}
                      className="nav-link flex gap-4 py-3 text-sm"
                    >
                      <span className="tabular-nums shrink-0" style={{ minWidth: "2.5rem" }}>
                        {sectionPrefix}{i + 1}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex flex-col gap-16 md:gap-20 max-w-2xl">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-28 flex flex-col gap-5">
                  <h2
                    id={`${s.id}-heading`}
                    className="font-semibold leading-tight flex flex-col gap-3"
                    style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
                  >
                    <span
                      className="font-semibold tabular-nums"
                      style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em" }}
                    >
                      {sectionPrefix}{i + 1}
                    </span>
                    {s.title}
                  </h2>
                  <div className="legal-prose">{s.content}</div>
                </section>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer
        className="w-full flex flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 px-6 md:px-14 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          © 2026 Solo Agency
        </span>
        <LegalLinks />
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
