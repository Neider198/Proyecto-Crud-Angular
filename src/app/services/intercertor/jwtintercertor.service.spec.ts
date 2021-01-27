import { TestBed } from '@angular/core/testing';

import { JwtintercertorService } from './jwtintercertor.service';

describe('JwtintercertorService', () => {
  let service: JwtintercertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtintercertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
