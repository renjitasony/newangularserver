import { TestBed } from '@angular/core/testing';

import { ScndService } from './scnd.service';

describe('ScndService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScndService = TestBed.get(ScndService);
    expect(service).toBeTruthy();
  });
});
