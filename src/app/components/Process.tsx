const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your world — your users, your market, your competitors — to surface the insight that changes everything.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Every pixel and word is intentional. We map the full experience before a single element is designed.",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "With a clear north star, we execute with obsessive precision — refining until nothing can be removed without loss.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship with confidence and stay close through the critical window — measuring, learning, and iterating fast.",
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
          How We Work
        </span>
        <span
          className="text-[10px] tracking-[0.16em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          {steps.length} Steps
        </span>
      </div>

      {/* Divider above first row */}
      <div style={{ height: "1px", background: "var(--border)", marginTop: "2rem" }} />

      {/* Numbered list */}
      <ol className="list-none m-0 p-0">
        {steps.map((step) => (
          <li key={step.number}>
            {/* Row layout: number | title | description */}
            <div
              className="grid items-start py-7 md:py-9 gap-6"
              style={{
                gridTemplateColumns: "4rem 1fr 1fr",
              }}
            >
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
                className="text-sm leading-relaxed text-right ml-auto max-w-xs"
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
