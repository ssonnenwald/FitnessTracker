export interface TrackerAlarmDTO {
  alarmId: number;
  deleted: boolean;
  enabled: boolean;
  recurring: boolean;
  snoozeCount: number;
  snoozeLength: number;
  syncedToDevice: boolean;
  time: string;
  vibe: string;
  weekDays: string[];
}
