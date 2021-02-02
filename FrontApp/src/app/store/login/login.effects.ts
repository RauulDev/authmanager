import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { LoadJOBSService } from '../jobs/jobs.actions';
import { GetProfileService } from '../me/me.actions';
import { IState } from '../store';
import { LoginActions, LoginServiceAction, LoginServiceError, LoginServiceSuccess } from './login.actions';

@Injectable()
export class LoginEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType<LoginServiceAction>(LoginActions.LOGIN_SERVICE),
        map((action) => (action.payload)),
        switchMap((payload) => {
            return this.loginService.login(payload.email, payload.password)
                .pipe(
                    map((result: any) => {
                        const hours = result.expirationTime / 3600;
                        var dt = new Date();
                        dt.setHours(dt.getHours() + hours);
                        this.cookieService.set('AUTH', JSON.stringify(result), dt);
                        this.store.dispatch(new GetProfileService());
                        this.router.navigate(['/home']);
                    })
                ).pipe(map((rr)=>{
                    return new LoginServiceSuccess();
                }))
        }),
        catchError((err, caught) => {
            this.store.dispatch(new LoginServiceError());
            return caught;
        })
    )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router,
        private cookieService: CookieService,
        private store: Store<IState>
    ) { }
}