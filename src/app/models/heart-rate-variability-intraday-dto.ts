export interface HRVIntradayDTO {
  hrv: {
    minutes: {
      minute: string;
      value: {
        rmssd: number;
        lf: number;
        hf: number;
        cvsd: number;
      };
    };
    dateTime: string;
  }[];
}
