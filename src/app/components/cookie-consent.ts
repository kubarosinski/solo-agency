// Klucz i kształt zapisanej zgody — wspólne dla okna zgód (klient) i polityki prywatności (serwer),
// żeby opis w polityce zgadzał się z kodem. Bez importów z Reacta, więc można go użyć na serwerze.
export const COOKIE_CONSENT_KEY = "solo-cookie-consent";

// Zmiana wersji (np. po dodaniu nowego narzędzia) sprawia, że okno pojawi się ponownie.
export const COOKIE_CONSENT_VERSION = 1;

export interface CookieConsentState {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
}
