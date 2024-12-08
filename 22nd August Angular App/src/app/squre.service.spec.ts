import { TestBed } from '@angular/core/testing';

import { SqureService } from './squre.service';

describe('SqureService', () => {
  let service: SqureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
