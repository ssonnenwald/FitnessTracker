export interface HeartRateIntradayDateDTO {
  activitiesHeart: {
    dateTime: string;
    value: {
      customHeartRateZones: {
        caloriesOut: number;
        max: number;
        min: number;
        minutes: number;
        name: string;
      }[];
      heartRateZones: {
        caloriesOut: number;
        max: number;
        min: number;
        minutes: number;
        name: string;
      }[];
      restingHeartRate: number;
    };
  }[];
  activitiesHeartIntraday: {
    dataset: {
      time: string;
      value: number;
    };
    datasetInterval: number;
    datasetType: string;
  }[];
}
