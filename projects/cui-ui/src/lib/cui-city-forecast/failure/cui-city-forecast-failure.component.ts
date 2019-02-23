import { Component, OnInit, Input } from '@angular/core';

import { GenericError } from 'bss-business';

@Component({
  selector: 'cui-city-forecast-failure',
  template: `
    {{ genericError.message }}
  `
})
export class CuiCityForecastFailureComponent implements OnInit {
  @Input() genericError: GenericError;
  constructor() {}

  ngOnInit() {}
}
