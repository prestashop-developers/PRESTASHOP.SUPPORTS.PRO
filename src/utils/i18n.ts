import translations from '../i18n/en-ua.json';

export type Lang = 'en' | 'ua';

export function getLangFromCookie(req: Request | null = null): Lang {
  // SSR: check cookie from request headers
  if (req && req.headers) {
    const cookie = req.headers.get('cookie') || '';
    const match = cookie.match(/(?:^|; )lang=([^;]*)/);
    if (match) return (match[1] as Lang) || 'en';
  }
  // Fallback to browser
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
    if (match) return (match[1] as Lang) || 'en';
  }
  return 'en';
}

export function t(key: string, lang: Lang = 'en'): string {
  return (translations[lang] && translations[lang][key]) || key;
}

export function getTranslations(lang: Lang = 'en') {
  return translations[lang] || {};
}
