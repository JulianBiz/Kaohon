import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../app.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = true
  constructor() { }

  ngOnInit(): void {
  }

}
