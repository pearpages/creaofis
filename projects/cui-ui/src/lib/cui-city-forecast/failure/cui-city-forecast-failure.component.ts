import { Component, Input } from '@angular/core';

import { GenericError } from 'bss-business';

@Component({
  selector: 'cui-city-forecast-failure',
  template: `
    {{ genericError?.message }}
  `
})
export class CuiCityForecastFailureComponent {
  @Input() genericError: GenericError;
}
