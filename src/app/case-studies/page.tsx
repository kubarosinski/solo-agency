import type { Metadata } from "next";
import Header from "../components/Header";
import AccordionItem from "../components/AccordionItem";
import { cases, type CaseStudy, type Paragraph } from "./cases";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Solo Agency",
  description: "Projekty, które zrealizowaliśmy — strategie, wyniki i wnioski.",
};

const labelClass = "text-[10px] tracking-[0.24em] uppercase font-medium";
const bodyStyle = { fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)" };

function renderParagraph(p: Paragraph) {
  if (typeof p === "string") return p;
  return p.map((part, i) =>
    typeof part === "string" ? part : (
      <strong key={i} className="font-semibold" style={{ color: "var(--foreground)" }}>
        {part.strong}
      </strong>
    )
  );
}

function CaseHeader({ c }: { c: CaseStudy }) {
  return (
    <>
      <span className="flex flex-col gap-3">
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "var(--muted)" }}>
          {c.category}
        </span>
        <span
          className="font-semibold leading-tight max-w-4xl"
          style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          {c.client}
        </span>
        {c.title && (
          <span
            className="font-medium leading-snug max-w-3xl"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)", color: "var(--muted)", letterSpacing: "-0.01em" }}
          >
            {c.title}
          </span>
        )}
        {c.result && (
          <span className="text-sm font-medium" style={{ color: "#355E58" }}>
            {c.result}
          </span>
        )}
      </span>
    </>
  );
}

function CaseBody({ c }: { c: CaseStudy }) {
  return (
    <div className="flex flex-col gap-14 md:gap-20 pb-14 md:pb-20 pr-0 md:pr-16">
      <p
        className="font-medium leading-relaxed max-w-3xl"
        style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)", color: c.facts ? "var(--foreground)" : "var(--muted)" }}
      >
        {c.lead}
      </p>

      {c.facts && (
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 m-0">
          {c.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <dt className={labelClass} style={{ color: "var(--muted)" }}>
                {f.label}
              </dt>
              <dd className="m-0 text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {c.stats && (
        <div className="flex flex-col gap-8">
          <p className={labelClass} style={{ color: "var(--muted)" }}>
            {c.stats.label}
          </p>
          <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {c.stats.items.map((s) => (
              <li key={s.value} className="flex flex-col gap-2">
                <span
                  className="font-semibold leading-none tabular-nums"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--foreground)", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.text}
                </span>
                {s.change && (
                  <span className="text-sm font-medium" style={{ color: "#355E58" }}>
                    {s.change}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {c.sections?.map((s) => (
        <div key={s.label} className="flex flex-col gap-5 max-w-3xl">
          <p className={labelClass} style={{ color: "var(--muted)" }}>
            {s.label}
          </p>
          {s.heading && (
            <h3
              className="font-semibold leading-tight"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
            >
              {s.heading}
            </h3>
          )}
          {s.paragraphs?.map((p, i) => (
            <p key={i} className="leading-relaxed" style={bodyStyle}>
              {renderParagraph(p)}
            </p>
          ))}
          {s.steps && (
            <ol className="list-none m-0 p-0 flex flex-col">
              {s.steps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-4 md:gap-6 py-6 md:py-8 grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr]"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span
                    className="font-semibold tabular-nums pt-1"
                    style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.08em" }}
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h4
                      className="font-semibold leading-tight"
                      style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "var(--foreground)", letterSpacing: "-0.015em" }}
                    >
                      {step.title}
                    </h4>
                    <p className="font-medium" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "var(--foreground)" }}>
                      {step.lead}
                    </p>
                    <p className="leading-relaxed" style={bodyStyle}>
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CaseStudiesPage() {
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
            Nasze realizacje
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
            }}
          >
            Case Studies
          </h1>
        </section>

        {/* Lista */}
        <section className="w-full py-24 md:py-32 px-6 md:px-14">
          <div style={{ height: "1px", background: "var(--border)" }} />
          <ul className="list-none m-0 p-0">
            {cases.map((c) => (
              <li key={c.slug}>
                <AccordionItem id={c.slug} header={<CaseHeader c={c} />} cta={c.cta}>
                  <CaseBody c={c} />
                </AccordionItem>
                <div style={{ height: "1px", background: "var(--border)" }} />
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{ background: "#355E58" }}
        >
          <p
            className="font-semibold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)", color: "#F4EFE6", letterSpacing: "-0.025em", maxWidth: "60%" }}
          >
            Twój projekt może być następny.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase"
            style={{ color: "#D8C7B2" }}
          >
            Skontaktuj się
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
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: "var(--muted)" }}>
          © 2026 Solo Agency
        </span>
        <Link href="/" className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link">
          Strona główna
        </Link>
      </footer>
    </>
  );
}
