export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ paddingBottom: "7vw" }}
    >
      {/* Massive headline */}
      <div className="px-6 md:px-12 lg:px-14">
        <h1
          className="font-semibold leading-[0.88] tracking-tight"
          style={{
            fontSize: "clamp(4.2rem, 13.5vw, 14rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block">Zmieniamy</span>
          <span className="block">pomysły w</span>
          <span className="block">rzeczywistość.</span>
        </h1>
      </div>

      {/* Subheadline — pushed to the right, near bottom */}
      <div
        className="absolute bottom-[7vw] right-8 md:right-14 max-w-xs text-right"
        style={{ color: "var(--muted)" }}
      >
        <p className="text-sm leading-relaxed tracking-wide">
          Butikowa agencja kreatywna, która tworzy
          <br />
          odważne doświadczenia cyfrowe dla
          <br />
          ambitnych marek.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-5 text-xs font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-100"
          style={{ color: "var(--accent)", opacity: 0.8 }}
        >
          Zobacz nasze projekty
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Thin bottom border line */}
      <div
        className="absolute bottom-0 left-8 md:left-14 right-8 md:right-14"
        style={{ height: "1px", background: "var(--border)" }}
      />
    </section>
  );
}
