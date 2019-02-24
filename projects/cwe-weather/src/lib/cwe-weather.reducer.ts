import { NotAsked, Pending, Failure, Success, GenericError } from 'bss-business';

import { WeatherResponse } from 'bss-business';

import { CweWeatherActionTypes, CweWeatherAction } from './cwe-weather.actions';

export function reducer(state: WeatherResponse = new NotAsked(), action: CweWeatherAction): {} {
  switch (action.type) {
    case CweWeatherActionTypes.FETCH:
      return new Pending();
    case CweWeatherActionTypes.FETCH_FAILURE:
      return new Failure<GenericError>(new GenericError(action.payload));
    case CweWeatherActionTypes.FETCH_SUCCESS:
      return new Success(action.payload);
    default:
      return state;
  }
}
