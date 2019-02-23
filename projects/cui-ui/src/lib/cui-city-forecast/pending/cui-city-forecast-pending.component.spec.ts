import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCityForecastPendingComponent } from './cui-city-forecast-pending.component';

describe('CuiCityForecastPendingComponent', () => {
  let component: CuiCityForecastPendingComponent;
  let fixture: ComponentFixture<CuiCityForecastPendingComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastPendingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiCityForecastPendingComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a GenericError', () => {
    // WARN: prettier is messing with the formatting and is addint two spaces
    expect(element.textContent).toBe(' Fetching data... ');
  });
});
