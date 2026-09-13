import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Content — Solo Agency",
  description: "Treści, które pozycjonują, angażują i sprzedają — od strategii po realizację.",
};

export default function ContentPage() {
  return (
    <ServicePage
      title="Content"
      subtitle="Content"
      description="Dobra treść to fundament każdej strategii cyfrowej. Tworzymy artykuły, copywriting i materiały contentowe, które odpowiadają na pytania odbiorców, budują autorytet marki i wspierają widoczność w wyszukiwarkach."
      points={[
        "Strategia contentowa i plan redakcyjny",
        "Artykuły blogowe i eksperckie",
        "Copywriting — strony, landing page, reklamy",
        "Treści zoptymalizowane pod SEO",
        "E-booki, raporty i materiały edukacyjne",
        "Opisy produktów i kategorii e-commerce",
      ]}
    />
  );
}
