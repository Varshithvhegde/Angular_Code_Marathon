import { TestBed } from '@angular/core/testing';

import { HouseApiService } from './house-api.service';

describe('HouseApiService', () => {
  let service: HouseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
