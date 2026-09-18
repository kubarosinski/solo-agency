const categories = [
  {
    bgLabel: "Search",
    services: [
      {
        label: "SEO",
        href: "/seo",
        desc: "Budujemy trwałą widoczność organiczną — od audytu technicznego po strategię treści i link building.",
      },
      {
        label: "AI Search",
        href: "/ai-search",
        desc: "Optymalizujemy obecność marki pod modele językowe i wyszukiwarki AI, takie jak ChatGPT czy Google SGE.",
      },
    ],
  },
  {
    bgLabel: "Digital",
    services: [
      {
        label: "Web Development",
        href: "/web-development",
        desc: "Projektujemy i wdrażamy strony oraz aplikacje webowe — szybkie, estetyczne i skuteczne sprzedażowo.",
      },
      {
        label: "Google Ads",
        href: "/google-ads",
        desc: "Prowadzimy kampanie płatne w Google z precyzyjnym targetowaniem i maksymalnym zwrotem z inwestycji.",
      },
    ],
  },
  {
    bgLabel: "Social",
    services: [
      {
        label: "Social Media",
        href: "/social-media",
        desc: "Tworzymy strategię, produkujemy treści i zarządzamy kanałami społecznościowymi, które angażują i sprzedają.",
      },
      {
        label: "Content",
        href: "/content",
        desc: "Piszemy artykuły, opisy i materiały contentowe, które pozycjonują markę i przyciągają właściwych odbiorców.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      className="w-full py-28 md:py-36 px-6 md:px-14"
      style={{ background: "#355E58" }}
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-24 md:mb-32">
        <span
          className="text-[10px] tracking-[0.24em] uppercase font-medium"
          style={{ color: "rgba(244, 239, 230, 0.5)" }}
        >
          Czym się zajmujemy
        </span>
        <div style={{ width: "40px", height: "1px", background: "rgba(244, 239, 230, 0.2)" }} />
      </div>

      {/* Categories — stacked, each with bg text + foreground pills */}
      <div className="flex flex-col gap-0">
        {categories.map((cat, i) => (
          <div
            key={cat.bgLabel}
            className="relative flex items-center overflow-hidden"
            style={{
              borderTop: i === 0 ? "none" : "1px solid rgba(244, 239, 230, 0.12)",
              height: "clamp(8rem, 13vw, 13rem)",
            }}
          >
            {/* ─── Background ghost text — font-size > height, overflow:hidden odetnie ─── */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-0 font-semibold"
              style={{
                fontSize: "clamp(11rem, 18vw, 18rem)",
                lineHeight: "0.78",
                color: "transparent",
                WebkitTextStroke: "1px rgba(244, 239, 230, 0.18)",
                letterSpacing: "-0.04em",
                whiteSpace: "nowrap",
                transform: "translateX(-1%)",
                userSelect: "none",
              }}
            >
              {cat.bgLabel}
            </span>

            {/* ─── Pills po prawej ─── */}
            <div className="relative z-10 ml-auto flex flex-col items-end gap-3">
              {cat.services.map((svc) => (
                <a
                  key={svc.href}
                  href={svc.href}
                  className="service-pill group inline-flex items-center gap-3 px-5 py-2.5"
                  style={{
                    border: "none",
                    color: "#F4EFE6",
                    textDecoration: "none",
                    transition: "background 0.22s ease, color 0.22s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="text-xs font-medium uppercase"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {svc.label}
                  </span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    aria-hidden="true"
                    style={{ opacity: 0.55, transition: "transform 0.22s ease, opacity 0.22s ease" }}
                  >
                    <path
                      d="M1.5 9.5L9.5 1.5M4 1.5h5.5v5.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom border */}
        <div style={{ height: "1px", background: "rgba(244, 239, 230, 0.12)" }} />
      </div>
    </section>
  );
}
