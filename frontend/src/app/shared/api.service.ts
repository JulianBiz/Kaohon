import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user-list/model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/demo';
  private ALL_USERS = `${this.BASE_URL}\\all`;
  private CREATE_USER = `${this.BASE_URL}\\newAdd`;
  http: HttpClient = null;

  authenticated = false;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.ALL_USERS);
  }

  createUser(user: User): Observable<User> {
    alert('User: ' + user.first + ' ' + user.last);
    return this.http.post<User>(this.CREATE_USER, user);
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    headers.append('Access-Control-Allow-Credentials', 'true');

    this.http.get('http://localhost:8080/demo/user', {headers}).subscribe(
      res => {
        this.authenticate = res['name'];
        return callback && callback();
      }
    );
  }

  // Feedback
}
