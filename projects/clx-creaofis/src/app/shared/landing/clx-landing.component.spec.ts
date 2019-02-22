import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClxLandingComponent } from './clx-landing.component';
import { ClxSharedModule } from '../clx-shared.module';

describe('ClxLandingComponent', () => {
  let component: ClxLandingComponent;
  let fixture: ComponentFixture<ClxLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClxSharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClxLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
