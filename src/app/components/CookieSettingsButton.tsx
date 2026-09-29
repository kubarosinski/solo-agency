"use client";

import { openCookieSettings } from "./CookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      aria-haspopup="dialog"
      className="text-[10px] tracking-[0.18em] uppercase font-medium nav-link bg-transparent border-none p-0"
    >
      Ustawienia cookies
    </button>
  );
}
