import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LoadJOBSService } from 'src/app/store/jobs/jobs.actions';
import { LoginServiceAction } from 'src/app/store/login/login.actions';
import { getLoginStatus } from 'src/app/store/login/login.selector';
import { IState } from 'src/app/store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  showErrorLogin: boolean;
  _loginStatusSubscription: Subscription;

  constructor(private _store: Store<IState>, private cookieService: CookieService, private router: Router) {
    this._loginStatusSubscription = this._store.pipe(select(getLoginStatus)).subscribe((result: any) => {
      switch (result) {
        case 'error':
          this.showErrorLogin = true;
          break;

        case 'success':
          this.showErrorLogin = false;
          break;

        default:
          break;
      }
    });
  }

  ngOnInit(): void {
    const cookieAUTH = this.cookieService.get('AUTH');
    if (cookieAUTH) {
      this.router.navigate(['/me']);
    }
  }

  login() {
    this._store.dispatch(new LoginServiceAction({ email: this.email?.trim(), password: this.password }));
  }

}
