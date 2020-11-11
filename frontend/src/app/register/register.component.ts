import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/model/user';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  apiService: ApiService;
  model: User = {
    id: null,
    first: 'First',
    last: 'Last',
    name: 'Full',
    password: '',
    email: '',
    phone: '',
    hometown: '',
    division: '',
    friendList: null
  };

  users: User[] = [];

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
  }

  createUser(): void {
    let newUser:User = {
      id: null,
      first: this.model.first,
      last: this.model.last,
      name: 'New User',
      password: this.model.password,
      email: this.model.email,
      phone: '',
      hometown: '',
      division: '',
      friendList: null
    };
    this.apiService.createUser(newUser).subscribe(
      res => {
        newUser.id = res.id;
        this.users.push(newUser);
      }, err => {
        alert('Error occurred with User Creation! API Service-> createUser()');
      }
    );
  }
}
