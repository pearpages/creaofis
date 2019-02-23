import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherData, Pending, GenericError, Failure, Success } from 'bss-business';

import { CuiCityForecastComponent } from './cui-city-forecast.component';
import { CuiCityForecastSuccessComponent } from './success/cui-city-forecast-success.component';
import { CuiCityForecastNotAskedComponent } from './not-asked/cui-city-forecast-not-asked.component';
import { CuiCityForecastFailureComponent } from './failure/cui-city-forecast-failure.component';
import { CuiCityForecastPendingComponent } from './pending/cui-city-forecast-pending.component';

describe('CuiCityForecastComponent', () => {
  let component: CuiCityForecastComponent;
  let fixture: ComponentFixture<CuiCityForecastComponent>;
  let weatherData: WeatherData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CuiCityForecastComponent,
        CuiCityForecastPendingComponent,
        CuiCityForecastFailureComponent,
        CuiCityForecastSuccessComponent,
        CuiCityForecastNotAskedComponent
      ]
    }).compileComponents();
  }));

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
    fixture = TestBed.createComponent(CuiCityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the right components', () => {
    expect(fixture.nativeElement.querySelector('cui-city-forecast-not-asked')).toBeTruthy();

    component.weatherResponse = new Pending();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('cui-city-forecast-pending')).toBeTruthy();

    component.weatherResponse = new Failure(new GenericError('OMG!'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('cui-city-forecast-failure')).toBeTruthy();

    component.weatherResponse = new Success(weatherData);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('cui-city-forecast-success')).toBeTruthy();
  });
});
