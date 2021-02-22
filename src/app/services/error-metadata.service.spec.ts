import { TestBed } from '@angular/core/testing';

import { ErrorMetadataService } from './error-metadata.service';

describe('ErrorMetadataService', () => {
  let service: ErrorMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
