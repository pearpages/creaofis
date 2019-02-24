import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiUiModule } from 'cui-ui';

import { reducer } from '../cwe-weather.reducer';
import { CweWeatherComponent } from './cwe-weather.component';

describe('WeatherComponent', () => {
  let component: CweWeatherComponent;
  let fixture: ComponentFixture<CweWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CuiUiModule, StoreModule.forRoot({}), StoreModule.forFeature('weather', reducer)],
      declarations: [CweWeatherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CweWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input form', () => {
    expect(component.form.get('cityName')).toBeTruthy();
  });

  it('should have a CuiForeCastComponent', () => {
    expect(fixture.nativeElement.querySelector('cui-city-forecast')).toBeTruthy();
  });
});
