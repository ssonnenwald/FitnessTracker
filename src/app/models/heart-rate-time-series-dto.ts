export interface HeartRateTimeSeriesDTO {
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
  };
}
