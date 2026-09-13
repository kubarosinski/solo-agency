import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "SEO — Solo Agency",
  description: "Pozycjonowanie organiczne, które buduje trwałą widoczność Twojej marki w wyszukiwarce.",
};

export default function SeoPage() {
  return (
    <ServicePage
      title="SEO"
      subtitle="SEO"
      description="Pozycjonowanie organiczne to fundament długoterminowej widoczności w internecie. Łączymy głęboką analizę techniczną z budowaniem autorytetu treści, aby Twoja marka zajmowała najwyższe miejsca tam, gdzie szukają jej klienci."
      points={[
        "Audyt techniczny i optymalizacja strony",
        "Badanie słów kluczowych i strategia treści",
        "Link building i budowanie autorytetu domeny",
        "SEO lokalne i Google Moja Firma",
        "Monitoring pozycji i raportowanie",
        "Optymalizacja Core Web Vitals",
      ]}
    />
  );
}
