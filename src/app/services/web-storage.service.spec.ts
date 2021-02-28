import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { WebStorageService } from './web-storage.service';

describe('WebStorageService', () => {
  let service: WebStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', [ 'get', 'put' ]) }
      ]
    });
    service = TestBed.inject(WebStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
