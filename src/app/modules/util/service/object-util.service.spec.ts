import { TestBed, inject } from '@angular/core/testing';

import { ObjectUtilService } from './object-util.service';

describe('ObjectUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectUtilService]
    });
  });

  it('should be created', inject([ObjectUtilService], (service: ObjectUtilService) => {
    expect(service).toBeTruthy();
  }));
});
