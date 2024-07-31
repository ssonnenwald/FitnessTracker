export interface SpO2IntradayDTO {
  dateTime: string;
  minutes: {
    value: number;
    minute: string;
  }[];
}
