import { createSelector } from '@ngrx/store';
import { IJobsManagerState } from 'src/app/interfaces/IJobsManagerState';
import { IState } from '../store';
const managerSelector = (state: IState) => state.jobsManagerState;

export const getJobs = createSelector(
    managerSelector,
    (state: IJobsManagerState) => state.jobs
);