import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] | null = null;

  constructor(
    private userListService: UserListService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.users = await this.userListService.getAll();
  }

  public async update(text: string): Promise<void> {
    this.users = await this.userListService.filter(text);
  }

}
