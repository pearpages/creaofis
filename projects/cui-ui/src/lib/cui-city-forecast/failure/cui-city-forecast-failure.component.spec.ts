import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericError } from 'bss-business';

import { CuiCityForecastFailureComponent } from './cui-city-forecast-failure.component';

describe('CuiCityForecastFailureComponent', () => {
  let component: CuiCityForecastFailureComponent;
  let fixture: ComponentFixture<CuiCityForecastFailureComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCityForecastFailureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiCityForecastFailureComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a GenericError', () => {
    // WARN: prettier is messing with the formatting and is addint two spaces
    expect(element.textContent).toBe('  ');
    component.genericError = new GenericError('hello there!');
    fixture.detectChanges();
    expect(element.textContent).toBe(' hello there! ');
  });
});
