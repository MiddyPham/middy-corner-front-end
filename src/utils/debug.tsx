import React from 'react';

interface DebugInfo {
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
  level: 'info' | 'warn' | 'error';
}

interface DebugProps {
  enabled?: boolean;
  maxLogs?: number;
}

export class DebugUtil {
  private static logs: DebugInfo[] = [];
  private static maxLogs = 100;
  private static enabled = false;

  static init(options: DebugProps = {}) {
    this.enabled = options.enabled ?? false;
    this.maxLogs = options.maxLogs ?? 100;
  }

  static log(message: string, data?: Record<string, unknown>) {
    if (!this.enabled) return;

    const logEntry: DebugInfo = {
      message,
      data,
      timestamp: new Date().toISOString(),
      level: 'info',
    };

    this.addLog(logEntry);
    console.log(`[DEBUG] ${message}`, data);
  }

  static warn(message: string, data?: Record<string, unknown>) {
    if (!this.enabled) return;

    const logEntry: DebugInfo = {
      message,
      data,
      timestamp: new Date().toISOString(),
      level: 'warn',
    };

    this.addLog(logEntry);
    console.warn(`[DEBUG] ${message}`, data);
  }

  static error(message: string, data?: Record<string, unknown>) {
    if (!this.enabled) return;

    const logEntry: DebugInfo = {
      message,
      data,
      timestamp: new Date().toISOString(),
      level: 'error',
    };

    this.addLog(logEntry);
    console.error(`[DEBUG] ${message}`, data);
  }

  private static addLog(logEntry: DebugInfo) {
    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  static getLogs(): DebugInfo[] {
    return [...this.logs];
  }

  static clearLogs(): void {
    this.logs = [];
  }

  static isEnabled(): boolean {
    return this.enabled;
  }

  static setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }
}

export const DebugPanel: React.FC<DebugProps> = ({ enabled = false, maxLogs = 100 }) => {
  const [logs, setLogs] = React.useState<DebugInfo[]>([]);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    DebugUtil.init({ enabled, maxLogs });
    
    const interval = setInterval(() => {
      setLogs(DebugUtil.getLogs());
    }, 1000);

    return () => clearInterval(interval);
  }, [enabled, maxLogs]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black text-white px-4 py-2 rounded-lg border-2 border-black shadow-lg"
      >
        Debug ({logs.length})
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-96 max-h-96 bg-white border-2 border-black rounded-lg shadow-lg overflow-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Debug Logs</h3>
              <button
                onClick={() => DebugUtil.clearLogs()}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded"
              >
                Clear
              </button>
            </div>
            
            <div className="space-y-2">
              {logs.map((log, index) => (
                <div key={index} className="text-sm border-b border-gray-200 pb-2">
                  <div className="flex justify-between">
                    <span className={`font-bold ${
                      log.level === 'error' ? 'text-red-600' :
                      log.level === 'warn' ? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {log.level.toUpperCase()}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="text-gray-800">{log.message}</div>
                  {log.data && (
                    <pre className="text-xs text-gray-600 mt-1 bg-gray-100 p-2 rounded">
                      {JSON.stringify(log.data, null, 2)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugUtil;
