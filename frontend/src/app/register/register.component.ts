import { Component, OnInit } from '@angular/core';
import { User } from "../user-list/model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  model: User = {
    id:-1,
    first:"",
    last:"",
    name:"",
    password:"",
    email:"",
    phone:"",
    hometown:"",
    division:"",
    friendList:null
  }

  constructor() { }

  ngOnInit(): void {
  }

  createUser() : void {
    alert(this.model.first+"-"+this.model.last+"-"+this.model.email);
  }

}
