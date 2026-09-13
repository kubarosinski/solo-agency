import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Social Media — Solo Agency",
  description: "Strategia i prowadzenie mediów społecznościowych, które budują społeczność i sprzedają.",
};

export default function SocialMediaPage() {
  return (
    <ServicePage
      title="Social Media"
      subtitle="Social Media"
      description="Media społecznościowe to nie tylko posty — to ekosystem budowania relacji z klientami i wzmacniania marki. Tworzymy strategie, produkujemy treści i prowadzimy kanały, które angażują odbiorców i przekładają się na wyniki biznesowe."
      points={[
        "Strategia i planowanie komunikacji",
        "Tworzenie i publikacja treści",
        "Prowadzenie profili Instagram, LinkedIn, Facebook",
        "Kampanie reklamowe Meta Ads",
        "Współpraca z influencerami",
        "Analiza wyników i optymalizacja",
      ]}
    />
  );
}
