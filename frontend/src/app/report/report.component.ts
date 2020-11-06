import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['../app.component.css']
})
export class ReportComponent implements OnInit {

  model: ReportViewModel = {
    name:'',
    email:'',
    message:''
  };

  constructor() {

  }

  ngOnInit(): void {
  }

  sendFeedback() : void {
    alert(this.model.name);
  }

}

export interface ReportViewModel {
  name:string;
  email:string;
  message:string;
}
