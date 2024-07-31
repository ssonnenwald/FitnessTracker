export interface SpO2SummaryDTO {
  dateTime: string;
  value: {
    avg: number;
    min: number;
    max: number;
  };
}
