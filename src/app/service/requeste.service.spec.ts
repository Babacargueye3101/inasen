import { TestBed } from '@angular/core/testing';

import { RequesteService } from './requeste.service';

describe('RequesteService', () => {
  let service: RequesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
