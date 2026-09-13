import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "AI Search — Solo Agency",
  description: "Optymalizacja pod wyszukiwarki AI — bądź widoczny tam, gdzie szuka nowe pokolenie.",
};

export default function AiSearchPage() {
  return (
    <ServicePage
      title="AI Search"
      subtitle="AI Search"
      description="Wyszukiwarki oparte na AI — jak ChatGPT, Perplexity czy Google SGE — zmieniają sposób, w jaki ludzie znajdują informacje. Pomagamy markom być widocznymi i cytowanymi przez modele językowe, zanim konkurencja to zauważy."
      points={[
        "Optymalizacja treści pod modele językowe (LLM)",
        "Strategia obecności w Google SGE",
        "Budowanie autorytetu marki w ekosystemie AI",
        "Tworzenie treści przyjaznych dla AI Search",
        "Monitoring widoczności w narzędziach AI",
        "Analiza cytowań marki przez modele AI",
      ]}
    />
  );
}
