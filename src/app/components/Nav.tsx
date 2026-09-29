"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const subItems = [
  { label: "SEO",             href: "/seo" },
  { label: "AI Search",       href: "/ai-search" },
  { label: "Web Development", href: "/web-development" },
  { label: "Google Ads",      href: "/google-ads" },
  { label: "Social Media",    href: "/social-media" },
  { label: "Content",         href: "/content" },
  { label: "Case Studies",    href: "/case-studies" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Esc zamyka rozwinięte menu; panel mobilny blokuje przewijanie tła
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpen(false);
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    panelRef.current?.querySelector("a")?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setSubOpen(false);
  }

  return (
    <nav aria-label="Main navigation">
      {/* ── Desktop ── */}
      <ul className="hidden md:flex items-center gap-8 md:gap-10 list-none m-0 p-0">

        {/* O nas */}
        <li>
          <Link
            href="/o-nas"
            className="nav-link text-xs font-medium uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            O nas
          </Link>
        </li>

        {/* Kompetencje z dropdown */}
        <li ref={ref} className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="nav-link text-xs font-medium uppercase flex items-center gap-1 bg-transparent border-none cursor-pointer p-0"
            style={{ letterSpacing: "0.15em" }}
            aria-expanded={open}
            aria-haspopup="true"
          >
            Kompetencje
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
              style={{
                transition: "transform 0.2s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                d="M2 3.5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown panel */}
          {open && (
            <ul
              className="absolute right-0 top-[calc(100%+1.2rem)] list-none m-0 p-0 flex flex-col"
              style={{
                background: "rgba(244, 239, 230, 0.98)",
                backdropFilter: "blur(20px)",
                minWidth: "240px",
                boxShadow: "0 12px 48px rgba(53, 94, 88, 0.13)",
              }}
            >
              {subItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{
                    borderTop: i === 0 ? "none" : "1px solid rgba(53, 94, 88, 0.1)",
                  }}
                >
                  <Link
                    href={item.href}
                    className="nav-link flex items-center justify-between px-6 py-4 text-xs font-medium uppercase group"
                    style={{ letterSpacing: "0.13em" }}
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      style={{ opacity: 0.35 }}
                    >
                      <path
                        d="M2.5 9.5l7-7M4 2.5h5.5V8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Kontakt */}
        <li>
          <Link
            href="/kontakt"
            className="nav-link text-xs font-medium uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Kontakt
          </Link>
        </li>

      </ul>

      {/* ── Mobile: przycisk + panel ── */}
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        className="md:hidden flex flex-col items-end justify-center gap-[5px] bg-transparent border-none p-0 -mr-2 pr-2"
        style={{ width: "44px", height: "44px", color: "var(--foreground)" }}
      >
        <span
          aria-hidden="true"
          className="block h-px"
          style={{
            width: "22px",
            background: "currentColor",
            transition: "transform 0.25s ease",
            transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
          }}
        />
        <span
          aria-hidden="true"
          className="block h-px"
          style={{
            width: "22px",
            background: "currentColor",
            transition: "transform 0.25s ease",
            transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${menuOpen ? "flex" : "hidden"} md:hidden flex-col absolute left-0 right-0 top-full max-h-[80vh] overflow-y-auto`}
        style={{
          background: "var(--background)",
          borderTop: "1px solid var(--border)",
          boxShadow: "0 16px 48px rgba(53, 94, 88, 0.13)",
        }}
      >
        <Link
          href="/o-nas"
          onClick={closeMenu}
          className="nav-link flex items-center px-6 text-xs font-medium uppercase"
          style={{ letterSpacing: "0.15em", minHeight: "56px", borderBottom: "1px solid var(--border)" }}
        >
          O nas
        </Link>

        <button
          type="button"
          onClick={() => setSubOpen((v) => !v)}
          aria-expanded={subOpen}
          aria-controls="mobile-submenu"
          className="nav-link flex items-center justify-between w-full px-6 text-xs font-medium uppercase bg-transparent border-none"
          style={{ letterSpacing: "0.15em", minHeight: "56px", borderBottom: "1px solid var(--border)", font: "inherit" }}
        >
          Kompetencje
          <svg
            width="12"
            height="12"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
            style={{ transition: "transform 0.25s ease", transform: subOpen ? "rotate(180deg)" : "none" }}
          >
            <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <ul
          id="mobile-submenu"
          className={`${subOpen ? "flex" : "hidden"} flex-col list-none m-0 p-0`}
          style={{ background: "#ECE9E0" }}
        >
          {subItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="nav-link flex items-center pl-10 pr-6 text-xs font-medium uppercase"
                style={{ letterSpacing: "0.13em", minHeight: "52px", borderBottom: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/kontakt"
          onClick={closeMenu}
          className="nav-link flex items-center px-6 text-xs font-medium uppercase"
          style={{ letterSpacing: "0.15em", minHeight: "56px" }}
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
