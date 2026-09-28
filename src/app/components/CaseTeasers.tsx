import { cases } from "../case-studies/cases";

const arrow = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CaseTeasers() {
  return (
    <section className="w-full py-28 md:py-36 px-6 md:px-14" aria-labelledby="realizacje-heading">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[10px] tracking-[0.24em] uppercase font-medium" style={{ color: "var(--muted)" }}>
          Realizacje
        </span>
        <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
      </div>
      <h2
        id="realizacje-heading"
        className="font-semibold leading-tight mb-14 md:mb-20"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--foreground)", letterSpacing: "-0.025em" }}
      >
        Wybrane realizacje.
      </h2>

      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16">
        {cases.slice(0, 2).map((c) => (
          <li key={c.slug} className="flex flex-col gap-5 pt-6 pb-12" style={{ borderTop: "1px solid var(--border)" }}>
            <h3
              className="font-semibold leading-tight"
              style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", color: "var(--foreground)", letterSpacing: "-0.015em" }}
            >
              {c.client}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {c.teaser.challenge}
            </p>
            <p className="flex flex-col gap-2 mt-auto">
              <span
                className="font-semibold leading-none tabular-nums"
                style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", color: "var(--foreground)", letterSpacing: "-0.03em" }}
              >
                {c.teaser.result.value}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {c.teaser.result.text}
                {c.teaser.result.change && (
                  <span className="font-medium" style={{ color: "#355E58" }}>
                    {" "}
                    {c.teaser.result.change}
                  </span>
                )}
              </span>
            </p>
            <a
              href={`/case-studies#${c.slug}`}
              className="text-link self-start inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase"
            >
              Zobacz case study<span className="sr-only">: {c.client}</span>
              {arrow}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ height: "1px", background: "var(--border)" }} />
      <a
        href="/case-studies"
        className="text-link inline-flex items-center gap-3 mt-10 text-xs font-medium tracking-[0.16em] uppercase"
      >
        Wszystkie realizacje
        {arrow}
      </a>
    </section>
  );
}
