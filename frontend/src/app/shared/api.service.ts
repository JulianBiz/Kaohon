import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user-list/model/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/demo"
  private ALL_USERS = `${this.BASE_URL}\\all`;
  http : HttpClient = null

  constructor(http : HttpClient) {
    this.http = http
  }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.ALL_USERS)
  }

  //Feedback
}
