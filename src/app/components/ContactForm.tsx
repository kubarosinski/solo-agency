"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: "2px",
  padding: "16px 18px",
  fontSize: "1.05rem",
  color: "var(--foreground)",
  fontFamily: "inherit",
  transition: "border-color 0.15s ease",
};

const labelStyle: React.CSSProperties = {
  color: "var(--muted)",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Zapytanie od ${name || "klienta"}`);
    const body = encodeURIComponent(
      [
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n")
    );

    window.location.href = `mailto:hello@soloagency.pl?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-4 py-12">
        <span
          className="text-[10px] tracking-[0.22em] uppercase font-medium"
          style={labelStyle}
        >
          Wiadomość wysłana
        </span>
        <h3
          className="font-bold leading-tight"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--foreground)", letterSpacing: "-0.01em" }}
        >
          Dziękujemy. Odpowiemy w ciągu 24 godzin.
        </h3>
        <button
          onClick={() => setSent(false)}
          className="self-start mt-3 text-xs font-medium tracking-[0.12em] uppercase"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--foreground)", borderBottom: "1px solid var(--foreground)" }}
        >
          Napisz ponownie
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] tracking-[0.18em] uppercase font-medium" style={labelStyle}>
            Imię i nazwisko <span style={{ color: "#A9552F" }}>*</span>
          </span>
          <input name="name" type="text" required placeholder="Anna Kowalska" className="contact-field" style={fieldStyle} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] tracking-[0.18em] uppercase font-medium" style={labelStyle}>
            E-mail <span style={{ color: "#A9552F" }}>*</span>
          </span>
          <input name="email" type="email" required placeholder="anna@firma.pl" className="contact-field" style={fieldStyle} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[11px] tracking-[0.18em] uppercase font-medium" style={labelStyle}>
          Telefon <span style={{ color: "var(--muted)" }}>(opcjonalnie)</span>
        </span>
        <input name="phone" type="tel" placeholder="+48 600 000 000" className="contact-field" style={fieldStyle} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[11px] tracking-[0.18em] uppercase font-medium" style={labelStyle}>
          Wiadomość <span style={{ color: "#A9552F" }}>*</span>
        </span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Czego potrzebujesz i na kiedy?"
          className="contact-field"
          style={{ ...fieldStyle, lineHeight: 1.55, resize: "vertical" }}
        />
      </label>

      <div className="flex items-center justify-between gap-6 flex-wrap">
        <button
          type="submit"
          className="contact-submit inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] uppercase"
          style={{
            background: "var(--foreground)",
            color: "#F4EFE6",
            border: "none",
            borderRadius: "2px",
            padding: "18px 30px",
            cursor: "pointer",
          }}
        >
          Wyślij wiadomość
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-xs leading-relaxed" style={{ color: "var(--muted)", maxWidth: "220px" }}>
          Odpowiadamy w ciągu 24 godzin w dni robocze.
        </span>
      </div>
    </form>
  );
}
