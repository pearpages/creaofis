import {
  RemoteDataKind,
  Success,
  Failure,
  Pending,
  WeatherResponse,
  GenericError,
  NotAsked
} from './bss-business.models';
import { weatherDataMock } from './mocks';

describe('bss-business models', () => {
  it('should have RemoteData clases', () => {
    const success: WeatherResponse = new Success(weatherDataMock);
    expect(success.value).toEqual(weatherDataMock);
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
