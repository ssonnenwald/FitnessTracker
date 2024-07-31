export interface SleepLogDTO {
  sleep: {
    dateOfSleep: string;
    duration: number;
    efficiency: number;
    endTime: string;
    infoCode: number;
    isMainSleep: boolean;
    levels: {
      data: {
        dateTime: string;
        level: string;
        seconds: number;
      }[];
      shortData: {
        dateTime: string;
        level: string;
        seconds: number;
      }[];
      summary: {
        deep: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        light: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        rem: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        wake: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
      };
    };
    logId: string;
    minutesAfterWakeup: number;
    minutesAsleep: number;
    minutesAwake: number;
    minutesToFallAsleep: number;
    startTime: string;
    timeInBed: number;
    type: string;
  }[];
}
