import {
  RemoteDataKind,
  Success,
  Failure,
  Pending,
  WeatherResponse,
  WeatherData,
  GenericError,
  NotAsked
} from './bss-business.models';

describe('bss-business models', () => {
  let weatherData: WeatherData;
  beforeEach(() => {
    weatherData = {
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
  });
  it('should have RemoteData clases', () => {
    const success: WeatherResponse = new Success(weatherData);
    expect(success.value).toEqual(weatherData);
    expect(success.kind).toEqual(RemoteDataKind.Success);
    const error = new GenericError('Not Found');
    const failure: WeatherResponse = new Failure(error);
    expect(failure.kind).toBe(RemoteDataKind.Failure);
    expect(failure.value).toEqual(error);
    const pending: WeatherResponse = new Pending();
    const notAsked: WeatherResponse = new NotAsked();
    expect(pending.kind).toBe(RemoteDataKind.Pending);
    expect(notAsked.kind).toBe(RemoteDataKind.NotAsked);
  });
});
