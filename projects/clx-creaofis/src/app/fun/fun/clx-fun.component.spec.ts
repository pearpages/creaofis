import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiUiModule } from 'cui-ui';

import { ClxFunComponent } from './clx-fun.component';

describe('FunComponent', () => {
  let component: ClxFunComponent;
  let fixture: ComponentFixture<ClxFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CuiUiModule],
      declarations: [ClxFunComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClxFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the snake game', () => {
    expect(fixture.elementRef.nativeElement.querySelector('cui-snake')).toBeTruthy();
  });
});
