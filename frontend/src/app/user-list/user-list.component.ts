import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import {fadeIn} from "../animations";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user";

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
  http : HttpClient = null
  userGroup: User[] = [];

  constructor(http: HttpClient) {
    this.http = http
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    let url = "http://localhost:8080/demo/all"
    this.http.get<User[]>(url).subscribe(
      res => {
        this.userGroup = res
      },
      err => {
        alert("An error has occurred");
      }
    )
  }

}
