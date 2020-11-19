import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['../app.component.css']
})
export class MakePostComponent implements OnInit {
  error: boolean;

  constructor() {
    this.error = false;
  }

  ngOnInit(): void {
  }

}
