import { TestBed } from '@angular/core/testing';

import { UserListInterceptorService } from './user-list-interceptor.service';

describe('UserListInterceptorService', () => {
    let service: UserListInterceptorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserListInterceptorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
