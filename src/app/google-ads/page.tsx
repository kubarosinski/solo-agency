import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Google Ads — Solo Agency",
  description: "Kampanie Google Ads z precyzyjnym targetowaniem i maksymalnym zwrotem z inwestycji.",
};

export default function GoogleAdsPage() {
  return (
    <ServicePage
      title="Google Ads"
      subtitle="Google Ads"
      description="Płatne kampanie w Google to najszybsza droga do pozyskania klientów, którzy aktywnie szukają Twojej oferty. Tworzymy i optymalizujemy kampanie, które generują realne wyniki — nie tylko kliknięcia, ale przychody."
      points={[
        "Kampanie Search i Performance Max",
        "Remarketing i kampanie display",
        "Kampanie produktowe Google Shopping",
        "Optymalizacja stawek i budżetów",
        "Testy A/B reklam i landing page",
        "Szczegółowe raportowanie i analityka",
      ]}
    />
  );
}
