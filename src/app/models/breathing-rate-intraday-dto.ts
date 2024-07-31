export interface BreathingRateIntradayDTO {
  br: {
    value: {
      deepSleepSummary: {
        breathingRate: number;
      };
      remSleepSummary: {
        breathingRate: number;
      };
      fullSleepSummary: {
        breathingRate: number;
      };
      lightSleepSummary: {
        breathingRate: number;
      };
    };
    dateTime: string;
  }[];
}
