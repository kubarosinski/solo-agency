/*
 * UWAGA: to ogólny SZABLON regulaminu, a nie zweryfikowany dokument prawny.
 * Przed publikacją treść musi sprawdzić prawnik, a wszystkie pola w nawiasach
 * kwadratowych ([NAZWA FIRMY], [ADRES], [NIP] itd.) trzeba uzupełnić danymi firmy.
 */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "../components/LegalPage";
import JsonLd from "../components/JsonLd";

const title = "Regulamin — Solo Agency";
const description = "Regulamin korzystania z serwisu internetowego Solo Agency.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.soloagency.pl/regulamin",
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
  url: "https://www.soloagency.pl/regulamin",
  isPartOf: { "@id": "https://www.soloagency.pl/#organization" },
  inLanguage: "pl",
};

const sections: LegalSection[] = [
  {
    id: "postanowienia-ogolne",
    title: "Postanowienia ogólne",
    content: (
      <ol>
        <li>
          Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem
          www.soloagency.pl.
        </li>
        <li>
          Właścicielem i administratorem Serwisu jest [NAZWA FIRMY], [FORMA PRAWNA], z siedzibą pod adresem
          [ADRES], NIP: [NIP], REGON: [REGON], wpisana do [KRS / CEIDG] pod numerem [NUMER WPISU], [SĄD REJESTROWY
          — jeśli dotyczy], adres e-mail: [E-MAIL].
        </li>
        <li>
          Serwis ma charakter informacyjny. Prezentuje ofertę Usługodawcy i umożliwia kontakt z nim. Za
          pośrednictwem Serwisu nie są zawierane umowy sprzedaży ani umowy o świadczenie usług marketingowych.
        </li>
        <li>
          Korzystanie z Serwisu oznacza akceptację niniejszego regulaminu. Regulamin jest udostępniany
          nieodpłatnie w sposób umożliwiający jego pobranie, utrwalenie i wydrukowanie.
        </li>
      </ol>
    ),
  },
  {
    id: "definicje",
    title: "Definicje",
    content: (
      <ul>
        <li>
          <strong>Serwis</strong> — strona internetowa dostępna pod adresem www.soloagency.pl wraz ze wszystkimi
          podstronami.
        </li>
        <li>
          <strong>Usługodawca</strong> — [NAZWA FIRMY], dane jak w § 1 ust. 2.
        </li>
        <li>
          <strong>Użytkownik</strong> — każda osoba fizyczna, osoba prawna lub jednostka organizacyjna
          korzystająca z Serwisu.
        </li>
        <li>
          <strong>Formularz kontaktowy</strong> — formularz dostępny na podstronie Kontakt, umożliwiający
          przygotowanie wiadomości do Usługodawcy.
        </li>
        <li>
          <strong>Regulamin</strong> — niniejszy dokument.
        </li>
      </ul>
    ),
  },
  {
    id: "zasady-korzystania",
    title: "Zasady korzystania z Serwisu",
    content: (
      <ol>
        <li>Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji ani zakładania konta.</li>
        <li>
          Do korzystania z Serwisu potrzebne jest urządzenie z dostępem do internetu oraz aktualna wersja
          przeglądarki internetowej z włączoną obsługą JavaScript.
        </li>
        <li>
          Użytkownik zobowiązuje się korzystać z Serwisu zgodnie z prawem, dobrymi obyczajami i niniejszym
          regulaminem, w szczególności nie przesyłać treści o charakterze bezprawnym oraz nie podejmować
          działań zakłócających działanie Serwisu.
        </li>
        <li>
          Usługodawca dokłada starań, aby Serwis działał w sposób ciągły, ale zastrzega sobie prawo do
          przerw technicznych związanych z konserwacją, aktualizacją lub rozbudową Serwisu.
        </li>
      </ol>
    ),
  },
  {
    id: "wlasnosc-intelektualna",
    title: "Prawa własności intelektualnej",
    content: (
      <ol>
        <li>
          Wszelkie treści publikowane w Serwisie, w tym teksty, grafiki, zdjęcia, logo, znaki towarowe, układ
          i projekt graficzny, stanowią przedmiot praw Usługodawcy lub podmiotów, które udzieliły mu
          stosownych licencji, i podlegają ochronie prawnej.
        </li>
        <li>
          Kopiowanie, rozpowszechnianie, modyfikowanie lub wykorzystywanie treści Serwisu w celach
          komercyjnych bez uprzedniej pisemnej zgody Usługodawcy jest zabronione.
        </li>
        <li>
          Dozwolone jest korzystanie z treści Serwisu w zakresie dozwolonego użytku osobistego oraz
          przytaczanie fragmentów z podaniem źródła, na zasadach określonych w ustawie o prawie autorskim
          i prawach pokrewnych.
        </li>
      </ol>
    ),
  },
  {
    id: "formularz-kontaktowy",
    title: "Kontakt przez formularz",
    content: (
      <ol>
        <li>
          Formularz kontaktowy przygotowuje wiadomość e-mail do Usługodawcy. Po jego wypełnieniu i kliknięciu
          przycisku wysyłki otwiera się program pocztowy Użytkownika z uzupełnioną wiadomością, którą
          Użytkownik wysyła samodzielnie.
        </li>
        <li>
          Pola oznaczone gwiazdką są wymagane do przygotowania wiadomości. Podanie danych jest dobrowolne,
          ale niezbędne do udzielenia odpowiedzi.
        </li>
        <li>
          Wysłanie wiadomości nie stanowi zawarcia umowy. Usługodawca odpowiada na wiadomości w miarę
          możliwości w ciągu [LICZBA] dni roboczych.
        </li>
        <li>
          Zasady przetwarzania danych osobowych przekazanych w wiadomości opisuje{" "}
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>.
        </li>
      </ol>
    ),
  },
  {
    id: "odpowiedzialnosc",
    title: "Odpowiedzialność",
    content: (
      <ol>
        <li>
          Treści zamieszczone w Serwisie mają charakter informacyjny i nie stanowią oferty w rozumieniu
          Kodeksu cywilnego.
        </li>
        <li>
          Usługodawca nie ponosi odpowiedzialności za przerwy w działaniu Serwisu wynikające z przyczyn od
          niego niezależnych, w szczególności awarii sieci, sprzętu Użytkownika lub działania siły wyższej.
        </li>
        <li>
          Usługodawca nie odpowiada za treść stron internetowych podmiotów trzecich, do których mogą
          prowadzić odnośniki zamieszczone w Serwisie.
        </li>
        <li>
          Ograniczenia odpowiedzialności nie dotyczą przypadków, w których przepisy prawa nie pozwalają na ich
          wyłączenie.
        </li>
      </ol>
    ),
  },
  {
    id: "reklamacje",
    title: "Reklamacje",
    content: (
      <ol>
        <li>
          Użytkownik może zgłosić reklamację dotyczącą działania Serwisu na adres e-mail [E-MAIL] lub pisemnie
          na adres [ADRES].
        </li>
        <li>Reklamacja powinna zawierać dane kontaktowe Użytkownika oraz opis problemu.</li>
        <li>
          Usługodawca rozpatruje reklamację w terminie [LICZBA] dni od jej otrzymania i informuje
          Użytkownika o wyniku w sposób, w jaki reklamacja została złożona.
        </li>
      </ol>
    ),
  },
  {
    id: "postanowienia-koncowe",
    title: "Postanowienia końcowe",
    content: (
      <ol>
        <li>
          Usługodawca może zmienić regulamin z ważnych przyczyn, w szczególności zmiany przepisów prawa lub
          funkcjonalności Serwisu. Zmieniony regulamin obowiązuje od dnia jego publikacji w Serwisie.
        </li>
        <li>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego,
          w szczególności Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
        </li>
        <li>Regulamin obowiązuje od dnia [DATA WEJŚCIA W ŻYCIE].</li>
      </ol>
    ),
  },
];

export default function RegulaminPage() {
  return (
    <>
      <JsonLd data={schemaWebPage} />
      <LegalPage
        eyebrow="Informacje prawne"
        title="Regulamin"
        effectiveDate="[DATA WEJŚCIA W ŻYCIE]"
        sectionPrefix="§ "
        sections={sections}
      />
    </>
  );
}
