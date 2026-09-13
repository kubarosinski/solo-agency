import Header from "./Header";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export default function ServicePage({ title, subtitle, description, points }: ServicePageProps) {
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
            Kompetencje — {subtitle}
          </p>
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
              maxWidth: "80%",
            }}
          >
            {title}
          </h1>
        </section>

        {/* Opis */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-12">
            <p
              className="font-medium leading-relaxed"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "var(--foreground)",
              }}
            >
              {description}
            </p>
          </div>
        </section>

        {/* Lista punktów */}
        <section className="w-full py-24 md:py-32 px-6 md:px-14">
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-medium mb-12"
            style={{ color: "var(--muted)" }}
          >
            Co oferujemy
          </p>
          <div style={{ height: "1px", background: "var(--border)", marginBottom: 0 }} />
          <ol className="list-none m-0 p-0">
            {points.map((point, i) => (
              <li key={i}>
                <div
                  className="grid items-center py-6 md:py-8 gap-6"
                  style={{ gridTemplateColumns: "4rem 1fr" }}
                >
                  <span
                    className="font-semibold tabular-nums"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
                      color: "var(--foreground)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {point}
                  </span>
                </div>
                <div style={{ height: "1px", background: "var(--border)" }} />
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
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
            Gotowy na współpracę?
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
