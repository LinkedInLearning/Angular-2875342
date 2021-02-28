import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { WebStorageService } from '../services/web-storage.service';

/**
 * CHALLENGE
 * 
 * Make a custom wrapper for Angular's TestBed class
 * to inject common dependencies into all your specs.
 * 
 * This new class should be a drop-in replacement
 * for Angular's TestBed class.
 */

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [
        { provide: WebStorageService, useValue: jasmine.createSpyObj('WebStorageService', [ 'getRemote', 'setRemote' ]) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
