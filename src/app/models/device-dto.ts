import { Battery } from './enums/battery';
import { DeviceTypes } from './enums/device-types';

export interface DeviceDTO {
  battery: Battery;
  batteryLevel: number;
  deviceVersion: string;
  features: string[];
  id: string;
  lastSyncTime: string;
  mac: string;
  type: DeviceTypes;
}
