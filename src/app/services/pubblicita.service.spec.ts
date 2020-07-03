import { TestBed } from '@angular/core/testing';

import { PubblicitaService } from './pubblicita.service';

describe('PubblicitaService', () => {
  let service: PubblicitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubblicitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
