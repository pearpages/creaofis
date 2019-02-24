import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { weatherDataMock } from 'bss-business';

import { CuiCityForecastSuccessComponent } from './cui-city-forecast-success.component';

describe('CuiCityForecastSuccessComponent', () => {
  let component: CuiCityForecastSuccessComponent;
  let fixture: ComponentFixture<CuiCityForecastSuccessComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastSuccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
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
    component.weatherData = weatherDataMock;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.cui-city-forecast-success__title').textContent).toBe(
      ' Forecast for name (ES) ID: 123 COD: 123 '
    );
  });
});
