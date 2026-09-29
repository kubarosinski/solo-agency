const steps = [
  {
    number: "01",
    title: "Odkrycie",
    description:
      "Zagłębiamy się w Twój świat — użytkowników, rynek, konkurencję — by odkryć wgląd, który zmienia wszystko.",
  },
  {
    number: "02",
    title: "Strategia",
    description:
      "Każdy piksel i każde słowo mają znaczenie. Mapujemy całe doświadczenie, zanim zaprojektujemy pierwszy element.",
  },
  {
    number: "03",
    title: "Rzemiosło",
    description:
      "Mając jasny cel, działamy z obsesyjną precyzją — dopracowujemy wszystko, aż nie da się już nic odjąć bez straty.",
  },
  {
    number: "04",
    title: "Wdrożenie",
    description:
      "Wdrażamy z pewnością i zostajemy blisko w kluczowym okresie — mierzymy, uczymy się i szybko iterujemy.",
  },
];

export default function Process() {
  return (
    <section className="w-full py-28 md:py-36 px-6 md:px-14">
      {/* Section header */}
      <div className="flex items-center justify-between mb-0">
        <span
          className="text-[10px] tracking-[0.24em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          Jak pracujemy
        </span>
        <span
          className="text-[10px] tracking-[0.16em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          {steps.length} kroki
        </span>
      </div>

      {/* Divider above first row */}
      <div style={{ height: "1px", background: "var(--border)", marginTop: "2rem" }} />

      {/* Numbered list */}
      <ol className="list-none m-0 p-0">
        {steps.map((step) => (
          <li key={step.number}>
            {/* Row layout: number | title | description */}
            <div className="grid items-start py-7 md:py-9 gap-x-6 gap-y-3 md:gap-6 grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr_1fr]">
              {/* Number */}
              <span
                className="font-semibold tabular-nums leading-tight"
                style={{
                  fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  paddingTop: "0.15em",
                }}
              >
                {step.number}
              </span>

              {/* Title */}
              <span
                className="font-semibold leading-tight"
                style={{
                  fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </span>

              {/* Description — pushed to the right */}
              <p
                className="col-start-2 md:col-start-auto text-sm leading-relaxed md:text-right md:ml-auto max-w-xs"
                style={{ color: "var(--muted)" }}
              >
                {step.description}
              </p>
            </div>

            {/* Full-width 1px border separator */}
            <div style={{ height: "1px", background: "var(--border)" }} />
          </li>
        ))}
      </ol>
    </section>
  );
}
