import { GoalType } from './enums/goal-type';

export interface GoalDTO {
  goalType: GoalType;
  startDate: Date;
  startWeight: number;
  weight: number;
  weightThreshold: number;
}
