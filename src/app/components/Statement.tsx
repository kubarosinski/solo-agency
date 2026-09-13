export default function Statement() {
  return (
    <section
      className="relative w-full py-32 md:py-40 px-6 md:px-14"
      style={{ background: "#355E58" }}
    >
      {/* Small eyebrow label */}
      <div className="flex items-center gap-4 mb-14">
        <span
          className="text-[10px] tracking-[0.24em] uppercase font-medium"
          style={{ color: "rgba(244, 239, 230, 0.5)" }}
        >
          Our Belief
        </span>
        <div style={{ width: "40px", height: "1px", background: "rgba(244, 239, 230, 0.2)" }} />
      </div>

      {/* Main layout: Large text left (~65%), whitespace right */}
      <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr]">
        <div>
          <p
            className="font-semibold leading-[1.08] tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 4.8vw, 5.2rem)",
              color: "#F4EFE6",
              letterSpacing: "-0.025em",
            }}
          >
            Exceptional work is never accidental. It&apos;s the product of ruthless clarity, fearless taste, and the discipline to subtract everything that doesn&apos;t matter.
          </p>
        </div>

        {/* Right side: intentionally left as high-contrast whitespace */}
        <div className="hidden md:block" aria-hidden="true" />
      </div>


    </section>
  );
}
