import { WeatherResponse, NotAsked, Pending, GenericError, Failure, Success, weatherDataMock } from 'bss-business';

import { reducer } from './cwe-weather.reducer';
import {
  CweWeatherFetchAction,
  CweWeatherFetchFailureAction,
  CweWeatherFetchSuccessAction
} from './cwe-weather.actions';

describe('CweWeatherReducer', () => {
  let state: WeatherResponse;
  beforeEach(() => {
    state = new NotAsked();
  });
  it('should change the state to pending when fetching', () => {
    const newState = reducer(state, new CweWeatherFetchAction('hello'));
    expect(newState).toEqual(new Pending());
  });
  it('should return a failure object when failing the fetch', () => {
    const newState = reducer(state, new CweWeatherFetchFailureAction('Not Found'));
    expect(newState).toEqual(new Failure(new GenericError('Not Found')));
  });
  it('should return a success object when fetch is successful', () => {
    const newState = reducer(state, new CweWeatherFetchSuccessAction(weatherDataMock));
    expect(newState).toEqual(new Success({ ...weatherDataMock }));
  });
});
