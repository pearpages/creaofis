import { Component, Input } from '@angular/core';

import { RemoteDataKind, WeatherResponse, GenericError, WeatherData, NotAsked } from 'bss-business';

@Component({
  selector: 'cui-city-forecast',
  styles: [
    `
      .cui-city-forecast {
        min-height: 630px;
        width: 310px;
        border: 1px dotted #ddd;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `
  ],
  template: `
    <div class="cui-city-forecast" [ngSwitch]="weatherResponse.kind">
      <cui-city-forecast-pending *ngSwitchCase="remoteDataKind.Pending"></cui-city-forecast-pending>
      <cui-city-forecast-success
        *ngSwitchCase="remoteDataKind.Success"
        [weatherData]="getWeatherData(weatherResponse)"
      ></cui-city-forecast-success>
      <cui-city-forecast-failure
        *ngSwitchCase="remoteDataKind.Failure"
        [genericError]="getGenericError(weatherResponse)"
      ></cui-city-forecast-failure>
      <cui-city-forecast-not-asked *ngSwitchDefault></cui-city-forecast-not-asked>
    </div>
  `
})
export class CuiCityForecastComponent {
  remoteDataKind = RemoteDataKind;
  @Input() weatherResponse: WeatherResponse = new NotAsked();

  getGenericError(weatherResponse: WeatherResponse): GenericError {
    if (weatherResponse.kind === RemoteDataKind.Failure) {
      return weatherResponse.value;
    }
    return null;
  }

  getWeatherData(weatherResponse: WeatherResponse): WeatherData {
    if (weatherResponse.kind === RemoteDataKind.Success) {
      return weatherResponse.value;
    }
    return null;
  }
}
