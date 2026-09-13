import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Web Development — Solo Agency",
  description: "Strony i aplikacje webowe, które działają szybko, wyglądają elegancko i konwertują.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      title="Web Development"
      subtitle="Web Development"
      description="Projektujemy i budujemy strony internetowe oraz aplikacje webowe, które są nie tylko estetyczne, ale przede wszystkim skuteczne. Każdy projekt to połączenie przemyślanego UX, czystego kodu i pełnej optymalizacji pod wyniki biznesowe."
      points={[
        "Strony internetowe i landing page",
        "Aplikacje webowe i platformy SaaS",
        "Sklepy internetowe i e-commerce",
        "Optymalizacja szybkości i Core Web Vitals",
        "Integracje z systemami zewnętrznymi",
        "Utrzymanie i rozwój istniejących serwisów",
      ]}
    />
  );
}
