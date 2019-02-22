import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCityForecastComponent } from './cui-city-forecast.component';

describe('CuiCityForecastComponent', () => {
  let component: CuiCityForecastComponent;
  let fixture: ComponentFixture<CuiCityForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastComponent]
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
