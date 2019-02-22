import { TestBed } from '@angular/core/testing';

import { CweWeatherService } from './cwe-weather.service';

describe('CweWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CweWeatherService = TestBed.get(CweWeatherService);
    expect(service).toBeTruthy();
  });
});
