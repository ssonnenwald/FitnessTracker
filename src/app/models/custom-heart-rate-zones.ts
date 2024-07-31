import { HeartRateZones } from './enums/heart-rate-zones';

export interface CustomHeartRateZones {
  caloriesOut: number;
  max: number;
  min: number;
  minutes: number;
  name: HeartRateZones;
}
