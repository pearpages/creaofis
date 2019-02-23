import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiSnakeComponent } from './cui-snake.component';

describe('CuiSnakeComponent', () => {
  let component: CuiSnakeComponent;
  let fixture: ComponentFixture<CuiSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuiSnakeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to the right url', () => {
    const iframe = fixture.elementRef.nativeElement.querySelector('iframe');
    expect(iframe.src).toBe('https://pearpages.com/games/snake/');
  });
});
