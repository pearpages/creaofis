import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BssBusinessComponent } from './bss-business.component';

describe('BssBusinessComponent', () => {
  let component: BssBusinessComponent;
  let fixture: ComponentFixture<BssBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BssBusinessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BssBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
