let isDebugMode =
  typeof window !== 'undefined'
    ? localStorage.getItem('debug') === 'true'
    : null;

const enableSaveLogToLocalStorage =
  typeof window !== 'undefined'
    ? localStorage.getItem('SAVE_LOG_STORAGE') === 'true'
    : null;

let listNormalLog: string[] = enableSaveLogToLocalStorage
  ? JSON.parse(localStorage.getItem('normalLog') ?? '[]')
  : [];

const addLogToList = (message?: any, ...optionalParams: any[]) => {
  let str = message?.toString() + ' ';
  optionalParams.forEach((item: any) => {
    str += item?.toString();
  });
  listNormalLog.push(str);
  if (enableSaveLogToLocalStorage)
    localStorage.setItem('normalLog', JSON.stringify(listNormalLog));
};
class Debug {
  static getDebugMode = () => {
    // return true; // for test
    if (isDebugMode === null) {
      isDebugMode =
        typeof window !== 'undefined'
          ? localStorage.getItem('debug') === 'true'
          : null;
    }
    return isDebugMode;
  };

  static log = (message?: any, ...optionalParams: any[]) => {
    if (!Debug.getDebugMode()) return;
    console.log(message, ...optionalParams);
    addLogToList(message, optionalParams);
  };

  static logError = (message?: any, ...optionalParams: any[]) => {
    if (!Debug.getDebugMode()) return;
    console.error(message, ...optionalParams);
    addLogToList(message, optionalParams);
  };

  static setDebugMode = (value: boolean) => {
    isDebugMode = value;
    localStorage.setItem('debug', `${value}`);
  };

  static startTime: number = -1;
  static startCountTime = () => {
    if (!Debug.getDebugMode()) return;
    Debug.startTime = Date.now();
  };

  static resetCountTime = () => {
    Debug.startTime = -1;
  };

  static getTimeFromStart = () => {
    if (!Debug.getDebugMode()) return -1;
    const currentTime = Date.now();
    if (Debug.startTime === -1) Debug.startTime = currentTime;
    return currentTime - Debug.startTime;
  };

  static logWidthTime = (message?: any, ...optionalParams: any[]) => {
    if (!Debug.getDebugMode()) return;
    console.log(message, ...optionalParams, 'at:', Debug.getTimeFromStart());
  };

  static getListLog = () => {
    return listNormalLog;
  };

  static resetListLog = () => {
    listNormalLog = [];
    localStorage.setItem('normalLog', '[]');
  };
}

let isDebugRedux: any = null;
export const getDebugModeRedux = () => {
  if (isDebugRedux === null) {
    isDebugRedux =
      typeof window !== 'undefined'
        ? localStorage.getItem('debug-redux') === 'true'
        : null;
  }
  return isDebugRedux;
};

export const setDebugModeRedux = (value: boolean) => {
  isDebugRedux = value;
  localStorage.setItem('debug-redux', `${value}`);
};
export default Debug;
