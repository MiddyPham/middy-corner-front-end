export enum COMMON_KEY {}

class SessionStorageUtil {
  static setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }

  static getItem(key: string, defaultValue: string | null = null) {
    const value = window.sessionStorage.getItem(key);
    if (value === null) return defaultValue;
    return value;
  }

  static getBooleanItem(key: string, defaultValue: boolean = false) {
    const value = window.sessionStorage.getItem(key);
    if (value === null) return defaultValue;
    return value === "true";
  }

  static removeItem(key: string) {
    window.sessionStorage.removeItem(key);
  }

  static setItemObject(key: string, itemObject: any) {
    const plainText = JSON.stringify(itemObject);
    SessionStorageUtil.setItem(key, plainText);
  }

  static getItemObject(key: string, defaultValue: any = {}) {
    const stringJson = SessionStorageUtil.getItem(key);
    if (!stringJson) {
      return defaultValue;
    }
    try {
      return JSON.parse(stringJson);
    } catch (e) {
      return defaultValue;
    }
  }
}

export default SessionStorageUtil;
