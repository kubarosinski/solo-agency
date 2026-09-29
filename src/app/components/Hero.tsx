export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32 md:pt-36"
      style={{ paddingBottom: "7vw" }}
    >
      {/* Massive headline */}
      <div className="px-6 md:px-12 lg:px-14">
        <h1
          className="font-semibold leading-[0.88] tracking-tight text-[clamp(2.5rem,12vw,14rem)] md:text-[clamp(2.75rem,13vw,14rem)]"
          style={{
            color: "var(--foreground)",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block">Zmieniamy</span>
          <span className="block">pomysły w</span>
          <span className="block">rzeczywistość.</span>
        </h1>
      </div>

      {/* Subheadline — inline on mobile, pushed to the right on desktop */}
      <div
        className="mt-10 md:mt-12 px-6 md:px-12 lg:px-14 max-w-xs md:ml-auto md:text-right"
        style={{ color: "var(--muted)" }}
      >
        <p className="text-sm font-medium tracking-wide mb-3" style={{ color: "var(--foreground)" }}>
          Agencja SEO i marketingu z Poznania.
        </p>
        <p className="text-sm leading-relaxed tracking-wide">
          Butikowa agencja kreatywna, która tworzy odważne doświadczenia cyfrowe
          dla ambitnych marek.
        </p>
        <a
          href="/case-studies"
          className="text-link inline-flex items-center gap-2 mt-6 text-xs font-medium tracking-[0.16em] uppercase"
        >
          Zobacz nasze projekty
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Thin bottom border line */}
      <div
        className="absolute bottom-0 left-6 md:left-14 right-6 md:right-14"
        style={{ height: "1px", background: "var(--border)" }}
      />
    </section>
  );
}
