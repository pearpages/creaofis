import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CweWeatherComponent } from './cwe-weather.component';

describe('WeatherComponent', () => {
  let component: CweWeatherComponent;
  let fixture: ComponentFixture<CweWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
