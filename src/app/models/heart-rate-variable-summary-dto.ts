export interface HRVSummaryDTO {
  value: {
    dailyRmssd: number;
    deepRmssd: number;
  };
  dateTime: string;
}
