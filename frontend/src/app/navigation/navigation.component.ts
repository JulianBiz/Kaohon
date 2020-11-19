import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../app.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = true;

  app: ApiService;
  router: Router;

  constructor(app: ApiService, router: Router) {
    this.app = app;
    this.router = router;
  }

  ngOnInit(): void {
  }

  logOut() {
    this.app.logout();
  }
}
