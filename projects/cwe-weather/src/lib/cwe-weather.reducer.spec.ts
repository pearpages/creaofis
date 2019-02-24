import { WeatherResponse, NotAsked, Pending, GenericError, Failure, Success } from 'bss-business';

import { reducer } from './cwe-weather.reducer';
import {
  CweWeatherFetchAction,
  CweWeatherFetchFailureAction,
  CweWeatherFetchSuccessAction
} from './cwe-weather.actions';

const weatherData = {
  coord: {
    lon: 123,
    lat: 435
  },
  base: 'base',
  visibility: 100,
  dt: 20,
  id: 123,
  name: 'name',
  cod: 123,
  weather: [
    {
      id: 1231,
      main: 'main',
      description: 'description',
      icon: 'icon'
    }
  ],
  main: {
    temp: 768,
    pressure: 456,
    humidity: 167,
    temp_min: 4356,
    temp_max: 6575
  },
  wind: {
    speed: 1235,
    deg: 164
  },
  clouds: { all: 235 },
  sys: {
    type: 244,
    id: 32534,
    message: 3656,
    country: 'ES',
    sunrise: Date.now(),
    sunset: Date.now()
  }
};
Object.freeze(weatherData);

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
    const newState = reducer(state, new CweWeatherFetchSuccessAction(weatherData));
    expect(newState).toEqual(new Success({ ...weatherData }));
  });
});
