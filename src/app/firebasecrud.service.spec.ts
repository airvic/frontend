import { TestBed } from '@angular/core/testing';

import { FirebasecrudService } from './firebasecrud.service';

describe('FirebasecrudService', () => {
  let service: FirebasecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
