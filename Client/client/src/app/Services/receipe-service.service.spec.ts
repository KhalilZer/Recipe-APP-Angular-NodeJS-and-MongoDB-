import { TestBed } from '@angular/core/testing';

import { ReceipeServiceService } from './receipe-service.service';

describe('ReceipeServiceService', () => {
  let service: ReceipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
