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
  error!: boolean;
  success!: boolean;
  credentials = {username: '', password: ''};

  constructor(private app: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.app.login(this.credentials.username, this.credentials.password);
    setTimeout(() => this.showMessage(), 1000);
  }

  showMessage(): void {
    if (this.app.isLoggedIn()) {
      this.success = true;
      this.error = false;
      // setTimeout
      this.router.navigateByUrl('/');
    } else {
      this.success = true;
      this.error = true;
    }
  }

}

export interface Credentials {
  username: string;
  password: string;
}
