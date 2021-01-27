import { TestBed } from '@angular/core/testing';

import { AutentifiacionGuard } from './autentifiacion.guard';

describe('AutentifiacionGuard', () => {
  let guard: AutentifiacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentifiacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
