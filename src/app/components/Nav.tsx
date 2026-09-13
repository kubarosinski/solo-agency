"use client";

import { useState, useRef, useEffect } from "react";

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
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8 md:gap-10 list-none m-0 p-0">

        {/* O nas */}
        <li>
          <a
            href="/o-nas"
            className="nav-link text-xs font-medium uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            O nas
          </a>
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
                  <a
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
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Kontakt */}
        <li>
          <a
            href="/kontakt"
            className="nav-link text-xs font-medium uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Kontakt
          </a>
        </li>

      </ul>
    </nav>
  );
}

