import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CweWeatherService } from './cwe-weather.service';

describe('CweWeatherService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CweWeatherService]
    })
  );

  it('should be created', () => {
    const service: CweWeatherService = TestBed.get(CweWeatherService);
    expect(service).toBeTruthy();
  });
});
