export interface SleepLogByDateDTO {
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
      summary: {
        asleep: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        awake: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        restless: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        rem: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        timeInBed: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
      };
    };
    logId: number;
    minutesAfterWakeup: number;
    minutesAsleep: number;
    minutesAwake: number;
    minutesToFallAsleep: number;
    logType: string;
    startTime: string;
    timeInBed: number;
    type: string;
  }[];
}
