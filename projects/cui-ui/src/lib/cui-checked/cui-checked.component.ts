import { Component, Input } from '@angular/core';

@Component({
  selector: 'cui-checked',
  template: `
    <input type="checkbox" disabled [checked]="checkedValue" />
  `
})
export class CuiCheckedComponent {
  @Input() checked = true;

  get checkedValue() {
    return this.checked ? 'checked' : '';
  }
}
