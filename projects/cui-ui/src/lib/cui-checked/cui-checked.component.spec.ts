import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCheckedComponent } from './cui-checked.component';

describe('CuiCheckedComponent', () => {
  let component: CuiCheckedComponent;
  let fixture: ComponentFixture<CuiCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCheckedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
