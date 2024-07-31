import { ActivityLevel } from './activity-level';
import { ManualValuesSpecified } from './manual-values-specified';

export interface Activity {
  activeDuration: number;
  activityLevel: ActivityLevel[];
  activityName: string;
  activityTypeId: number;
  calories: number;
  caloriesLink: string;
  duration: number;
  elevationGain: number;
  lastModified: string;
  logId: number;
  logType: string;
  manualValuesSpecified: ManualValuesSpecified;
  originalDuration: number;
  originalStartTime: string;
  startTime: string;
  steps: number;
  tcxLink: string;
}
