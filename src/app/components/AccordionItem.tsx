"use client";

import { useId, useState, useSyncExternalStore } from "react";

interface AccordionItemProps {
  id?: string;
  header: React.ReactNode;
  cta: string;
  children: React.ReactNode;
}

// Jeden listener na całą stronę, niezależnie od liczby elementów akordeonu.
// version rośnie przy każdej zmianie hasha, także przy powrocie do tej samej kotwicy.
const SERVER_HASH = { hash: "", version: 0 };
let hashState = SERVER_HASH;
const hashListeners = new Set<() => void>();

function readHash() {
  hashState = { hash: window.location.hash, version: hashState.version + 1 };
  hashListeners.forEach((notify) => notify());
}

function subscribeToHash(onChange: () => void) {
  if (hashListeners.size === 0) readHash();
  hashListeners.add(onChange);
  window.addEventListener("hashchange", readHash);
  return () => {
    hashListeners.delete(onChange);
    if (hashListeners.size === 0) window.removeEventListener("hashchange", readHash);
  };
}

const getHash = () => hashState;
const getServerHash = () => SERVER_HASH;

// Treść jest zawsze w DOM (także w HTML z serwera) — zwijanie odbywa się wyłącznie przez CSS.
// Wejście z kotwicą (#id) otwiera element; każda zmiana hasha kasuje ręczne przełączenie.
export default function AccordionItem({ id: anchorId, header, cta, children }: AccordionItemProps) {
  const { hash, version } = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const [toggled, setToggled] = useState<{ version: number; open: boolean } | null>(null);
  const open = toggled?.version === version ? toggled.open : anchorId !== undefined && hash === `#${anchorId}`;

  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <>
      <h2 id={anchorId} className="m-0 scroll-mt-24">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setToggled({ version, open: !open })}
          className="accordion-trigger grid items-start text-left bg-transparent border-none -mx-3 px-3 md:-mx-4 md:px-4 w-[calc(100%+1.5rem)] md:w-[calc(100%+2rem)] py-10 md:py-14 gap-x-6 md:gap-x-10 gap-y-6 grid-cols-[1fr_auto]"
          style={{ color: "inherit", font: "inherit" }}
        >
          {header}
          <span
            className="accordion-icon relative block w-5 h-5 md:w-6 md:h-6 mt-1"
            aria-hidden="true"
            data-open={open}
          >
            <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2" style={{ background: "currentColor" }} />
            <span className="accordion-icon-v absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" style={{ background: "currentColor" }} />
          </span>
          <span className="col-start-1 justify-self-start inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase accordion-cta">
            {open ? "Zwiń" : cta}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="accordion-cta-arrow" data-open={open}>
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="accordion-panel"
        data-open={open}
        inert={!open}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </>
  );
}
