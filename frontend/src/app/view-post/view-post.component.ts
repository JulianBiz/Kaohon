import {Component, Input, OnInit, Output} from '@angular/core';
import { posts } from "../users";
import {EventEmitter} from "events";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewPostComponent {
  @Input() post: typeof posts[0]
  @Input() goBack = false

  constructor() {
    this.goBack = false
  }

  returnNow() {
    this.goBack = true
  }

  selectPost(postId : number) {
    this.post = posts.find(x => x.postId == postId)
  }

  ngOnInit(): void {
  }

}
