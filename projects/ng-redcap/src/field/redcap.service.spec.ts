import { TestBed } from '@angular/core/testing';

import { REDCapService } from './redcap.service';

describe('REDCapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: REDCapService = TestBed.get(REDCapService);
    expect(service).toBeTruthy();
  });
});
