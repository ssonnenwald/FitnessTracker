import { SortOrder } from './enums/sort-order';

export interface ECGLogDTO {
  ecgReadings: {
    startTime: string;
    averageHeartRate: number;
    resultClassification: string;
    waveformSamples: number[];
    samplingFrequencyHz: string;
    scalingFactor: number;
    numberOfWaveformSamples: number;
    leadNumber: number;
    featureVersion: string;
    deviceName: string;
    firmwareVersion: string;
  }[];
  pagination: {
    afterDate: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    sort: SortOrder;
  };
}
