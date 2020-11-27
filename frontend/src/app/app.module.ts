import { BrowserModule } from '@angular/platform-browser';
import {Inject, Injectable, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { ReportComponent } from './report/report.component';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './view-post/view-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SinglePostComponent } from './single-post/single-post.component';
import { RegisterComponent } from './register/register.component';
import {Observable} from 'rxjs';
import {ApiService} from './shared/api.service';
import { MakePostComponent } from './make-post/make-post.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const appRoutes: Routes = [
  { path: 'nav',  component: NavigationComponent },
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'report',  component: ReportComponent },
  { path: 'view',  component: ViewPostComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path: '', component: HomeComponent },
  { path: '**',  component: HomeComponent }
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
    SinglePostComponent,
    RegisterComponent,
    MakePostComponent,
    ViewProfileComponent
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
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


