import { TestBed } from '@angular/core/testing';

import { NgRedcapMaterialService } from './ng-redcap-material.service';

describe('NgRedcapMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRedcapMaterialService = TestBed.get(NgRedcapMaterialService);
    expect(service).toBeTruthy();
  });
});
