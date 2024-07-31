export interface TemperatureSkinSummaryDTO {
  tempSkin: {
    dateTime: string;
    value: {
      nightlyRelative: number;
    };
    logType: string;
  }[];
}
