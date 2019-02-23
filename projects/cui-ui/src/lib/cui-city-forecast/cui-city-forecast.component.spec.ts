import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCityForecastComponent } from './cui-city-forecast.component';
import { CuiCityForecastSuccessComponent } from './success/cui-city-forecast-success.component';
import { CuiCityForecastNotAskedComponent } from './not-asked/cui-city-forecast-not-asked.component';
import { CuiCityForecastFailureComponent } from './failure/cui-city-forecast-failure.component';
import { CuiCityForecastPendingComponent } from './pending/cui-city-forecast-pending.component';

describe('CuiCityForecastComponent', () => {
  let component: CuiCityForecastComponent;
  let fixture: ComponentFixture<CuiCityForecastComponent>;

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
    fixture = TestBed.createComponent(CuiCityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
