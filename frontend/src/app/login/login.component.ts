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

  login(): void {
    // alert(this.credentials.username + " : " + this.credentials.password);
    // this.app.authenticate(this.credentials, () => {
    //   this.router.navigateByUrl('/');
    //   alert('Successfully Logged In!');
    //   this.error = false;
    // });

    if (this.app.login(this.credentials.username, this.credentials.password)) {
      this.error = false;
      this.router.navigateByUrl('/');
    } else {
      this.error = true;
    }
  }

}

export interface Credentials {
  username: string;
  password: string;
}
