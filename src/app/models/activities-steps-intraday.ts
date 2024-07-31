import { Dataset } from './dataset';

export interface ActivitiesStepsIntraday {
  dataset: Dataset[];
  datasetInterval: number;
  datasetType: string;
}
