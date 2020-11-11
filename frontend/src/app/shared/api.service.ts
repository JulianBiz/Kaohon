import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  // Feedback
}
