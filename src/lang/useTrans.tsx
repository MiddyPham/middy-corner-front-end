import en from './en';
import jp from './jp';
import vi from './vi';
import { LanguageManager } from './LanguageManager';

export const transWithVariable = (text: string, data: Record<string, any>) => {
  let finalText = text;
  Object.keys(data).forEach((item) => {
    while (finalText?.includes(`{{${item}}}`)) {
      finalText = finalText?.replace(`{{${item}}}`, data[item]);
    }
  });
  return finalText;
};

export const transWithComponent = (
  textFormat: string,
  data: Record<string, any>,
) => {
  const result: any[] = [];
  const regex = /\{\{.*?\}\}/g; 
  const listText = textFormat.split(regex);
  const listKey = Array.from(textFormat.matchAll(regex));
  const max = Math.max(listText.length, listKey.length);

  for (let i = 0; i < max; i += 1) {
    if (i < listText.length) result.push(<span>{listText[i]}</span>);
    if (i < listKey.length) {
      const textKey = listKey[i][0];
      const key = textKey.substring(2, textKey.length - 2).trim();
      if (data[key]) {
        result.push(data[key]);
      }
    }
  }
  return result;
};

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

export const getTrans = () => {
  const locale = LanguageManager.getLanguage();
  const translations: { [key: string]: any } = { en: en, id: vi };
  const trans = translations[locale] || jp;
  return trans;
};

const useTrans = () => {
  const locale = LanguageManager.getLanguage();
  const translations: { [key: string]: any } = { en: en, id: vi };
  const trans = translations[locale] || jp;
  return trans;
};

export default useTrans;
