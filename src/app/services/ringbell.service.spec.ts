import { TestBed } from '@angular/core/testing';

import { RingbellService } from './ringbell.service';

describe('RingbellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RingbellService = TestBed.get(RingbellService);
    expect(service).toBeTruthy();
  });
});
