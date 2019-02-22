import { TestBed } from '@angular/core/testing';

import { BssBusinessService } from './bss-business.service';

describe('BssBusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BssBusinessService = TestBed.get(BssBusinessService);
    expect(service).toBeTruthy();
  });
});
