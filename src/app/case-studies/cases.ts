// Treść case study "01" przeniesiona 1:1 z SoloAgency_tresci_podstron.docx
// (client = pierwsze zdanie leadu; cta to tekst interfejsu, nie z pliku).
// Klienci A–D to dotychczasowe wpisy ze strony (nie ma ich w pliku .docx).
// slug = id elementu akordeonu (kotwica /case-studies#slug); teaser = karta na stronie głównej.

export type Inline = string | { strong: string };
export type Paragraph = string | Inline[];

export interface CaseStep {
  number: string;
  title: string;
  lead: string;
  body: string;
}

export interface CaseSection {
  label: string;
  heading?: string;
  paragraphs?: Paragraph[];
  steps?: CaseStep[];
}

export interface CaseStat {
  value: string;
  text: string;
  change?: string;
}

export interface CaseStudy {
  slug: string;
  category: string;
  client: string;
  title?: string;
  result?: string;
  cta: string;
  lead: string;
  facts?: { label: string; value: string }[];
  stats?: { label: string; items: CaseStat[] };
  sections?: CaseSection[];
  teaser: { challenge: string; result: CaseStat };
}

const bikeStats: CaseStat[] = [
  { value: "67", text: "fraz w TOP 3, wcześniej 13", change: "+415%" },
  { value: "232", text: "frazy w TOP 10, wcześniej 59", change: "+293%" },
  { value: "14", text: "miesięcy konsekwentnie realizowanej strategii" },
];

// TODO: uzupełnić — klienci A–D nie mają treści w .docx.
const todoTeaser = { challenge: "TODO: uzupełnić", result: { value: "[liczba]", text: "TODO: uzupełnić" } };

export const cases: CaseStudy[] = [
  {
    slug: "sklep-z-rowerami-dzieciecymi",
    category: "CASE STUDY — SEO / E-COMMERCE",
    client: "Sklep internetowy z rowerami dziecięcymi",
    title: "Nie ścigaliśmy liderów rynku. Wygraliśmy tam, gdzie ich nie było.",
    cta: "Zobacz, jak to zrobiliśmy",
    lead: "Sklep internetowy z rowerami dziecięcymi. Branża, w której najwięksi gracze od lat zajmują najlepsze miejsca w Google. Zamiast walczyć z nimi o najtrudniejsze frazy, znaleźliśmy segment, w którym mogliśmy wygrać, i zbudowaliśmy wokół niego całą strategię.",
    facts: [
      { label: "BRANŻA", value: "E-commerce, rowery dziecięce" },
      { label: "ZAKRES", value: "Strategia SEO, architektura serwisu, treści, link building, SEO techniczne" },
      { label: "CZAS TRWANIA", value: "14 miesięcy" },
    ],
    stats: {
      label: "W LICZBACH",
      items: bikeStats,
    },
    sections: [
      {
        label: "PUNKT WYJŚCIA",
        heading: "Ruch był. Potencjału nikt nie wykorzystał.",
        paragraphs: [
          "Sklep miał już ruch z Google, ale jego widoczność opierała się na wąskiej grupie fraz. Wystarczyłaby jedna zmiana w wynikach wyszukiwania, żeby stracił znaczną część odwiedzin.",
          "Najbardziej oczywista droga wzrostu była też najtrudniejsza. Frazy takie jak „rower dla dziecka” czy „rowery dziecięce” od lat należą do największych sklepów w branży. Bezpośrednia walka o te frazy oznaczałaby wiele miesięcy pracy bez gwarancji efektu.",
        ],
      },
      {
        label: "INSIGHT",
        heading: "Nie każda fraza jest warta walki.",
        paragraphs: [
          [
            "Zanim cokolwiek zmieniliśmy na stronie, przeanalizowaliśmy rynek, konkurencję i sposób, w jaki rodzice szukają rowerów dla dzieci. Z danych wyłonił się segment, który duzi gracze traktowali marginalnie: ",
            { strong: "lekkie rowery dla dzieci" },
            ".",
          ],
          "To była decyzja strategiczna, a nie jedna z wielu optymalizacji. Całą strategię SEO podporządkowaliśmy temu segmentowi: strukturę serwisu, treści, linkowanie i budowanie autorytetu.",
        ],
      },
      {
        label: "JAK PRACOWALIŚMY",
        steps: [
          {
            number: "01",
            title: "Architektura",
            lead: "Struktura, która odpowiada na to, jak ludzie szukają.",
            body: "Rozbudowaliśmy architekturę sklepu o nowe kategorie. Każda z nich odpowiada konkretnej intencji użytkownika, a nie wewnętrznemu podziałowi asortymentu. Dzięki temu Google dostał jasny sygnał, w czym ten sklep jest ekspertem, a użytkownicy szybciej trafiali tam, gdzie chcieli.",
          },
          {
            number: "02",
            title: "Treści",
            lead: "Odpowiedzi na każdym etapie decyzji zakupowej.",
            body: "Przygotowaliśmy i zoptymalizowaliśmy treści kategorii oraz podstron. Rozwinęliśmy też bloga, który odpowiada na pytania rodziców na różnych etapach, od „jaki rower wybrać” po porównanie konkretnych rozwiązań. Każdy artykuł miał swoje miejsce w strategii, żaden nie powstał po to, żeby „coś było”.",
          },
          {
            number: "03",
            title: "Linkowanie wewnętrzne",
            lead: "Ruch z bloga pracował na sprzedaż.",
            body: "Artykuły, które zdobywały ruch organiczny, nie żyły własnym życiem. Linkowaliśmy z nich do najważniejszych kategorii i kart produktów, przekazując autorytet tam, gdzie przekłada się on na zakupy. Treści edukacyjne stały się zapleczem dla stron sprzedażowych.",
          },
          {
            number: "04",
            title: "Autorytet i technika",
            lead: "Fundamenty, bez których reszta by nie działała.",
            body: "Równolegle prowadziliśmy link building i optymalizację techniczną: poprawiliśmy elementy wpływające na indeksację, strukturę strony i jej jakość z perspektywy wyszukiwarki. Te działania nie są efektowne, ale bez nich najlepsza strategia treści zatrzymuje się w miejscu.",
          },
        ],
      },
      {
        label: "WYNIKI",
        heading: "Pięć razy więcej fraz w TOP 3.",
        paragraphs: [
          "W ciągu 14 miesięcy liczba fraz w pierwszej trójce wyników Google wzrosła z 13 do 67, a w pierwszej dziesiątce z 59 do 232. Widoczność w segmencie lekkich rowerów dla dzieci rosła systematycznie, miesiąc po miesiącu.",
          "Sklep zyskał też coś trwalszego niż pozycje: rozbudowaną architekturę i bazę treści, które nadal pozyskują ruch i wspierają sprzedaż.",
        ],
      },
      {
        label: "WNIOSEK",
        heading: "Najlepsza strategia SEO często zaczyna się od decyzji, o co nie walczyć.",
        paragraphs: [
          "Wyniki nie przyszły z pojedynczej optymalizacji. Przyszły z decyzji, żeby skupić się na jednym segmencie i konsekwentnie odrzucać wszystko, co od niego odciągało. Technika, treści i linki były narzędziami. O wyniku zdecydowało zrozumienie rynku.",
        ],
      },
    ],
    teaser: {
      challenge: "Branża, w której najwięksi gracze od lat zajmują najlepsze miejsca w Google.",
      result: bikeStats[0],
    },
  },
  {
    slug: "klient-a",
    category: "SEO / Content",
    client: "Klient A",
    cta: "Pokaż opis projektu",
    result: "+320% ruchu organicznego w 6 miesięcy",
    lead: "Kompleksowa strategia SEO dla e-commerce z branży beauty — audyt techniczny, przebudowa architektury treści i kampania link buildingowa.",
    teaser: todoTeaser,
  },
  {
    slug: "klient-b",
    category: "Google Ads",
    client: "Klient B",
    cta: "Pokaż opis projektu",
    result: "ROAS 8.4× przy budżecie 30 000 zł/mies.",
    lead: "Optymalizacja kampanii Performance Max i Search dla sklepu z elektroniką — testy kreacji, segmentacja odbiorców i zarządzanie stawkami.",
    teaser: todoTeaser,
  },
  {
    slug: "klient-c",
    category: "Web Development / SEO",
    client: "Klient C",
    cta: "Pokaż opis projektu",
    result: "Czas ładowania skrócony o 67%, konwersja +41%",
    lead: "Przeprojektowanie i wdrożenie nowej strony dla firmy B2B — nacisk na Core Web Vitals, UX i integrację z CRM.",
    teaser: todoTeaser,
  },
  {
    slug: "klient-d",
    category: "Social Media / Content",
    client: "Klient D",
    cta: "Pokaż opis projektu",
    result: "+18 000 obserwujących w 4 miesiące",
    lead: "Strategia komunikacji i produkcja treści dla marki lifestyle — Instagram, LinkedIn i kampanie Meta Ads.",
    teaser: todoTeaser,
  },
];
