import { Component, Input } from '@angular/core';

@Component({
  selector: 'cui-checked',
  template: `
    <input type="checkbox" disabled [checked]="checked" />
  `
})
export class CuiCheckedComponent {
  @Input() checked = 'checked';
}
