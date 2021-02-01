import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { getLoginStatus } from 'src/app/store/login/login.selector';
import { GetProfileService } from 'src/app/store/me/me.actions';
import { getProfile } from 'src/app/store/me/me.selector';
import { IState } from 'src/app/store/store';

@Component({
  selector: 'me-component',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {
  _profileSubscription: Subscription;
  profile: any;
  latitude;
  longitude;
  constructor(private _store: Store<IState>, private cookieService: CookieService, private router: Router) {
    this._profileSubscription = this._store.pipe(select(getProfile)).subscribe((result: any) => {
      if (result) {
        this.profile = result;
      } else {
        this._store.dispatch(new GetProfileService());
      }
    });
  }

  ngOnDestroy() {
    this._profileSubscription?.unsubscribe();
  }
}
