import { Injectable } from '@angular/core';
import { USERS } from '../mocks/users';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  public async getAll(): Promise<User[]> {
    return USERS;
  }

  public async filter(text: string): Promise<User[]> {
    return USERS.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
  }
}
