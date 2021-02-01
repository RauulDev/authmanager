import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProfileMeService } from 'src/app/services/me.service';
import { GetProfileServiceSuccess, ProfileMeActions } from './me.actions';

@Injectable()
export class ProfileEffects {

    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileMeActions.PROFILEME_GET_SERVICE),
        switchMap(() => {
            return this.profileMeService.getProfileMe()
                .pipe(
                    map((result: any) => {
                        return new GetProfileServiceSuccess(result);
                    })
                )
        }),
    )
    );

    constructor(
        private actions$: Actions,
        private profileMeService: ProfileMeService
    ) { }
}