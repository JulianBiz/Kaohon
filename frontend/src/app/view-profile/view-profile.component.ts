import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";
import {User} from "../user-list/model/user";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewProfileComponent implements OnInit {
  app: ApiService;
  router: Router;

  constructor(app: ApiService, router: Router) {
    this.app = app;
    this.router = router;

    setTimeout(() => {
      if (!app.isLoggedIn()) {
        this.router.navigateByUrl('/login');
      }
    }, 100);
  }

  ngOnInit(): void {
  }

  getUser(): User {
    return this.app.getUser();
  }

}
