import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { WeatherResponse, WeatherData, Failure, GenericError, Success } from 'bss-business';

// TODO: move apikey to module configuration
const apiKey = '1112ae9ee57bad8595d7beed9e3d039e';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;

@Injectable()
export class CweWeatherService {
  private apiKey: string;
  constructor(private httpClient: HttpClient) {}

  getForecastByCityName(cityName: string, countryCode?: string): Observable<WeatherData> {
    const countryCodeQuery = countryCode ? `,${countryCode}` : '';
    return this.httpClient.get<WeatherData>(`${baseUrl}q=${cityName}${countryCodeQuery}&appid=${apiKey}`);
  }

  getForecastByCityId(cityId: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherData>(`${baseUrl}id=${cityId}&appid=${apiKey}`).pipe(
      map((weatherData: WeatherData) => new Success<WeatherData>(weatherData)),
      catchError(() => of(new Failure<GenericError>({ message: 'Not Found' })))
    );
  }

  getForeCastByGeographicCoordinates(lat: number, lon: number): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherData>(`${baseUrl}lat=${lat}&lon=${lon}`).pipe(
      map((weatherData: WeatherData) => new Success<WeatherData>(weatherData)),
      catchError(() => of(new Failure<GenericError>({ message: 'Not Found' })))
    );
  }

  getForeCastByZipCode(zipCode: string, countryCode?: string): Observable<WeatherResponse> {
    const countryCodeQuery = countryCode ? `,${countryCode}` : '';
    return this.httpClient.get<WeatherData>(`${baseUrl}zip=${zipCode}${countryCodeQuery}`).pipe(
      map((weatherData: WeatherData) => new Success<WeatherData>(weatherData)),
      catchError(() => of(new Failure<GenericError>({ message: 'Not Found' })))
    );
  }
}
