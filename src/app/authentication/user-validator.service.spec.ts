import { TestBed, inject } from '@angular/core/testing';

import { UserValidatorService } from './user-validator.service';

describe('UserValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserValidatorService]
    });
  });

  it('should be created', inject([UserValidatorService], (service: UserValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
