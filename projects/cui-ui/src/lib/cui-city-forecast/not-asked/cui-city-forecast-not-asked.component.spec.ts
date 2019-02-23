import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCityForecastNotAskedComponent } from './cui-city-forecast-not-asked.component';

describe('CuiCityForecastNotAskedComponent', () => {
  let component: CuiCityForecastNotAskedComponent;
  let fixture: ComponentFixture<CuiCityForecastNotAskedComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastNotAskedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiCityForecastNotAskedComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a GenericError', () => {
    // WARN: prettier is messing with the formatting and is addint two spaces
    expect(element.textContent).toBe(' Component just loaded. ');
  });
});
