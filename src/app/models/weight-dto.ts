import { Source } from './enums/source';

export interface WeightDTO {
  date: Date;
  fat: number;
  logId: number;
  source: Source;
  time: string;
  weight: number;
}
