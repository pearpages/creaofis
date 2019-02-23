import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherData } from 'bss-business';

import { CuiCityForecastSuccessComponent } from './cui-city-forecast-success.component';

describe('CuiCityForecastSuccessComponent', () => {
  let component: CuiCityForecastSuccessComponent;
  let fixture: ComponentFixture<CuiCityForecastSuccessComponent>;
  let weatherData: WeatherData;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastSuccessComponent]
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
    fixture = TestBed.createComponent(CuiCityForecastSuccessComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a GenericError', () => {
    expect(element.textContent).toBe('');
    component.weatherData = weatherData;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.cui-city-forecast-success__title').textContent).toBe(
      ' Forecast for name (ES) ID: 123 COD: 123 '
    );
  });
});
