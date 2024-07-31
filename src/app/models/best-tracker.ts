import { TrackerDistance } from './tracker-distance';
import { TrackerFloors } from './tracker-floors';
import { TrackerSteps } from './tracker-steps';

export interface BestTracker {
  distance: TrackerDistance;
  floors: TrackerFloors;
  steps: TrackerSteps;
}
