import Debug from "@/utils/debug";

export const getLanguageOfBrowser = () => {
  if (typeof window === 'undefined') {
    // running in server when build
    return 'ja';
  }
  const userLang = window.navigator.language.toLowerCase();
  if (userLang.includes('ja')) return 'ja';
  if (userLang.includes('id')) return 'id';
  return 'en';
};

const LIST_LANGUAGE = ['en', 'ja', 'id'];

export class LanguageManager {
  // public static instance: any = null;
  public static currentLanguage: string = '';

  public static setLanguage(lang: string) {
    let value = lang;
    if (LIST_LANGUAGE.includes(lang) === false) {
      Debug.log('language invalid: ', lang);
      value = getLanguageOfBrowser();
    }
    Debug.log('change language to ', value);
    LanguageManager.currentLanguage = value;
  }

  public static getLanguage() {
    if (LanguageManager.currentLanguage.length > 0)
      return LanguageManager.currentLanguage;
    return getLanguageOfBrowser();
  }

  public static getLanguageOfBrowser() {
    return getLanguageOfBrowser();
  }

  public static resetToDefaultLanguage() {
    LanguageManager.setLanguage(getLanguageOfBrowser());
  }
}
