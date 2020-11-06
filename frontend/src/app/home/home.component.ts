import {Component, OnInit, Output} from '@angular/core';
import { posts, users } from "../users";
import {animate, state, style, transition, trigger} from "@angular/animations";
import { EventEmitter } from "events";
import { fadeIn } from "../animations"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'],
  animations: [
    fadeIn
  ]
})
export class HomeComponent implements OnInit {
  allPosts = posts
  allUsers = users
  activeId = -1

  //Temp: Current User (Julian)
  currentUser = null

  @Output() selected = new EventEmitter<number>();
  loadPost(id : number) {
    this.selected.emit({
      id: id
    });
    this.activeId = id
  }

  getActivePost() {
    if (this.activeId != -1)
      return this.allPosts.find(x => x.postId == this.activeId);
  }

  backToFeed() {
    this.activeId = -1
  }

  findUser(id : number) {
    return this.allUsers.find(x => x.id == id);
  }

  constructor() {
    this.activeId = -1;
    this.currentUser = users[0]
  }

  ngOnInit(): void {
  }
}
