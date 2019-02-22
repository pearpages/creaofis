import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cui-checked',
  template: `
    <input type="checkbox" disabled [checked]="checked" />
  `
})
export class CuiCheckedComponent implements OnInit {
  value: string;
  @Input() checked = 'checked';
  constructor() {}

  ngOnInit() {}
}
