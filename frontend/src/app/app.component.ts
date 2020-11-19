import { Component } from '@angular/core';
import { users } from './users';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private app: ApiService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }

  // logout() {
  //   this.http.post('logout', {}).pipe(finalize(() => {
  //     this.app.authenticated = false;
  //     this.router.navigateByUrl('/login');
  //   })).subscribe();
  // }

  authenticated(): boolean {
    return this.app.authenticated;
  }
}
