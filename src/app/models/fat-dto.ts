import { Source } from './enums/source';

export interface FatDTO {
  date: Date;
  fat: number;
  logId: number;
  source: Source;
  time: string;
}
