"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { COOKIE_NOTICE_KEY } from "./cookie-notice-key";

// Serwis nie ładuje skryptów analitycznych ani marketingowych, więc baner tylko informuje
// i ma jeden przycisk. Po dodaniu takich narzędzi potrzebny będzie wybór Akceptuję/Odrzuć
// i ładowanie skryptów dopiero po zgodzie.

const listeners = new Set<() => void>();
// Gdy przeglądarka blokuje localStorage (np. tryb prywatny), decyzja obowiązuje do końca wizyty.
let dismissedInMemory = false;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  if (dismissedInMemory) return true;
  try {
    return localStorage.getItem(COOKIE_NOTICE_KEY) !== null;
  } catch {
    return false;
  }
}

// Na serwerze baner nie jest renderowany — powracający użytkownik nie zobaczy mignięcia.
const getServerSnapshot = () => true;

function dismiss() {
  dismissedInMemory = true;
  try {
    localStorage.setItem(
      COOKIE_NOTICE_KEY,
      JSON.stringify({ choice: "necessary-only", date: new Date().toISOString() })
    );
  } catch {}
  listeners.forEach((notify) => notify());
}

export default function CookieNotice() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (dismissed) return null;

  return (
    <section
      aria-labelledby="cookie-notice-heading"
      className="fixed z-40 bottom-6 left-6 right-6 md:left-auto md:right-14 md:bottom-8 md:max-w-md flex flex-col gap-4 md:gap-5 p-5 md:p-6"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        boxShadow: "0 12px 48px rgba(53, 94, 88, 0.13)",
      }}
    >
      <p
        id="cookie-notice-heading"
        className="sr-only md:not-sr-only text-[11px] tracking-[0.18em] uppercase font-medium"
        style={{ color: "var(--muted)" }}
      >
        Pliki cookies
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
        Nie używamy cookies analitycznych ani marketingowych. W przeglądarce zapisujemy tylko informację,
        że ten komunikat został zamknięty.
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="button"
          onClick={dismiss}
          className="contact-submit inline-flex items-center text-xs font-semibold tracking-[0.14em] uppercase"
          style={{
            background: "var(--foreground)",
            color: "#F4EFE6",
            border: "none",
            borderRadius: "2px",
            padding: "14px 24px",
          }}
        >
          Rozumiem
        </button>
        <Link
          href="/polityka-prywatnosci#cookies"
          className="text-link text-xs font-medium tracking-[0.16em] uppercase"
        >
          Polityka prywatności
        </Link>
      </div>
    </section>
  );
}
