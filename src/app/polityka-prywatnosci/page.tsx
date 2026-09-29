/*
 * UWAGA: to SZABLON polityki prywatności do weryfikacji prawnej przed publikacją.
 * Nie jest to gotowy dokument prawny. Przed wdrożeniem:
 * - uzupełnij wszystkie pola w nawiasach kwadratowych ([NAZWA FIRMY], [ADRES], [NIP] itd.),
 * - daj treść do sprawdzenia prawnikowi lub inspektorowi ochrony danych,
 * - zaktualizuj sekcję "Pliki cookies" po dodaniu jakiegokolwiek narzędzia analitycznego
 *   lub marketingowego (wtedy także baner cookies musi dostać wybór Akceptuję/Odrzuć).
 * Stan na dzień przygotowania szablonu: serwis nie ładuje skryptów analitycznych ani
 * marketingowych i nie ustawia plików cookies; baner zapisuje tylko wpis w localStorage.
 */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "../components/LegalPage";
import JsonLd from "../components/JsonLd";
import { COOKIE_NOTICE_KEY } from "../components/cookie-notice-key";

const title = "Polityka prywatności — Solo Agency";
const description =
  "Jak Solo Agency przetwarza dane osobowe przekazane przez formularz kontaktowy i jakie informacje zapisuje w przeglądarce.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.soloagency.pl/polityka-prywatnosci",
    siteName: "Solo Agency",
    locale: "pl_PL",
    type: "website",
  },
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: "https://www.soloagency.pl/polityka-prywatnosci",
  isPartOf: { "@id": "https://www.soloagency.pl/#organization" },
  inLanguage: "pl",
};

const sections: LegalSection[] = [
  {
    id: "administrator",
    title: "Administrator danych",
    content: (
      <>
        <p>
          Administratorem Twoich danych osobowych jest [NAZWA FIRMY], [FORMA PRAWNA], z siedzibą pod adresem
          [ADRES], NIP: [NIP], REGON: [REGON], wpisana do [KRS / CEIDG] pod numerem [NUMER WPISU].
        </p>
        <p>
          W sprawach dotyczących danych osobowych możesz skontaktować się z nami pod adresem e-mail [E-MAIL]
          lub pisemnie na adres siedziby. [JEŚLI WYZNACZONO INSPEKTORA OCHRONY DANYCH: IMIĘ I NAZWISKO, E-MAIL
          IOD — W PRZECIWNYM RAZIE USUŃ TO ZDANIE.]
        </p>
        <p>
          Polityka dotyczy serwisu www.soloagency.pl i została przygotowana zgodnie z rozporządzeniem
          Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
        </p>
      </>
    ),
  },
  {
    id: "jakie-dane",
    title: "Jakie dane zbieramy",
    content: (
      <>
        <p>
          Dane osobowe otrzymujemy wyłącznie wtedy, gdy sam się z nami skontaktujesz. Formularz kontaktowy
          przygotowuje wiadomość, która otwiera się w Twoim programie pocztowym. Dane trafiają do nas dopiero
          wtedy, gdy ją wyślesz. Wiadomość może zawierać:
        </p>
        <ul>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu (jeśli go podasz, pole jest opcjonalne),</li>
          <li>treść wiadomości i inne informacje, które w niej przekażesz.</li>
        </ul>
        <p>
          Te same dane przetwarzamy, gdy piszesz do nas bezpośrednio na adres e-mail lub dzwonisz na numery
          podane w serwisie.
        </p>
        <p>
          Informacje o tym, co serwis zapisuje w Twojej przeglądarce, znajdziesz w sekcji{" "}
          <a href="#cookies">Pliki cookies i pamięć przeglądarki</a>.
        </p>
      </>
    ),
  },
  {
    id: "cele-i-podstawy",
    title: "Cele i podstawy prawne przetwarzania",
    content: (
      <ul>
        <li>
          <strong>Odpowiedź na wiadomość i prowadzenie korespondencji</strong> — na podstawie naszego prawnie
          uzasadnionego interesu polegającego na kontakcie z osobami, które do nas piszą (art. 6 ust. 1 lit. f
          RODO).
        </li>
        <li>
          <strong>Podjęcie działań przed zawarciem umowy</strong>, np. przygotowanie oferty na Twoją prośbę
          (art. 6 ust. 1 lit. b RODO).
        </li>
        <li>
          <strong>Ustalenie, dochodzenie lub obrona roszczeń</strong> — na podstawie prawnie uzasadnionego
          interesu (art. 6 ust. 1 lit. f RODO).
        </li>
        <li>
          <strong>Wypełnienie obowiązków prawnych</strong>, np. księgowych, jeśli dojdzie do współpracy
          (art. 6 ust. 1 lit. c RODO).
        </li>
      </ul>
    ),
  },
  {
    id: "odbiorcy",
    title: "Komu przekazujemy dane",
    content: (
      <>
        <p>Nie sprzedajemy danych osobowych. Dostęp do nich mogą mieć wyłącznie podmioty, które nam pomagają:</p>
        <ul>
          <li>dostawca poczty e-mail: [DOSTAWCA POCZTY E-MAIL],</li>
          <li>dostawca hostingu serwisu: [DOSTAWCA HOSTINGU],</li>
          <li>biuro rachunkowe, jeśli dojdzie do współpracy: [NAZWA BIURA — JEŚLI DOTYCZY],</li>
          <li>organy publiczne, gdy obowiązek przekazania danych wynika z przepisów prawa.</li>
        </ul>
        <p>
          Podmioty przetwarzające dane w naszym imieniu robią to na podstawie umowy powierzenia i tylko
          zgodnie z naszymi poleceniami. [JEŚLI KTÓRYKOLWIEK DOSTAWCA PRZETWARZA DANE POZA EOG: WSKAŻ KRAJ
          I PODSTAWĘ TRANSFERU, NP. STANDARDOWE KLAUZULE UMOWNE.]
        </p>
      </>
    ),
  },
  {
    id: "okres-przechowywania",
    title: "Jak długo przechowujemy dane",
    content: (
      <ul>
        <li>
          Korespondencję, która nie zakończyła się współpracą — przez [OKRES, NP. 12 MIESIĘCY] od ostatniej
          wiadomości.
        </li>
        <li>Dane związane z zawartą umową — przez czas jej trwania, a potem do upływu okresu przedawnienia roszczeń.</li>
        <li>Dane wymagane przepisami podatkowymi — przez okres wskazany w tych przepisach.</li>
        <li>Jeśli wniesiesz skuteczny sprzeciw, usuniemy dane wcześniej.</li>
      </ul>
    ),
  },
  {
    id: "prawa",
    title: "Twoje prawa",
    content: (
      <>
        <p>W związku z przetwarzaniem danych masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i otrzymania ich kopii,</li>
          <li>sprostowania danych, które są nieprawidłowe lub niekompletne,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>
            sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie administratora,
          </li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,
            uodo.gov.pl), jeśli uważasz, że przetwarzamy dane niezgodnie z prawem.
          </li>
        </ul>
        <p>
          Aby skorzystać z tych praw, napisz na adres [E-MAIL]. Odpowiemy bez zbędnej zwłoki, nie później niż
          w ciągu miesiąca.
        </p>
        <p>
          Podanie danych jest dobrowolne, ale bez adresu e-mail lub numeru telefonu nie będziemy mogli
          odpowiedzieć na wiadomość. Nie podejmujemy decyzji w sposób zautomatyzowany i nie profilujemy.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Pliki cookies i pamięć przeglądarki",
    content: (
      <>
        <p>
          Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu przez odwiedzane strony.
          Podobną rolę pełni pamięć przeglądarki (localStorage).
        </p>
        <p>
          <strong>
            Serwis nie używa plików cookies analitycznych ani marketingowych i nie ładuje skryptów podmiotów
            trzecich służących do śledzenia
          </strong>{" "}
          (takich jak Google Analytics, Google Ads czy piksel Meta). Czcionki są serwowane z naszego serwera,
          więc Twoja przeglądarka nie łączy się w tym celu z zewnętrznymi dostawcami.
        </p>
        <p>
          Serwis zapisuje w pamięci przeglądarki jeden niezbędny wpis ({COOKIE_NOTICE_KEY}). Zawiera on
          informację, że zamknięto komunikat o plikach cookies, oraz datę zamknięcia, dzięki czemu
          komunikat nie wyświetla się przy kolejnych wizytach. Wpis nie zawiera danych osobowych i nie jest
          wysyłany na serwer. Możesz go usunąć, czyszcząc dane witryny w ustawieniach przeglądarki. Wtedy
          komunikat pojawi się ponownie.
        </p>
        <p>
          [JEŚLI W PRZYSZŁOŚCI ZOSTANĄ DODANE NARZĘDZIA ANALITYCZNE LUB MARKETINGOWE: WYMIEŃ KAŻDE Z NICH
          (NAZWA, DOSTAWCA, CEL, CZAS PRZECHOWYWANIA COOKIES), PODZIELONE NA KATEGORIE: NIEZBĘDNE,
          ANALITYCZNE, MARKETINGOWE, I OPISZ, JAK WYCOFAĆ ZGODĘ.]
        </p>
        <p>
          Obsługę plików cookies możesz w każdej chwili zmienić w ustawieniach swojej przeglądarki, w tym
          zablokować ich zapisywanie lub usunąć zapisane pliki.
        </p>
      </>
    ),
  },
  {
    id: "zmiany",
    title: "Zmiany polityki prywatności",
    content: (
      <p>
        Możemy aktualizować tę politykę, np. po zmianie przepisów lub funkcji serwisu. Aktualna wersja jest
        zawsze dostępna na tej stronie, a data jej obowiązywania jest podana na górze. Zasady korzystania
        z serwisu opisuje <Link href="/regulamin">Regulamin</Link>.
      </p>
    ),
  },
  {
    id: "kontakt",
    title: "Kontakt w sprawie danych",
    content: (
      <p>
        [NAZWA FIRMY], [ADRES], e-mail: [E-MAIL], telefon: [TELEFON].
      </p>
    ),
  },
];

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <JsonLd data={schemaWebPage} />
      <LegalPage
        eyebrow="Informacje prawne"
        title="Polityka prywatności"
        effectiveDate="[DATA WEJŚCIA W ŻYCIE]"
        sections={sections}
      />
    </>
  );
}
