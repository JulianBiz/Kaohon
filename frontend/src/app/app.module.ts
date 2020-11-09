import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, Router, RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { ReportComponent } from './report/report.component';
import {CommonModule} from "@angular/common";
import { ViewPostComponent } from './view-post/view-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SinglePostComponent } from './single-post/single-post.component';

const appRoutes :Routes = [
  {
    path:'nav',
    component: NavigationComponent
  },
  {
    path:'users',
    component: UserListComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'report',
    component: ReportComponent
  },
  {
    path:'view',
    component: ViewPostComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserListComponent,
    HomeComponent,
    LoginComponent,
    ReportComponent,
    ViewPostComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    UserListComponent,
    LoginComponent,
    ReportComponent,
    ViewPostComponent
  ]
})
export class AppModule { }
