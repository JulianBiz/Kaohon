import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  credentials = {username: '', password: ''};

  constructor(private app: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
      this.error = false;
      return;
    });
    this.error = true;
    return false;
  }

}

export interface Credentials {
  username: string;
  password: string;
}
