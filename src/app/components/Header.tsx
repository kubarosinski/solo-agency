import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-14"
      style={{
        background: "rgba(244, 239, 230, 0.82)",
        backdropFilter: "blur(18px)",
      }}
    >
      {/* Logo — typographic, serif, two-weight */}
      <a
        href="/"
        aria-label="Home"
        className="flex items-baseline gap-0 leading-none"
        style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
      >
        <span
          style={{
            fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Solo
        </span>
        <span
          style={{
            fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Agency
        </span>
      </a>

      <Nav />
    </header>
  );
}
