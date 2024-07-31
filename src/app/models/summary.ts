import { CustomHeartRateZones } from './custom-heart-rate-zones';
import { Distance } from './distance';
import { heartRateZone } from './heart-rate-zone';

export interface Summary {
  activeScore: number;
  activityCalories: number;
  calorieEstimationMu: number;
  caloriesBMR: number;
  caloriesOut: number;
  caloriesOutUnestimated: number;
  customHeartRateZones: CustomHeartRateZones[];
  distances: Distance[];
  fairlyActiveMinutes: number;
  floors: number;
  heartRateZones: heartRateZone[];
  lightlyActiveMinutes: number;
  marginalCalories: number;
  restingHeartRate: number;
  sedentaryMinutes: number;
  steps: number;
  useEstimation: boolean;
  veryActiveMinutes: number;
}
