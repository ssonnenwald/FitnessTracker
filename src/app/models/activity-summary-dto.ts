import { Goals } from './goals';
import { Summary } from './summary';

export interface ActivitySummaryDTO {
  activities: any[];
  goals: Goals;
  summary: Summary;
}
