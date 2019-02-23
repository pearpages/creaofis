import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCheckedComponent } from './cui-checked.component';

describe('CuiCheckedComponent', () => {
  let component: CuiCheckedComponent;
  let fixture: ComponentFixture<CuiCheckedComponent>;
  let input: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCheckedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiCheckedComponent);
    component = fixture.componentInstance;
    input = fixture.elementRef.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be either checked or not', () => {
    expect(input.checked).toBe(true);
    component.checked = false;
    fixture.detectChanges();
    expect(input.checked).toBe(false);
  });
});
