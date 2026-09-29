"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_VERSION, type CookieConsentState } from "./cookie-consent";

// Serwis nie ładuje dziś żadnych skryptów analitycznych ani marketingowych. Gdy zostaną dodane,
// ładuj je warunkowo, np.: const consent = useCookieConsent(); {consent?.analytics && <Script ... />}
// albo nasłuchuj zdarzenia "cookieconsentchange" na window. Nigdy nie ładuj ich przed zgodą.

const LEGACY_NOTICE_KEY = "solo-cookie-notice";
// Na tych stronach okno nie otwiera się samo, żeby dało się przeczytać dokumenty przed decyzją.
const LEGAL_PATHS = new Set(["/polityka-prywatnosci", "/regulamin"]);

interface Snapshot {
  ready: boolean;
  consent: CookieConsentState | null;
  settingsOpen: boolean;
}

const SERVER_SNAPSHOT: Snapshot = { ready: false, consent: null, settingsOpen: false };
const listeners = new Set<() => void>();
// Gdy przeglądarka blokuje localStorage (np. tryb prywatny), wybór obowiązuje do końca wizyty.
let memoryConsent: CookieConsentState | null = null;
let settingsOpen = false;
let cached: { raw: string | null; memory: CookieConsentState | null; open: boolean; snapshot: Snapshot } | null = null;

function readRaw() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): CookieConsentState | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as CookieConsentState;
    return value?.version === COOKIE_CONSENT_VERSION ? value : null;
  } catch {
    return null;
  }
}

function getSnapshot(): Snapshot {
  const raw = readRaw();
  if (cached && cached.raw === raw && cached.memory === memoryConsent && cached.open === settingsOpen) {
    return cached.snapshot;
  }
  const snapshot = { ready: true, consent: parse(raw) ?? memoryConsent, settingsOpen };
  cached = { raw, memory: memoryConsent, open: settingsOpen, snapshot };
  return snapshot;
}

const getServerSnapshot = () => SERVER_SNAPSHOT;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function notify() {
  listeners.forEach((listener) => listener());
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: CookieConsentState = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    marketing,
    date: new Date().toISOString(),
  };
  memoryConsent = consent;
  settingsOpen = false;
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    localStorage.removeItem(LEGACY_NOTICE_KEY);
  } catch {}
  notify();
  window.dispatchEvent(new CustomEvent("cookieconsentchange", { detail: consent }));
}

export function openCookieSettings() {
  settingsOpen = true;
  notify();
}

function closeCookieSettings() {
  settingsOpen = false;
  notify();
}

/** Aktualna zgoda (null = brak decyzji albo render na serwerze). */
export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).consent;
}

export default function CookieConsent() {
  const { ready, consent, settingsOpen: reopened } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();
  const open = ready && (reopened || (consent === null && !LEGAL_PATHS.has(pathname)));
  if (!open) return null;
  return <ConsentDialog initial={consent} startWithDetails={reopened} />;
}

const categories = [
  {
    key: "necessary",
    title: "Niezbędne",
    description:
      "Zapamiętują Twój wybór dotyczący plików cookies i zapewniają podstawowe działanie strony. Nie można ich wyłączyć.",
  },
  {
    key: "analytics",
    title: "Analityczne",
    description:
      "Pomagają zrozumieć, jak odwiedzający korzystają ze strony, np. ile jest wizyt i które podstrony są czytane, dzięki czemu możemy ją ulepszać.",
  },
  {
    key: "marketing",
    title: "Marketingowe",
    description:
      "Służą do mierzenia skuteczności reklam i wyświetlania reklam dopasowanych do Twoich zainteresowań w innych serwisach.",
  },
] as const;

function ConsentDialog({ initial, startWithDetails }: { initial: CookieConsentState | null; startWithDetails: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstSwitchRef = useRef<HTMLInputElement>(null);
  const [showDetails, setShowDetails] = useState(startWithDetails);
  const [choice, setChoice] = useState({ analytics: initial?.analytics ?? false, marketing: initial?.marketing ?? false });
  const id = useId();
  const dismissible = initial !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    // Fokus na tytule: czytnik ekranu zaczyna od nazwy okna, a żaden przycisk nie jest podświetlony z góry.
    headingRef.current?.focus();
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
      if (dialog.open) dialog.close();
    };
  }, []);

  function decide(analytics: boolean, marketing: boolean) {
    // close() przed odmontowaniem, żeby przeglądarka oddała fokus tam, gdzie był przed otwarciem
    dialogRef.current?.close();
    saveConsent(analytics, marketing);
  }

  function expand() {
    setShowDetails(true);
    // przycisk "Dostosuj" znika — fokus przechodzi na pierwszy przełącznik zamiast do <body>
    requestAnimationFrame(() => firstSwitchRef.current?.focus());
  }

  return (
    <dialog
      ref={dialogRef}
      className="cookie-consent"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      onCancel={(e) => {
        // Esc przy pierwszej wizycie nie może oznaczać zgody ani odmowy — wymagamy wyboru.
        e.preventDefault();
        if (dismissible) {
          dialogRef.current?.close();
          closeCookieSettings();
        }
      }}
    >
      <div className="flex flex-col gap-6">
        <h2
          ref={headingRef}
          id={`${id}-title`}
          tabIndex={-1}
          className="font-semibold leading-tight outline-none"
          style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Pliki cookies
        </h2>
        <div id={`${id}-desc`} className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Używamy plików cookies i podobnych technologii. Niezbędne są potrzebne do działania strony, a
            analityczne i marketingowe włączymy tylko za Twoją zgodą.
          </p>
          <p>
            Możesz zaakceptować wszystkie, odrzucić opcjonalne albo wybrać, na które się zgadzasz. Decyzję
            zmienisz w każdej chwili w stopce strony, w „Ustawieniach cookies”. Szczegóły znajdziesz
            w{" "}
            <Link href="/polityka-prywatnosci#cookies" className="consent-link">
              polityce prywatności
            </Link>
            .
          </p>
        </div>

        {showDetails && (
          <fieldset className="m-0 p-0 border-0">
            <legend className="text-[11px] tracking-[0.18em] uppercase font-medium mb-2" style={{ color: "var(--muted)" }}>
              Rodzaje plików cookies
            </legend>
            {categories.map((cat) => {
              const inputId = `${id}-${cat.key}`;
              const isNecessary = cat.key === "necessary";
              return (
                <div
                  key={cat.key}
                  className="flex items-start justify-between gap-4 py-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div className="flex flex-col gap-1">
                    <label htmlFor={inputId} className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      {cat.title}
                      {isNecessary && (
                        <span className="font-normal" style={{ color: "var(--muted)" }}>
                          {" "}
                          — zawsze aktywne
                        </span>
                      )}
                    </label>
                    <p id={`${inputId}-desc`} className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {cat.description}
                    </p>
                  </div>
                  <input
                    ref={cat.key === "analytics" ? firstSwitchRef : undefined}
                    id={inputId}
                    type="checkbox"
                    role="switch"
                    className="consent-switch mt-0.5"
                    aria-describedby={`${inputId}-desc`}
                    checked={isNecessary ? true : choice[cat.key]}
                    disabled={isNecessary}
                    onChange={(e) => {
                      if (!isNecessary) setChoice((c) => ({ ...c, [cat.key]: e.target.checked }));
                    }}
                  />
                </div>
              );
            })}
          </fieldset>
        )}

        <div className="consent-actions grid grid-cols-2 gap-3 sm:flex sm:justify-end">
          <button type="button" className="consent-btn" onClick={() => decide(false, false)}>
            Odrzucam
          </button>
          {showDetails ? (
            <button type="button" className="consent-btn" onClick={() => decide(choice.analytics, choice.marketing)}>
              Zapisz wybór
            </button>
          ) : (
            <button type="button" className="consent-btn" onClick={expand}>
              Dostosuj
            </button>
          )}
          <button type="button" className="consent-btn consent-btn--primary col-span-2" onClick={() => decide(true, true)}>
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </dialog>
  );
}
