import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomTestBed } from '../custom-test-bed';
import { WebStorageService } from '../services/web-storage.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await CustomTestBed.configureTestingModule({
      declarations: [ UserListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = CustomTestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
