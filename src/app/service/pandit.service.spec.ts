import { TestBed } from '@angular/core/testing';

import { PanditService } from './pandit.service';

describe('PanditService', () => {
  let service: PanditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
