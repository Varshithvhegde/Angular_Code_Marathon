import { TestBed } from '@angular/core/testing';

import { HouseFormGuard } from './house-form.guard';

describe('HouseFormGuard', () => {
  let guard: HouseFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HouseFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
