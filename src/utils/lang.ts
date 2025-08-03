// Utility to get/set language in cookies and detect browser/system language

export function getLangFromCookie(): string | null {
  const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function setLangCookie(lang: string) {
  document.cookie = `lang=${encodeURIComponent(lang)}; path=/; max-age=31536000`;
}

export function detectBrowserLang(): string {
  if (typeof navigator !== 'undefined') {
    return navigator.language.split('-')[0];
  }
  return 'en';
}

export function getInitialLang(): string {
  const cookieLang = getLangFromCookie();
  if (cookieLang) return cookieLang;
  return detectBrowserLang();
}
