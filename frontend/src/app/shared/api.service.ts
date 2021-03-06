import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user-list/model/user';
import {getToken} from "codelyzer/angular/styles/cssLexer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/demo';
  private ALL_USERS = `${this.BASE_URL}\\all`;
  private CREATE_USER = `${this.BASE_URL}\\newAdd`;
  http: HttpClient = null;
  router: Router = null;
  authenticated = false;
  user: User;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;

    // TEMP
    this.login('testuser2@gmail.com', 'testtest');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.ALL_USERS);
  }

  createUser(user: User): Observable<User> {
    // alert('User: ' + user.first + ' ' + user.last);
    return this.http.post<User>(this.CREATE_USER, user);
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this.authenticated = false;
  }

  getUser(): User {
    if (this.isLoggedIn()) {
      return this.user;
    }
    return null;
  }

  isLoggedIn(): boolean {
    // return !(sessionStorage.get('username') === null);
    return this.authenticated;
  }

  login(usr, pw): boolean {
    // ToDo: Check with Backend
    sessionStorage.removeItem('username');
    const credentials = {username: usr, password: pw};
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    headers.append('Access-Control-Allow-Headers', '**');

    const p = new HttpParams()
      .set('email', usr)
      .set('pw', pw);

    this.http.get('http://localhost:8080/demo/checkUser', { params: p }).subscribe(
      res => {
        if (res != null) {
          sessionStorage.setItem('username', usr);
          this.user = res as User;
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }, error => {
        this.authenticated = false;
      }
    );

    return this.isLoggedIn();
  }

  // authenticate(credentials, callback) {
  //   const headers = new HttpHeaders(credentials ? {
  //     authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //   } : {});
  //   // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  //   // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  //   // headers.append('Access-Control-Allow-Credentials', 'true');
  //
  //   // this.http.get('http://localhost:8080/demo/isUser', {headers}).subscribe(
  //   //   res => {
  //   //     this.authenticate = res['name'];
  //   //     return callback && callback();
  //   //   }
  //   // );
  // }

  // Feedback
}
