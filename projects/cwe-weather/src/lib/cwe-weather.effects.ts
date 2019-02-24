import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { WeatherData } from 'bss-business';

import { CweWeatherAction, CweWeatherFetchAction } from './cwe-weather.actions';
import { CweWeatherService } from './cwe-weather.service';
import {
  CweWeatherActionTypes,
  CweWeatherFetchSuccessAction,
  CweWeatherFetchFailureAction
} from './cwe-weather.actions';

@Injectable()
export class CweWeatherEffects {
  constructor(private actions$: Actions, private cweWeatherService: CweWeatherService) {}

  @Effect()
  fetch$: Observable<CweWeatherAction> = this.actions$.pipe(
    ofType(CweWeatherActionTypes.FETCH),
    switchMap((action: CweWeatherFetchAction) =>
      this.cweWeatherService.getForecastByCityName(action.payload).pipe(
        map((weatherData: WeatherData) => new CweWeatherFetchSuccessAction(weatherData)),
        catchError(() => of(new CweWeatherFetchFailureAction('Not Found')))
      )
    )
  );
}
