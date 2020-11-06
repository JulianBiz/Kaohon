import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import {fadeIn} from "../animations";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['../app.component.css'],
  animations: [
    fadeIn
  ]
})
export class UserListComponent implements OnInit {
  userList = users
  title = 'View Members';
  constructor() { }

  ngOnInit(): void {
  }

}
