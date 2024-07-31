export interface VO2MaxSummaryDTO {
  cardioScore: {
    dateTime: string;
    value: { vo2Max: number };
  }[];
}
