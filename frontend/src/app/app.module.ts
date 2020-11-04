import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, Router, RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";

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
    path:'',
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    UserListComponent,
    LoginComponent
  ]
})
export class AppModule { }
