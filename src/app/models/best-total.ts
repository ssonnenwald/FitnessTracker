import { TotalDistance } from './total-distance';
import { TotalFloors } from './total-floors';
import { TotalSteps } from './total-steps';

export interface BestTotal {
  distance: TotalDistance;
  floors: TotalFloors;
  steps: TotalSteps;
}
