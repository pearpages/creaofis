import { Component, OnInit, Input } from '@angular/core';

import { WeatherData } from 'bss-business';

@Component({
  selector: 'cui-city-forecast-success',
  styleUrls: ['./cui-city-forecast-success.component.scss'],
  template: `
    <div class="cui-city-forecast-success">
      <h4 class="cui-city-forecast-success__title">
        Forecast for {{ weatherData.name }} ({{ weatherData.sys.country }}) ID: {{ weatherData.id }} COD:
        {{ weatherData.cod }}
      </h4>
      <dl class="cui-city-forecast-success__info">
        <dt class="cui-city-forecast-success__info-label">Coord</dt>
        <dl>lon: {{ weatherData.coord.lon }}, lat: {{ weatherData.coord.lat }}</dl>
        <dt class="cui-city-forecast-success__info-label">Weather</dt>
        <dd>
          <dl *ngFor="let weather of weatherData.weather">
            <dt class="cui-city-forecast-success__info-label">id</dt>
            <dd>{{ weather.id }}</dd>
            <dt class="cui-city-forecast-success__info-label">main</dt>
            <dd>{{ weather.main }}</dd>
            <dt class="cui-city-forecast-success__info-label">description</dt>
            <dd>{{ weather.description }}</dd>
            <dt class="cui-city-forecast-success__info-label">icon</dt>
            <dd>{{ weather.icon }}</dd>
          </dl>
        </dd>
        <dt class="cui-city-forecast-success__info-label">base</dt>
        <dd>{{ weatherData.base }}</dd>
        <dt class="cui-city-forecast-success__info-label">main</dt>
        <dd>
          <dl>
            <dt>temp</dt>
            <dd>{{ weatherData.main.temp }}</dd>
            <dt>pressure</dt>
            <dd>{{ weatherData.main.pressure }}</dd>
            <dt>humidity</dt>
            <dd>{{ weatherData.main.humidity }}</dd>
            <dt>temp_min</dt>
            <dd>{{ weatherData.main.temp_min }}</dd>
            <dt>temp_max</dt>
            <dd>{{ weatherData.main.temp_max }}</dd>
          </dl>
        </dd>
        <dt class="cui-city-forecast-success__info-label">visibility</dt>
        <dd>{{ weatherData.visibility }}</dd>
        <dt class="cui-city-forecast-success__info-label">wind</dt>
        <dd>{{ weatherData.wind.speed }}</dd>
        <dt class="cui-city-forecast-success__info-label">clouds</dt>
        <dd>{{ weatherData.clouds.all }}</dd>
        <dt class="cui-city-forecast-success__info-label">dt</dt>
        <dd>{{ weatherData.dt }}</dd>
        <dt class="cui-city-forecast-success__info-label">sys</dt>
        <dd>
          <dl>
            <dt>type/id</dt>
            <dd>{{ weatherData.sys.type }}/{{ weatherData.sys.id }}</dd>
            <dt>message</dt>
            <dd>{{ weatherData.sys.message }}</dd>
            <dt>sunrise</dt>
            <dd>{{ weatherData.sys.sunrise | date }}</dd>
            <dt>sunset</dt>
            <dd>{{ weatherData.sys.sunset | date }}</dd>
          </dl>
        </dd>
      </dl>
    </div>
  `
})
export class CuiCityForecastSuccessComponent implements OnInit {
  @Input() weatherData: WeatherData;
  constructor() {}

  ngOnInit() {}
}
