import { Action } from '@ngrx/store';

import { WeatherData } from 'bss-business';

export type CweWeatherAction = CweWeatherFetchAction | CweWeatherFetchSuccessAction | CweWeatherFetchFailureAction;

export enum CweWeatherActionTypes {
  FETCH = '[Weather] fetching data',
  FETCH_SUCCESS = '[Weather] fetch succeeded',
  FETCH_FAILURE = '[Weather] fetch failed'
}

export class CweWeatherFetchAction implements Action {
  readonly type = CweWeatherActionTypes.FETCH;
  payload: string;
  constructor(city: string) {
    this.payload = city;
  }
}

export class CweWeatherFetchSuccessAction implements Action {
  readonly type = CweWeatherActionTypes.FETCH_SUCCESS;
  payload: WeatherData;
  constructor(response: WeatherData) {
    this.payload = response;
  }
}

export class CweWeatherFetchFailureAction implements Action {
  readonly type = CweWeatherActionTypes.FETCH_FAILURE;
  payload: string;
  constructor(message: string) {
    this.payload = message;
  }
}
