export enum LOCAL_KEY {
  USER = 'user',
}

class LocalStorageUtil {
  static setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  static getItem(key: string, defaultValue: string | null = null) {
    const value = window.localStorage.getItem(key);
    if (value === null) return defaultValue;
    return value;
  }

  static getBooleanItem(key: string, defaultValue: boolean = false) {
    const value = window.localStorage.getItem(key);
    if (value === null) return defaultValue;
    return value === 'true';
  }

  static removeItem(key: string) {
    window.localStorage.removeItem(key);
  }

  static setItemObject(key: string, itemObject: Record<string, unknown>) {
    const plainText = JSON.stringify(itemObject);
    LocalStorageUtil.setItem(key, plainText);
  }

  static getItemObject(key: string, defaultValue: Record<string, unknown> = {}) {
    const stringJson = LocalStorageUtil.getItem(key);
    if (!stringJson) {
      return defaultValue;
    }
    try {
      return JSON.parse(stringJson);
    } catch {
      return defaultValue;
    }
  }

  // static getDefaultValueByUser(
  //   key: string,
  //   idObject: string,
  //   methodObject: string,
  // ) {
  //   const profile = SessionStorageUtil.getItemObject(
  //     COMMON_KEY.myProfile,
  //     null,
  //   );
  //   const storedData = LocalStorageUtil.getItemObject(key, {});

  //   if (
  //     storedData &&
  //     storedData[profile.id] &&
  //     storedData[profile.id][idObject]
  //   ) {
  //     return storedData[profile.id][idObject][methodObject];
  //   }
  //   return null;
  // }

  static getCurrentUserId(): string | null {
    const result = LocalStorageUtil.getItemObject('user-info')?.id;
    if (!result || result?.length === 0) {
      return null;
    }
    return result;
  }

  static setUserLocalData(key: string, stringData: string) {
    const userId = LocalStorageUtil.getCurrentUserId();
    if (!userId) {
      return;
    }
    const storedData = LocalStorageUtil.getItemObject(userId, {});
    storedData[key] = stringData;
    LocalStorageUtil.setItemObject(userId, storedData);
  }

  static getUserLocalData(key: string): string | null {
    const userId = LocalStorageUtil.getCurrentUserId();
    if (!userId) return null;
    const storedData = LocalStorageUtil.getItemObject(userId, {});
    return storedData[key] ?? null;
  }

  static setUserLocalDataObject(key: string, objectData: Record<string, unknown>) {
    const userId = LocalStorageUtil.getCurrentUserId();
    if (!userId) {
      return;
    }
    const storedData = LocalStorageUtil.getItemObject(userId, {});
    storedData[key] = JSON.stringify(objectData);
    LocalStorageUtil.setItemObject(userId, storedData);
  }

  static getUserLocalDataObject(key: string): Record<string, unknown> | null {
    const userId = LocalStorageUtil.getCurrentUserId();
    if (!userId) return null;
    const storedData = LocalStorageUtil.getItemObject(userId, {});
    const stringData = storedData[key] ?? null;
    if (!stringData) return null;
    return JSON.parse(stringData);
  }
}

export default LocalStorageUtil;