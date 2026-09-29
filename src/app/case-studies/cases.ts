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



const akrobatyka: CaseStat[] = [
  { value: "80", text: "fraz w TOP 3, wcześniej 0", change: "+80" },
  { value: "214", text: "fraz w TOP 10 po 11 miesiącach", change: "+214" },
  { value: "11", text: "miesięcy od startu do lidera lokalnego" },
];

const odlewnia: CaseStat[] = [
  { value: "2.1s", text: "czas ładowania strony, wcześniej 9.4 s", change: "−78%" },
  { value: "94", text: "wynik Core Web Vitals (PageSpeed), wcześniej 31" },
  { value: "3×", text: "wzrost ruchu organicznego po migracji" },
];

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
    slug: "szkola-akrobatyki",
    category: "CASE STUDY — SEO / USŁUGI LOKALNE",
    client: "Szkoła akrobatyki",
    title: "Od zera do 80 fraz w TOP 3.",
    cta: "Zobacz, jak to zrobiliśmy",
    lead: "Szkoła akrobatyki bez jakiejkolwiek historii SEO. Brak pozycji, brak ruchu organicznego, brak treści zoptymalizowanych pod wyszukiwarkę. Zaczęliśmy od czystego arkusza i w jedenaście miesięcy zbudowaliśmy widoczność, która dziś odpowiada za większość nowych zapisów.",
    facts: [
      { label: "BRANŻA", value: "Usługi lokalne, szkoła akrobatyki i gimnastyki" },
      { label: "ZAKRES", value: "Strategia SEO, audyt techniczny, architektura serwisu, treści, SEO lokalne, link building" },
      { label: "CZAS TRWANIA", value: "11 miesięcy" },
    ],
    stats: { label: "W LICZBACH", items: akrobatyka },
    sections: [
      {
        label: "PUNKT WYJŚCIA",
        heading: "Strona istniała. Google jej nie widział.",
        paragraphs: [
          "Szkoła miała stronę internetową — ale bez żadnej optymalizacji. Zero fraz w TOP 50, brak profilu Google Business, treści napisane bez myśli o wyszukiwarkach. Potencjalni kursanci szukali zajęć w Google i trafiał do konkurencji.",
          "Branża lokalnych szkół sportowych jest specyficzna: wyszukiwania są precyzyjne geograficznie i mocno sezonowe — szczyt zapisów przypada na sierpień i wrzesień. Oznaczało to, że mieliśmy konkretny deadline, do którego musiała działać widoczność.",
        ],
      },
      {
        label: "INSIGHT",
        heading: "W lokalnym SEO wygrywa ten, kto odpowiada najdokładniej.",
        paragraphs: [
          [
            "Analiza zapytań pokazała, że rodzice szukają bardzo konkretnie — nie ogólne hasło 'akrobatyka', lecz ",
            { strong: "akrobatyka dla dzieci w Twoim mieście" },
            ", zajęcia gimnastyczne w konkretnej dzielnicy, szkołę akrobatyki dla konkretnego wieku. Każde z tych zapytań to oddzielna intencja — i oddzielna szansa na pozycję.",
          ],
          "Postanowiliśmy zbudować architekturę serwisu wokół tych intencji: osobne podstrony dla każdego rodzaju zajęć, każdego przedziału wiekowego i każdej lokalizacji. Zamiast jednej ogólnej strony — precyzyjny system odpowiedzi na konkretne pytania.",
        ],
      },
      {
        label: "STRATEGIA",
        heading: "Cztery filary, jeden cel: zapis na zajęcia.",
        steps: [
          {
            number: "01",
            title: "Architektura i technika",
            lead: "Fundament bez dziur.",
            body: "Przeprowadziliśmy audyt techniczny i przebudowaliśmy strukturę serwisu. Nowa architektura uwzględniała hierarchię tematyczną (rodzaj zajęć → wiek → lokalizacja), poprawną kanonikalizację i szybkość ładowania. Strona zaczęła być poprawnie indeksowana w ciągu pierwszych czterech tygodni.",
          },
          {
            number: "02",
            title: "SEO lokalne i Google Business",
            lead: "Mapa Google jako pierwszy punkt kontaktu.",
            body: "Zoptymalizowaliśmy i w pełni uzupełniliśmy profil Google Business Profile — zdjęcia, kategorie, godziny, opisy, odpowiedzi na pytania. Jednocześnie zadbaliśmy o spójność NAP we wszystkich katalogach lokalnych. W efekcie szkoła zaczęła pojawiać się w Local Pack dla kluczowych fraz.",
          },
          {
            number: "03",
            title: "Treści pod intencje",
            lead: "Każda podstrona — jeden konkretny kursant.",
            body: "Stworzyliśmy sieć podstron odpowiadających na rzeczywiste zapytania: zajęcia akrobatyki dla dzieci w wieku 4–6 lat, gimnastyka artystyczna dla dziewczynek, akrobatyka dla dorosłych i inne. Każda podstrona była pisana z myślą o jednym precyzyjnym zapytaniu — i jednej decyzji: zapisuję dziecko.",
          },
          {
            number: "04",
            title: "Link building i autorytet lokalny",
            lead: "Sygnały zaufania z otoczenia.",
            body: "Pozyskaliśmy linki z lokalnych portali, serwisów parentingowych i katalogów szkół sportowych. Równolegle zachęcaliśmy zadowolonych rodziców do zostawiania opinii w Google. Kombinacja linków zewnętrznych i rosnącej liczby recenzji przyspieszyła wzrost pozycji w ostatnim kwartale.",
          },
        ],
      },
      {
        label: "WYNIKI",
        heading: "Osiemdziesiąt fraz w TOP 3. Przed szczytem sezonu.",
        paragraphs: [
          "W jedenaście miesięcy szkoła trafiła na 80 fraz w pierwszej trójce wyników Google i 214 fraz w pierwszej dziesiątce. Przed rokiem szkoła nie miała żadnej pozycji w TOP 50. W sierpniu — szczytowym miesiącu zapisów — zapytania przez stronę wzrosły kilkukrotnie rok do roku.",
          "Szkoła przestała zależeć od rekomendacji i ulotek. Organiczny ruch z Google stał się głównym kanałem pozyskiwania nowych kursantów.",
        ],
      },
      {
        label: "WNIOSEK",
        heading: "W lokalnym SEO nie chodzi o bycie wszędzie. Chodzi o bycie dokładnie tam, gdzie jest klient.",
        paragraphs: [
          "Sukces tego projektu nie wynikał z budżetu ani z triku technicznego. Wynikał z precyzji: zrozumieliśmy, jak szukają rodzice, i zbudowaliśmy serwis, który odpowiadał na ich pytania lepiej niż jakakolwiek inna strona w okolicy. Reszta była konsekwencją.",
        ],
      },
    ],
    teaser: {
      challenge: "Brak jakiejkolwiek widoczności w Google — zero fraz w TOP 50, zero ruchu organicznego.",
      result: akrobatyka[0],
    },
  },
  {
    slug: "odlewnia-poznan",
    category: "CASE STUDY — WEB DEVELOPMENT / SEO TECHNICZNE",
    client: "Odlewnia z Poznania",
    title: "Migracja, która nie kosztowała pozycji. I przyspieszyła wzrost.",
    cta: "Zobacz, jak to zrobiliśmy",
    lead: "Odlewnia produkująca detale przemysłowe działała na przestarzałej stronie — wolnej, trudnej w utrzymaniu i niewidocznej w Google. Zadaniem była pełna migracja do nowego systemu bez utraty dotychczasowych pozycji, a przy okazji radykalna poprawa wydajności i widoczności organicznej.",
    facts: [
      { label: "BRANŻA", value: "Przemysł, odlewnictwo, B2B" },
      { label: "ZAKRES", value: "Migracja CMS, optymalizacja techniczna, Core Web Vitals, SEO techniczne, architektura informacji" },
      { label: "CZAS TRWANIA", value: "5 miesięcy" },
    ],
    stats: { label: "W LICZBACH", items: odlewnia },
    sections: [
      {
        label: "PUNKT WYJŚCIA",
        heading: "Strona działała. Ale ledwo.",
        paragraphs: [
          "Strona odlewni ładowała się ponad 9 sekund. Wynik PageSpeed oscylował w okolicach 30. Treści były nieustrukturyzowane, adresy URL losowe, a prędkość renderowania dyskwalifikowała stronę w oczach zarówno użytkowników, jak i algorytmów Google.",
          "Firma miała ugruntowaną pozycję na kilku frazach B2B — i realna groźba migracji polegała na ich utracie. Każda migracja CMS niesie ryzyko. Zadaniem było przeprowadzić ją tak, żeby to ryzyko nie zmaterializowało się w spadkach.",
        ],
      },
      {
        label: "INSIGHT",
        heading: "Migracja to nie reset. To operacja na żywym organizmie.",
        paragraphs: [
          [
            "Największy błąd przy migracjach to traktowanie ich jak uruchomienia nowej strony. Tymczasem każda zmiana adresu URL to potencjalny sygnał dla Google, że strona stała się czymś innym. Zaplanowaliśmy migrację tak, żeby ",
            { strong: "Google nie zauważył zmiany technologii" },
            " — tylko poprawę jakości.",
          ],
          "Równolegle zidentyfikowaliśmy frazy, na których firma już stała, i zaplanowaliśmy dla nich specjalną ochronę: zachowanie URL-i tam, gdzie to możliwe, i ścisłe przekierowania 301 tam, gdzie zmiana była konieczna.",
        ],
      },
      {
        label: "STRATEGIA",
        heading: "Precyzja zamiast pośpiechu.",
        steps: [
          {
            number: "01",
            title: "Audyt i mapa migracji",
            lead: "Nic nie zginęło w tłumaczeniu.",
            body: "Przed jakąkolwiek zmianą skatalogowaliśmy wszystkie istniejące URL-e, ich pozycje, ruch i linki przychodzące. Na tej podstawie stworzyliśmy pełną mapę przekierowań — każdy stary adres miał przypisany nowy. Żaden zasób z ruchem organicznym nie mógł zniknąć bez śladu.",
          },
          {
            number: "02",
            title: "Nowa architektura i CMS",
            lead: "Porządek zamiast chaosu.",
            body: "Przeprojektowaliśmy strukturę serwisu pod kątem logiki biznesowej i SEO: hierarchia usług, oddzielne podstrony dla każdego typu odlewów, czytelne URL-e opisujące zawartość. Nowy CMS pozwalał na wygodne zarządzanie treścią bez znajomości kodu.",
          },
          {
            number: "03",
            title: "Optymalizacja Core Web Vitals",
            lead: "Z 9 sekund do 2.",
            body: "Optymalizacja wydajności objęła: wdrożenie leniwego ładowania obrazów, kompresję i konwersję do formatu WebP, eliminację blokujących zasobów CSS i JS, wdrożenie cache'owania oraz optymalizację serwera. Wynik PageSpeed wzrósł z 31 do 94. Czas ładowania skrócił się z 9,4 s do 2,1 s.",
          },
          {
            number: "04",
            title: "Monitoring post-migracyjny",
            lead: "Trzy miesiące czujności.",
            body: "Po uruchomieniu przez trzy miesiące monitorowaliśmy indeksację w Google Search Console, wskaźniki crawl budget i ewentualne błędy 404. Szybka reakcja na każdy anomalny sygnał pozwoliła utrzymać ciągłość pozycji i zapobiec jakimkolwiek trwałym spadkom.",
          },
        ],
      },
      {
        label: "WYNIKI",
        heading: "Szybciej, wyżej, bez strat.",
        paragraphs: [
          "Migracja przebiegła bez żadnego trwałego spadku pozycji. W ciągu trzech miesięcy po uruchomieniu ruch organiczny wzrósł trzykrotnie — nowa architektura i szybkość strony przełożyły się na lepsze pozycje na frazach, które wcześniej oscylowały na granicy TOP 10.",
          "Wynik Core Web Vitals wzrósł z 31 do 94. Czas ładowania skrócił się o 78%. Strona, która wcześniej frustrowała użytkowników i była ignorowana przez Google, stała się wizytówką firmy — szybką, czytelną i skutecznie pozyskującą zapytania ofertowe.",
        ],
      },
      {
        label: "WNIOSEK",
        heading: "Dobra migracja jest niewidoczna. Złą widać w danych od razu.",
        paragraphs: [
          "Migracje stron to jeden z najbardziej ryzykownych zabiegów SEO. Ich powodzenie zależy od jednej rzeczy: przygotowania. Każda godzina spędzona na audycie i mapowaniu przed uruchomieniem to godzina, która zapobiega tygodniom naprawiania po uruchomieniu.",
        ],
      },
    ],
    teaser: {
      challenge: "Przestarzała strona ładująca się 9 sekund — migracja CMS bez utraty wypracowanych pozycji.",
      result: odlewnia[0],
    },
  },
];

