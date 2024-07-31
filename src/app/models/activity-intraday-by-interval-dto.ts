import { ActivitySteps } from './activities-steps';
import { ActivitiesStepsIntraday } from './activities-steps-intraday';

export interface ActivityIntradayByIntervalDTO {
  activitiesSteps: ActivitySteps[];
  activitiesStepsIntraday: ActivitiesStepsIntraday[];
}
