import { homeStats } from "../home-stats";

export default function Stats() {
  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-14" aria-label="Solo Agency w liczbach">
      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3">
        {homeStats.map((s, i) => (
          <li
            key={s.label}
            className={`flex flex-col gap-3 py-8 sm:py-0 ${
              i > 0 ? "border-t sm:border-t-0 sm:border-l border-border sm:pl-8 md:pl-12" : ""
            }`}
          >
            <span
              className="font-semibold leading-none tabular-nums"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              {s.value}
            </span>
            <span className="text-[10px] tracking-[0.24em] uppercase font-medium" style={{ color: "var(--muted)" }}>
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
