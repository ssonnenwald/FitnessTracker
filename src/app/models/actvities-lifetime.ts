import { LifeTimeTotal } from './lifetime-total';
import { LifeTimeTracker } from './lifetime-tracker';

export interface ActivitiesLifetime {
  total: LifeTimeTotal;
  tracker: LifeTimeTracker;
}
