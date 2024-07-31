import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { ActivitiesActiveZoneMinutesDTO } from '../models/activities-active-zone-minutes-dto';
import { ActivitiesActiveZoneMinutesIntradayDTO } from '../models/activities-active-zone-minutes-intraday-dto';
import { ActivitiesDTO } from '../models/activities-dto';
import { ActivitiesLifetimeStatsDTO } from '../models/activities-lifetime-stats-dto';
import { ActivityGoalsDTO } from '../models/activity-goals-dto';
import { ActivityIntradayByIntervalDTO } from '../models/activity-intraday-by-interval-dto';
import { ActivityLogListDTO } from '../models/activity-log-list-dto';
import { ActivitySummaryDTO } from '../models/activity-summary-dto';
import { ActivityTimeSeriesStepsDTO } from '../models/activity-time-series-steps-dto';
import { ActivityTypeDTO } from '../models/activity-type-dto';
import { BadgeDTO } from '../models/badge-dto';
import { BodyTimeSeriesDTO } from '../models/body-time-series-weight-dto';
import { BreathingRateIntradayDTO } from '../models/breathing-rate-intraday-dto';
import { BreathingRateSummaryDTO } from '../models/breathing-rate-summary-dto';
import { DeviceDTO } from '../models/device-dto';
import { ECGLogDTO } from '../models/ecg-log-dto';
import { ActivityGoalsPeriods } from '../models/enums/activity-goals-periods';
import { BodyResources } from '../models/enums/body-resources';
import { Collections } from '../models/enums/collections';
import { DetailLevels } from '../models/enums/detail-levels';
import { GoalType } from '../models/enums/goal-type';
import { HeartRateDetailLevels } from '../models/enums/heart-rate-detail-levels';
import { HeartRateTimeSeriesPeriods } from '../models/enums/heart-rate-time-series-periods';
import { NutritionPeriods } from '../models/enums/nutrition-periods';
import { NutritionResources } from '../models/enums/nutrition-resources';
import { Period } from '../models/enums/period';
import { ResourcePaths } from '../models/enums/resource-paths';
import { SortOrder } from '../models/enums/sort-order';
import { FatDTO } from '../models/fat-dto';
import { FavoriteActivitiesDTO } from '../models/favorite-activities-dto';
import { FavoriteFoodDTO } from '../models/favorite-food-dto';
import { FoodDTO } from '../models/food-dto';
import { FoodGoalDTO } from '../models/food-goal-dto';
import { FoodLocaleDTO } from '../models/food-locale-dto';
import { FoodLogDTO } from '../models/food-log-dto';
import { FoodUnitDTO } from '../models/food-unit-dto';
import { FoodsDTO } from '../models/foods-dto';
import { FrequentActivitiesDTO } from '../models/frequent-activities-dto';
import { FrequentFoodDTO } from '../models/frequent-food-dto';
import { FriendDTO } from '../models/friend-dto';
import { GoalDTO } from '../models/goal-dto';
import { HeartRateIntradayDateDTO } from '../models/heart-rate-intraday-date-dto';
import { HeartRateIntradayDTO } from '../models/heart-rate-intraday-dto';
import { HeartRateTimeSeriesDTO } from '../models/heart-rate-time-series-dto';
import { HRVIntradayDTO } from '../models/heart-rate-variability-intraday-dto';
import { HRVSummaryDTO } from '../models/heart-rate-variable-summary-dto';
import { MealsDTO } from '../models/meals-dto';
import { ProfileDTO } from '../models/profile-dto';
import { RecentActivityTypesDTO } from '../models/recent-activity-types-dto';
import { RecentFoodDTO } from '../models/recent-food-dto';
import { SleepLogByDateDTO } from '../models/sleep-log-by-date-dto';
import { SleepLogDTO } from '../models/sleep-log-dto';
import { SpO2IntradayDTO } from '../models/spo2-intraday-dto';
import { SpO2SummaryDTO } from '../models/spo2-summary-dto';
import { SubscriptionListDTO } from '../models/subscription-list-dto';
import { TemperatureCoreSummaryDTO } from '../models/temperature-core-summary-dto';
import { TemperatureSkinSummaryDTO } from '../models/temperature-skin-summary-dto';
import { TrackerAlarmDTO } from '../models/tracker-Alarm-dto';
import { VO2MaxSummaryDTO } from '../models/vo2-max-summary-dto';
import { WaterGoalDTO } from '../models/water-goal-dto';
import { WaterLogDTO } from '../models/water-log-dto';
import { WeightDTO } from '../models/weight-dto';

@Injectable({
  providedIn: 'root',
})
export class FitbitService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = 'https://api.fitbit.com';

  public constructor() {
    //
  }

  // Fitbit Web API Explorer
  // https://dev.fitbit.com/build/reference/web-api/explore/fitbit-web-api-swagger.json

  // Active Zone Minutes Intraday Time Series
  //   The Active Zone Minutes (AZM) Intraday Time Series endpoints
  //   retrieve the user's heart-pumping activity for a specific date
  //   or 24 hour period. Intraday support can extend the detail-level
  //   response to include 1min, 5min and 15min for Active Zone Minutes.

  public getActiveZoneMinutesIntraday(
    date: string,
    detailLevel: DetailLevels
  ): Observable<ActivitiesActiveZoneMinutesIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/active-zone-minutes/date/${date}/1d/${detailLevel}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesIntradayDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesActiveZoneMinutesIntradayDTO)));
  }

  public getActiveZoneMinutesIntradayStartTimeEndTime(
    date: string,
    detailLevel: DetailLevels,
    startTime: string,
    endTime: string
  ): Observable<ActivitiesActiveZoneMinutesIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/active-zone-minutes/date/${date}/1d/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesIntradayDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesActiveZoneMinutesIntradayDTO)));
  }

  public getActiveZoneMinutesIntradayStartDateEndDate(
    startDate: string,
    endDate: string,
    detailLevel: DetailLevels
  ): Observable<ActivitiesActiveZoneMinutesIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/active-zone-minutes/date/${startDate}/${endDate}/${detailLevel}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesIntradayDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesActiveZoneMinutesIntradayDTO)));
  }

  public getActiveZoneMinutesIntradayStartDateEndDateStartTimeEndTime(
    startDate: string,
    endDate: string,
    detailLevel: DetailLevels,
    startTime: string,
    endTime: string
  ): Observable<ActivitiesActiveZoneMinutesIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/active-zone-minutes/date/${startDate}/${endDate}/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesIntradayDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesActiveZoneMinutesIntradayDTO)));
  }

  // Active Zone Minutes Time Series
  //   The Active Zone Minutes (AZM) Time Series endpoints are
  //   used for querying the user's heart-pumping activity
  //   throughout the day.

  public getActiveZoneMinutesTimeSeriesByDate(
    date: Date,
    period: Period
  ): Observable<ActivitiesActiveZoneMinutesDTO[]> {
    const url = `${this.baseUrl}/1/user/~/activities/active-zone-minutes/date/${date}/${period}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesDTO[]>(url)
      .pipe(catchError(() => of([] as ActivitiesActiveZoneMinutesDTO[])));
  }

  public getActiveZoneMinutesTimeSeriesByInterval(
    startDate: Date,
    endDate: Date
  ): Observable<ActivitiesActiveZoneMinutesDTO[]> {
    const url = `${this.baseUrl}/1/user/-/activities/active-zone-minutes/date/${startDate}/${endDate}.json`;

    return this.http
      .get<ActivitiesActiveZoneMinutesDTO[]>(url)
      .pipe(catchError(() => of([] as ActivitiesActiveZoneMinutesDTO[])));
  }

  // Activity
  //   The Activity endpoints are used to query and/or
  //   modify a Fitbit user's daily activity data.

  public getActivitySummaryByDate(date: Date): Observable<ActivitySummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/date/${date}.json`;

    return this.http
      .get<ActivitySummaryDTO>(url)
      .pipe(catchError(() => of({} as ActivitySummaryDTO)));
  }

  public getActivityLifetimeStats(): Observable<ActivitiesLifetimeStatsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities.json`;

    return this.http
      .get<ActivitiesLifetimeStatsDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesLifetimeStatsDTO)));
  }

  public getActivityLogList(
    beforeDate: Date,
    afterDate: Date,
    sort: SortOrder,
    offset: number = 0,
    limit: number = 100
  ): Observable<ActivityLogListDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/list.json?beforeDate=${beforeDate}&afterDate=${afterDate}&sort=${sort}&offset=${offset}&limit=${limit}`;

    return this.http
      .get<ActivityLogListDTO>(url)
      .pipe(catchError(() => of({} as ActivityLogListDTO)));
  }

  public getActivityTCX(
    logId: string,
    includePartialTCX: boolean = true
  ): Observable<any> {
    const url = `${this.baseUrl}/1/user/-/activities/${logId}.tcx?includePartialTCX=${includePartialTCX}`;

    return this.http.get(url).pipe(catchError(() => of({} as any)));
  }

  public getActivities(): Observable<ActivitiesDTO> {
    const url = `${this.baseUrl}/1/activities.json`;

    return this.http
      .get<ActivitiesDTO>(url)
      .pipe(catchError(() => of({} as ActivitiesDTO)));
  }

  public getActivityType(activityId: number): Observable<ActivityTypeDTO> {
    const url = `${this.baseUrl}/1/activities/${activityId}.json`;

    return this.http
      .get<ActivityTypeDTO>(url)
      .pipe(catchError(() => of({} as ActivityTypeDTO)));
  }

  public getFrequentActivities(): Observable<FrequentActivitiesDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/frequent.json`;

    return this.http
      .get<FrequentActivitiesDTO>(url)
      .pipe(catchError(() => of({} as FrequentActivitiesDTO)));
  }

  public getRecentActivityTypes(): Observable<RecentActivityTypesDTO[]> {
    const url = `${this.baseUrl}/1/user/-/activities/recent.json`;

    return this.http
      .get<RecentActivityTypesDTO[]>(url)
      .pipe(catchError(() => of([] as RecentActivityTypesDTO[])));
  }

  public getFavoriteActivities(): Observable<FavoriteActivitiesDTO[]> {
    const url = `${this.baseUrl}/1/user/-/activities/favorite.json`;

    return this.http
      .get<FavoriteActivitiesDTO[]>(url)
      .pipe(catchError(() => of({} as FavoriteActivitiesDTO[])));
  }

  public getActivityGoals(
    period: ActivityGoalsPeriods
  ): Observable<ActivityGoalsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/goals/${period}.json`;

    return this.http
      .get<ActivityGoalsDTO>(url)
      .pipe(catchError(() => of({} as ActivityGoalsDTO)));
  }

  // Activity Intraday Time Series
  //   The Activity Intraday Time Series endpoints retrieve
  //   the data for a given resource on a specific date
  //   or 24 hour period. Intraday support can extend the
  //   detail-level response to include 1min, 5min and 15min
  //   for the activity.

  public getActivityIntradayByInterval(
    resourcePath: ResourcePaths,
    baseDate: string,
    endDate: string,
    detailLevel: DetailLevels
  ): Observable<ActivityIntradayByIntervalDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/${resourcePath}/date/${baseDate}/${endDate}/${detailLevel}.json`;

    return this.http
      .get<ActivityIntradayByIntervalDTO>(url)
      .pipe(catchError(() => of({} as ActivityIntradayByIntervalDTO)));
  }

  public getActivityIntradayByIntervalByDate(
    resourcePath: ResourcePaths,
    date: string,
    detailLevel: DetailLevels
  ): Observable<ActivityIntradayByIntervalDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/${resourcePath}/date/${date}/1d/${detailLevel}.json`;

    return this.http
      .get<ActivityIntradayByIntervalDTO>(url)
      .pipe(catchError(() => of({} as ActivityIntradayByIntervalDTO)));
  }

  public getActivityIntradayByIntervalStartDateEndDateStartTimeEndTime(
    resourcePath: ResourcePaths,
    startDate: string,
    endDate: string,
    detailLevel: DetailLevels,
    startTime: string,
    endTime: string
  ): Observable<ActivityIntradayByIntervalDTO> {
    const url = `${this.baseUrl}/1/user/[user-id]/activities/${resourcePath}/date/${startDate}/${endDate}/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<ActivityIntradayByIntervalDTO>(url)
      .pipe(catchError(() => of({} as ActivityIntradayByIntervalDTO)));
  }

  public getActivityIntradayByIntervalDateStartTimeEndTime(
    resourcePath: ResourcePaths,
    date: string,
    detailLevel: DetailLevels,
    startTime: string,
    endTime: string
  ): Observable<ActivityIntradayByIntervalDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/${resourcePath}/date/${date}/1d/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<ActivityIntradayByIntervalDTO>(url)
      .pipe(catchError(() => of({} as ActivityIntradayByIntervalDTO)));
  }

  // Activity Time Series
  //    The Activity Time Series endpoints are used to query
  //    a Fitbit user's activity data over a period of time,
  //    either by specifying a date and time period, or a
  //    date range.

  public getActivityTimeSeriesByDateRange(
    resourcePath: ResourcePaths,
    baseDate: string,
    endDate: string
  ): Observable<ActivityTimeSeriesStepsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/${resourcePath}/date/${baseDate}/${endDate}.json`;

    return this.http
      .get<ActivityTimeSeriesStepsDTO>(url)
      .pipe(catchError(() => of({} as ActivityTimeSeriesStepsDTO)));
  }

  public getActivityTimeSeriesTrackerByDateRange(
    resourcePath: ResourcePaths,
    baseDate: string,
    endDate: string
  ): Observable<ActivityTimeSeriesStepsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/tracker/${resourcePath}/date/${baseDate}/${endDate}.json`;

    return this.http
      .get<ActivityTimeSeriesStepsDTO>(url)
      .pipe(catchError(() => of({} as ActivityTimeSeriesStepsDTO)));
  }

  public getActivityTimeSeriesByDatePeriod(
    resourcePath: ResourcePaths,
    date: string,
    period: Period
  ): Observable<ActivityTimeSeriesStepsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/${resourcePath}/date/${date}/${period}.json`;

    return this.http
      .get<ActivityTimeSeriesStepsDTO>(url)
      .pipe(catchError(() => of({} as ActivityTimeSeriesStepsDTO)));
  }

  public getActivityTimeSeriesTrackerByDatePeriod(
    resourcePath: ResourcePaths,
    date: string,
    period: Period
  ): Observable<ActivityTimeSeriesStepsDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/tracker/${resourcePath}/date/${date}/${period}.json`;

    return this.http
      .get<ActivityTimeSeriesStepsDTO>(url)
      .pipe(catchError(() => of({} as ActivityTimeSeriesStepsDTO)));
  }

  // Body
  //   The Body endpoints are used for querying and modifying the user's
  //   body fat and weight data.

  public getBodyFatLogs(date: string): Observable<FatDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/fat/date/${date}.json`;

    return this.http
      .get<FatDTO[]>(url)
      .pipe(catchError(() => of([] as FatDTO[])));
  }

  public getBodyFatLogsWithPeriod(
    date: string,
    period: Period
  ): Observable<FatDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/fat/date/${date}/${period}.json`;

    return this.http
      .get<FatDTO[]>(url)
      .pipe(catchError(() => of([] as FatDTO[])));
  }

  public getBodyFatLogsWithBaseDateEndDate(
    baseDate: string,
    endDate: string
  ): Observable<FatDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/fat/date/${baseDate}/${endDate}.json`;

    return this.http
      .get<FatDTO[]>(url)
      .pipe(catchError(() => of([] as FatDTO[])));
  }

  public getBodyGoals(goalType: GoalType): Observable<GoalDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/${goalType}/goal.json`;

    return this.http
      .get<GoalDTO[]>(url)
      .pipe(catchError(() => of([] as GoalDTO[])));
  }

  public getWeightLogs(date: string): Observable<WeightDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/weight/date/${date}.json`;

    return this.http
      .get<WeightDTO[]>(url)
      .pipe(catchError(() => of([] as WeightDTO[])));
  }

  public getWeightLogsWithPeriod(
    date: string,
    period: Period
  ): Observable<WeightDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/weight/date/${date}/${period}.json`;

    return this.http
      .get<WeightDTO[]>(url)
      .pipe(catchError(() => of([] as WeightDTO[])));
  }

  public getWeightLogsWithBaseDateEndDate(
    baseDate: string,
    endDate: string
  ): Observable<WeightDTO[]> {
    const url = `${this.baseUrl}/1/user/-/body/log/weight/date/${baseDate}/${endDate}.json`;

    return this.http
      .get<WeightDTO[]>(url)
      .pipe(catchError(() => of([] as WeightDTO[])));
  }

  // Body Time Series
  //    The Body Time Series endpoints are used for
  //    querying body fat and weight data over a period
  //    of time either by specifying a date and time period,
  //    or a date range.

  public getBodyTimeSeriesByDate(
    resource: BodyResources,
    date: string,
    period: Period
  ): Observable<BodyTimeSeriesDTO> {
    const url = `${this.baseUrl}/1/user/-/body/${resource}/date/${date}/${period}.json`;

    return this.http
      .get<BodyTimeSeriesDTO>(url)
      .pipe(catchError(() => of({} as BodyTimeSeriesDTO)));
  }

  public getBodyTimeSeriesByDateRange(
    resource: BodyResources,
    baseDate: string,
    endDate: string
  ): Observable<BodyTimeSeriesDTO> {
    const url = `${this.baseUrl}/1/user/-/body/${resource}/date/${baseDate}/${endDate}.json`;

    return this.http
      .get<BodyTimeSeriesDTO>(url)
      .pipe(catchError(() => of({} as BodyTimeSeriesDTO)));
  }

  // Breathing Rate
  //    Breathing Rate or Respiratory Rate is a measurement
  //    of your average breaths per minute at night.

  public getBreathingRateSummaryByDate(
    date: string
  ): Observable<BreathingRateSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/sleep/date/${date}.json`;

    return this.http
      .get<BreathingRateSummaryDTO>(url)
      .pipe(catchError(() => of({} as BreathingRateSummaryDTO)));
  }

  public getBreathingRateSummaryByInterval(
    startDate: string,
    endDate: string
  ): Observable<BreathingRateSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/br/date/${startDate}/${endDate}.json`;

    return this.http
      .get<BreathingRateSummaryDTO>(url)
      .pipe(catchError(() => of({} as BreathingRateSummaryDTO)));
  }

  // Breathing Rate Intraday
  //    The Breathing Rate Intraday endpoint returns the
  //    average breathing rate throughout the day and
  //    categories your breathing rate by sleep stage.

  public getBreathingRateIntradayByDate(
    date: string
  ): Observable<BreathingRateIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/br/date/${date}/all.json`;

    return this.http
      .get<BreathingRateIntradayDTO>(url)
      .pipe(catchError(() => of({} as BreathingRateIntradayDTO)));
  }

  public getBreathingRateIntradayByInterval(
    startDate: string,
    endDate: string
  ): Observable<BreathingRateIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/br/date/${startDate}/${endDate}/all.json`;

    return this.http
      .get<BreathingRateIntradayDTO>(url)
      .pipe(catchError(() => of({} as BreathingRateIntradayDTO)));
  }

  //  Cardio Fitness Score (VO2 Max)
  //    The Cardio Fitness Score (also known as VO2 Max)
  //    endpoints are used for querying the maximum or
  //    optimum rate at which the user’s heart, lungs,
  //    and muscles can effectively use oxygen during exercise.

  public getVO2MaxSummaryByDate(date: string): Observable<VO2MaxSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/cardioscore/date/${date}.json`;

    return this.http
      .get<VO2MaxSummaryDTO>(url)
      .pipe(catchError(() => of({} as VO2MaxSummaryDTO)));
  }

  public getVO2MaxSummaryByInterval(
    startDate: string,
    endDate: string
  ): Observable<VO2MaxSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/cardioscore/date/${startDate}/${endDate}.json`;

    return this.http
      .get<VO2MaxSummaryDTO>(url)
      .pipe(catchError(() => of({} as VO2MaxSummaryDTO)));
  }

  // Devices
  //    The Devices endpoints displays information about
  //    the devices paired to a user's account.

  public getDevices(): Observable<DeviceDTO[]> {
    const url = `${this.baseUrl}/1/user/-/devices.json`;

    return this.http
      .get<DeviceDTO[]>(url)
      .pipe(catchError(() => of([] as DeviceDTO[])));
  }

  public getAlarms(
    trackerId: number,
    alarmId: number
  ): Observable<TrackerAlarmDTO[]> {
    const url = `${this.baseUrl}/1/user/-/devices/tracker/${trackerId}/alarms/${alarmId}.json`;

    return this.http
      .get<TrackerAlarmDTO[]>(url)
      .pipe(catchError(() => of([] as TrackerAlarmDTO[])));
  }

  // Electrocardiogram
  //    The Electrocardiogram (also known as ECG) endpoint
  //    is used for querying the user's on-device ECG readings.

  public getECGLogList(
    beforeDate: string,
    afterDate: string,
    limit: number,
    offset: number,
    sort: SortOrder
  ): Observable<ECGLogDTO> {
    const url = `${this.baseUrl}/1/user/-/ecg/list.json?beforeDate=${beforeDate}&afterDate=${afterDate}&limit=${limit}&offset=${offset}&sort=${sort}`;

    return this.http
      .get<ECGLogDTO>(url)
      .pipe(catchError(() => of({} as ECGLogDTO)));
  }

  // Friends
  //    The Friends endpoints display information about
  //    the specified user's friends and the friend's leaderboard.

  public getFriends(): Observable<FriendDTO[]> {
    const url = `${this.baseUrl}/1.1/user/-/friends.json`;

    return this.http
      .get<FriendDTO[]>(url)
      .pipe(catchError(() => of([] as FriendDTO[])));
  }

  public getFriendsLeaderboard(): Observable<FriendDTO[]> {
    const url = `${this.baseUrl}/1.1/user/-/leaderboard/friends.json`;

    return this.http
      .get<FriendDTO[]>(url)
      .pipe(catchError(() => of([] as FriendDTO[])));
  }

  // Heart Rate Intraday Time Series
  //    The Heart Rate Intraday Time Series retrieves
  //    the heart rate data on a specific date or 24 hour
  //    period. Intraday support can extend the detail-level
  //    response to include 1sec, 1min, 5min or 15min for
  //    Heart Rate.

  public getHeartRateIntradayByIntervalDateRange(
    startDate: string,
    endDate: string,
    detailLevel: HeartRateDetailLevels
  ): Observable<HeartRateIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${startDate}/${endDate}/${detailLevel}.json`;

    return this.http
      .get<HeartRateIntradayDTO>(url)
      .pipe(catchError(() => of({} as HeartRateIntradayDTO)));
  }

  public getHeartRateIntradayByIntervalDateRangeTimeRange(
    startDate: string,
    endDate: string,
    detailLevel: HeartRateDetailLevels,
    startTime: string,
    endTime: string
  ): Observable<HeartRateIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${startDate}/${endDate}/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<HeartRateIntradayDTO>(url)
      .pipe(catchError(() => of({} as HeartRateIntradayDTO)));
  }

  public getHeartRateIntradayByDate(
    date: string,
    detailLevel: HeartRateDetailLevels
  ): Observable<HeartRateIntradayDateDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${date}/1d/${detailLevel}.json`;

    return this.http
      .get<HeartRateIntradayDateDTO>(url)
      .pipe(catchError(() => of({} as HeartRateIntradayDateDTO)));
  }

  public getHeartRateIntradayByDateTimeRange(
    date: string,
    detailLevel: HeartRateDetailLevels,
    startTime: string,
    endTime: string
  ): Observable<HeartRateIntradayDateDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${date}/1d/${detailLevel}/time/${startTime}/${endTime}.json`;

    return this.http
      .get<HeartRateIntradayDateDTO>(url)
      .pipe(catchError(() => of({} as HeartRateIntradayDateDTO)));
  }

  // Heart Rate Time Series
  //    The Heart Rate Time Series endpoints are used
  //    for querying the user's heart rate data.

  public getHeartRateTimeSeriesByDate(
    date: string,
    period: HeartRateTimeSeriesPeriods
  ): Observable<HeartRateTimeSeriesDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${date}/${period}.json`;

    return this.http
      .get<HeartRateTimeSeriesDTO>(url)
      .pipe(catchError(() => of({} as HeartRateTimeSeriesDTO)));
  }

  public getHeartRateTimeSeriesByDateRange(
    startDate: string,
    endDate: string
  ): Observable<HeartRateTimeSeriesDTO> {
    const url = `${this.baseUrl}/1/user/-/activities/heart/date/${startDate}/${endDate}.json`;

    return this.http
      .get<HeartRateTimeSeriesDTO>(url)
      .pipe(catchError(() => of({} as HeartRateTimeSeriesDTO)));
  }

  // Heart Rate Variability
  //    The Heart Rate Variability (HRV) endpoints are
  //    used for querying the user’s heart rate
  //    variability data.

  public getHRVSummaryByDate(date: string): Observable<HRVSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/hrv/date/${date}.json`;

    return this.http
      .get<HRVSummaryDTO>(url)
      .pipe(catchError(() => of({} as HRVSummaryDTO)));
  }

  public getHRVSummaryByDateRange(
    startDate: string,
    endDate: string
  ): Observable<HRVSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/hrv/date/${startDate}/${endDate}.json`;

    return this.http
      .get<HRVSummaryDTO>(url)
      .pipe(catchError(() => of({} as HRVSummaryDTO)));
  }

  // Heart Rate Variability Intraday
  //    The Heart Rate Variability Intraday endpoint
  //    returns the HRV rate at various times and returns
  //    Root Mean Square of Successive Differences (rmssd),
  //    Low Frequency (LF), High Frequency (HF), and
  //    Coverage data for a given measurement.

  public getHRVIntradayByDate(date: string): Observable<HRVIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/hrv/date/${date}/all.json`;

    return this.http
      .get<HRVIntradayDTO>(url)
      .pipe(catchError(() => of({} as HRVIntradayDTO)));
  }

  public getHRVIntradayByDateRange(
    startDate: string,
    endDate: string
  ): Observable<HRVIntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/hrv/date/${startDate}/${endDate}/all.json`;

    return this.http
      .get<HRVIntradayDTO>(url)
      .pipe(catchError(() => of({} as HRVIntradayDTO)));
  }

  // Nutrition
  //    The Nutrition endpoints are used for querying
  //    and modifying the food and water data.

  public getFoodLocales(): Observable<FoodLocaleDTO[]> {
    const url = `${this.baseUrl}/1/user/-/foods/log/locales.json`;

    return this.http
      .get<FoodLocaleDTO[]>(url)
      .pipe(catchError(() => of([] as FoodLocaleDTO[])));
  }

  public getFoodGoals(): Observable<FoodGoalDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/log/goal.json`;

    return this.http
      .get<FoodGoalDTO>(url)
      .pipe(catchError(() => of({} as FoodGoalDTO)));
  }

  public getFoodLog(date: string): Observable<FoodLogDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/log/date/${date}.json`;

    return this.http
      .get<FoodLogDTO>(url)
      .pipe(catchError(() => of({} as FoodLogDTO)));
  }

  public getWaterLog(date: string): Observable<WaterLogDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/log/water/date/${date}.json`;

    return this.http
      .get<WaterLogDTO>(url)
      .pipe(catchError(() => of({} as WaterLogDTO)));
  }

  public getWaterGoal(): Observable<WaterGoalDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/log/water/goal.json`;

    return this.http
      .get<WaterGoalDTO>(url)
      .pipe(catchError(() => of({} as WaterGoalDTO)));
  }

  public getFavoriteFoods(): Observable<FavoriteFoodDTO[]> {
    const url = `${this.baseUrl}/1/user/-/foods/log/favorite.json`;

    return this.http
      .get<FavoriteFoodDTO[]>(url)
      .pipe(catchError(() => of([] as FavoriteFoodDTO[])));
  }

  public getFrequentFoods(): Observable<FrequentFoodDTO[]> {
    const url = `${this.baseUrl}/1/user/-/foods/log/frequent.json`;

    return this.http
      .get<FrequentFoodDTO[]>(url)
      .pipe(catchError(() => of([] as FrequentFoodDTO[])));
  }

  public getMeals(): Observable<MealsDTO> {
    const url = `${this.baseUrl}/1/user/-/meals.json`;

    return this.http
      .get<MealsDTO>(url)
      .pipe(catchError(() => of({} as MealsDTO)));
  }

  public getRecentFoods(): Observable<RecentFoodDTO[]> {
    const url = `${this.baseUrl}/1/user/-/foods/log/recent.json`;

    return this.http
      .get<RecentFoodDTO[]>(url)
      .pipe(catchError(() => of([] as RecentFoodDTO[])));
  }

  public getFood(foodId: string): Observable<FoodDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/${foodId}.json`;

    return this.http
      .get<FoodDTO>(url)
      .pipe(catchError(() => of({} as FoodDTO)));
  }

  public getFoodUnits(): Observable<FoodUnitDTO[]> {
    const url = `${this.baseUrl}/1/user/-/foods/units.json`;

    return this.http
      .get<FoodUnitDTO[]>(url)
      .pipe(catchError(() => of([] as FoodUnitDTO[])));
  }

  public searchFoods(query: string): Observable<FoodsDTO> {
    const url = `${this.baseUrl}/1/user/-/foods/search.json?query=${query}`;

    return this.http
      .get<FoodsDTO>(url)
      .pipe(catchError(() => of({} as FoodsDTO)));
  }

  // Nutrition Time Series
  //    The Nutrition Time Series endpoints are used for
  //    querying food- and water-related data over a period
  //    of time either by specifying a date and time period,
  //    or a date range.

  public getNutritionTimeSeriesByDateRange(
    resource: NutritionResources,
    startDate: string,
    endDate: string
  ): Observable<any> {
    const url = `${this.baseUrl}/1/user/-/foods/log/${resource}/date/${startDate}/${endDate}.json`;

    return this.http.get<any>(url).pipe(catchError(() => of({} as any)));
  }

  public getNutritionTimeSeriesByDate(
    resource: NutritionResources,
    date: string,
    period: NutritionPeriods
  ): Observable<any> {
    const url = `${this.baseUrl}/1/user/-/foods/log/${resource}/date/${date}/${period}.json`;

    return this.http.get<any>(url).pipe(catchError(() => of({} as any)));
  }

  // Sleep
  //    The Sleep endpoints are used for querying and modifying
  //    the user’s general sleep data.

  public getSleepLogByDate(date: string): Observable<SleepLogDTO> {
    const url = `${this.baseUrl}/1.2/user/-/sleep/date/${date}.json`;

    return this.http
      .get<SleepLogDTO>(url)
      .pipe(catchError(() => of({} as SleepLogDTO)));
  }

  public getSleepLogByDateRange(
    startDate: string,
    endDate: string
  ): Observable<SleepLogByDateDTO> {
    const url = `${this.baseUrl}/1.2/user/-/sleep/date/${startDate}/${endDate}.json`;

    return this.http
      .get<SleepLogByDateDTO>(url)
      .pipe(catchError(() => of({} as SleepLogByDateDTO)));
  }

  // SpO2
  //    SpO2 (Oxygen Saturation) is a measurement of your
  //    blood oxygen level.

  public getSpO2SummaryByDate(date: string): Observable<SpO2SummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/spo2/date/${date}.json`;

    return this.http
      .get<SpO2SummaryDTO>(url)
      .pipe(catchError(() => of({} as SpO2SummaryDTO)));
  }

  public getSpO2SummaryByInterval(
    startDate: string,
    endDate: string
  ): Observable<SpO2SummaryDTO[]> {
    const url = `${this.baseUrl}/1/user/-/spo2/date/${startDate}/${endDate}.json`;

    return this.http
      .get<SpO2SummaryDTO[]>(url)
      .pipe(catchError(() => of([] as SpO2SummaryDTO[])));
  }

  // SpO2 Intraday
  //    The SpO2 Intraday endpoints return the SpO2 values
  //    calculated on a 5-minute exponentially-moving average.

  public getSpO2IntradayByDate(date: string): Observable<SpO2IntradayDTO> {
    const url = `${this.baseUrl}/1/user/-/spo2/date/${date}/all.json`;

    return this.http
      .get<SpO2IntradayDTO>(url)
      .pipe(catchError(() => of({} as SpO2IntradayDTO)));
  }

  public getSpO2IntradayByInterval(
    startDate: string,
    endDate: string
  ): Observable<SpO2IntradayDTO[]> {
    const url = `${this.baseUrl}/1/user/-/spo2/date/${startDate}/${endDate}/all.json`;

    return this.http
      .get<SpO2IntradayDTO[]>(url)
      .pipe(catchError(() => of([] as SpO2IntradayDTO[])));
  }

  // Subscriptions
  //    The Subscription endpoints allow an application to
  //    request notifications to user's specific data collection.

  public getSubscriptionList(
    collection: Collections
  ): Observable<SubscriptionListDTO> {
    const url = `${this.baseUrl}/1/user/-/${collection}/apiSubscriptions.json`;

    return this.http
      .get<SubscriptionListDTO>(url)
      .pipe(catchError(() => of({} as SubscriptionListDTO)));
  }

  // Temperature
  //    The Temperature endpoints are used for querying
  //    either the core temperature data logged manually
  //    by the user, or the skin temperature recorded by
  //    the device while the user is asleep.

  public getTemperatureCoreSummaryByDate(
    date: string
  ): Observable<TemperatureCoreSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/temp/core/date/${date}.json`;

    return this.http
      .get<TemperatureCoreSummaryDTO>(url)
      .pipe(catchError(() => of({} as TemperatureCoreSummaryDTO)));
  }

  public getTemperatureCoreSummaryByInterval(
    startDate: string,
    endDate: string
  ): Observable<TemperatureCoreSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/temp/core/date/${startDate}/${endDate}.json`;

    return this.http
      .get<TemperatureCoreSummaryDTO>(url)
      .pipe(catchError(() => of({} as TemperatureCoreSummaryDTO)));
  }

  public getTemperatureSkinSummaryByDate(
    date: string
  ): Observable<TemperatureSkinSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/temp/skin/date/${date}.json`;

    return this.http
      .get<TemperatureSkinSummaryDTO>(url)
      .pipe(catchError(() => of({} as TemperatureSkinSummaryDTO)));
  }

  public getTemperatureSkinSummaryByInterval(
    startDate: string,
    endDate: string
  ): Observable<TemperatureSkinSummaryDTO> {
    const url = `${this.baseUrl}/1/user/-/temp/skin/date/${startDate}/${endDate}.json`;

    return this.http
      .get<TemperatureSkinSummaryDTO>(url)
      .pipe(catchError(() => of({} as TemperatureSkinSummaryDTO)));
  }

  // User
  //    The User endpoints display information about the
  //    user's profile information, the regional locale &
  //    language settings, and their badges collected

  public getBadges(): Observable<BadgeDTO> {
    const url = `${this.baseUrl}/1/user/-/badges.json`;

    return this.http
      .get<BadgeDTO>(url)
      .pipe(catchError(() => of({} as BadgeDTO)));
  }

  public getProfile(): Observable<ProfileDTO> {
    const url = `${this.baseUrl}/1/user/-/profile.json`;

    return this.http
      .get<ProfileDTO>(url)
      .pipe(catchError(() => of({} as ProfileDTO)));
  }
}
