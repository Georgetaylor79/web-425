import { TestBed } from '@angular/core/testing';

import { SiginInGuard } from './sigin-in.guard';

describe('SiginInGuard', () => {
  let guard: SiginInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SiginInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});