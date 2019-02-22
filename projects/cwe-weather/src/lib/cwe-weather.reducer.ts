import { Action } from '@ngrx/store';

import { NotAsked, Pending, Failure, Success, GenericError } from 'bss-business';

import { CweWeatherActionTypes } from './cwe-weather.actions';

export function reducer(state = new NotAsked(), action: Action): {} {
  switch (action.type) {
    case CweWeatherActionTypes.FETCH:
      return new Pending();
    case CweWeatherActionTypes.FETCH_FAILURE:
      return new Failure<GenericError>({ message: action['payload'] });
    case CweWeatherActionTypes.FETCH_SUCCESS:
      return new Success(action['payload']);
    default:
      return state;
  }
}
