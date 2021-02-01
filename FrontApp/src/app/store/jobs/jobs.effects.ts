import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { JobsService } from 'src/app/services/jobs.service';
import { JOBSActions, LoadJOBSSuccess } from './jobs.actions';

@Injectable()
export class JobsEffects {

    loadJobs$ = createEffect(() => this.actions$.pipe(
        ofType(JOBSActions.JOBS_GET_SERVICE),
        switchMap(() => {
            return this.jobsService.getJobs()
                .pipe(
                    map((result: Array<any>) => {
                        return new LoadJOBSSuccess(result);
                    })
                )
        }),
    )
    );

    constructor(
        private actions$: Actions,
        private jobsService: JobsService
    ) { }
}