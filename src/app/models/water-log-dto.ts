export interface WaterLogDTO {
  summary: {
    water: number;
  };
  water: {
    amount: number;
    logId: number;
  }[];
}
