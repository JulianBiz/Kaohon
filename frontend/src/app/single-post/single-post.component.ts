import {Component, Input, OnInit, Output} from '@angular/core';
import { posts, users } from "../users";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {EventEmitter} from "events";
import {fadeIn} from "../animations";

@Component({
  selector: 'post',
  templateUrl: './single-post.component.html',
  styleUrls: ['../app.component.css'],
  animations: [
    fadeIn
  ]
})
export class SinglePostComponent {
  @Input() post = null
  @Input() fullPost = false
  @Output() selectedPost = new EventEmitter<number>();

  loadPost(id : number) {
    this.selectedPost.emit({
      id: id
    });

    var delay = 200;
    if (id == -1) {
      setTimeout(function (this) { this.goBack() }, delay);
    }
  }

  goBack() {
    this.fullPost = false;
  }

  setPost(p : typeof posts[0]) {
    this.selectedPost = p
  }

  allPosts = posts
  allUsers = users

  constructor() { }

  findUser(id : number) {
    return this.allUsers.find(x => x.id == id);
  }

  ngOnInit(): void {
  }

}
