import { ActivitiesActivityLevel } from './activities-activity-level';
import { AccessLevels } from './enums/access-levels';

export interface ActivityTypeDTO {
  activity: {
    accessLevel: AccessLevels;
    activityLevels: ActivitiesActivityLevel[];
    hasSpeed: boolean;
    id: number;
    name: string;
  };
}