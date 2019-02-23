interface Coord {
  lon: number;
  lat: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
interface Wind {
  speed: number;
  deg: number;
}
interface Clouds {
  all: number;
}
interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type RemoteData<E, A> = NotAsked | Pending | Success<A> | Failure<E>;

export enum RemoteDataKind {
  NotAsked = 'NotAsked',
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}

export class NotAsked {
  readonly kind = RemoteDataKind.NotAsked;
}

export class Pending {
  readonly kind = RemoteDataKind.Pending;
}

export class Success<A> {
  readonly kind = RemoteDataKind.Success;
  constructor(readonly value: A) {}
}

export class Failure<E> {
  readonly kind = RemoteDataKind.Failure;
  constructor(readonly value: E) {}
}

export interface WeatherData {
  coord: Coord;
  base: string;
  visibility: number;
  dt: number;
  id: number;
  name: string;
  cod: number;
  weather: Array<Weather>;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  sys: Sys;
}

export class GenericError {
  constructor(public message: string) {}
}

export type WeatherResponse = RemoteData<GenericError, WeatherData>;
