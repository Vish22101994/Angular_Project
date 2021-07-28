import { TestBed } from '@angular/core/testing';

import { RegisterCardService } from './register-card.service';

describe('RegisterCardService', () => {
  let service: RegisterCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
