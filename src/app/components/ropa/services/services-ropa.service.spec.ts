import { TestBed } from '@angular/core/testing';

import { ServicesRopaService } from './services-ropa.service';

describe('ServicesRopaService', () => {
  let service: ServicesRopaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesRopaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
