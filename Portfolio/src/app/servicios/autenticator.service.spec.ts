import { TestBed } from '@angular/core/testing';

import { AutenticatorService } from './autenticator.service';

describe('AutenticatorService', () => {
  let service: AutenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
