import Header from "./components/Header";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Process from "./components/Process";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Statement />
        <Process />
        <Services />
      </main>

      {/* Minimal footer */}
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
        <span
          className="text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--muted)" }}
        >
          All rights reserved
        </span>
      </footer>
    </>
  );
}
