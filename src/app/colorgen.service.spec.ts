import { TestBed } from '@angular/core/testing';

import { ColorgenService } from './colorgen.service';

describe('ColorgenService', () => {
  let service: ColorgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
