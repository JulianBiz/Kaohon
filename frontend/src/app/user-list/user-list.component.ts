import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import {fadeIn} from "../animations";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user";
import {ApiService} from "../shared/api.service";

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
  apiService : ApiService = null
  userGroup: User[] = [];

  constructor(apiService: ApiService) {
    this.apiService = apiService
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    let url = "http://localhost:8080/demo/all"
    this.apiService.getAllUsers().subscribe(
      res => {
        this.userGroup = res
      },
      err => {
        alert("An error has occurred");
      }
    )
  }

}
