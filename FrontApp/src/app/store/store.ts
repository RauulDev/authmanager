import { ActionReducerMap } from '@ngrx/store';
import { IJobsManagerState } from '../interfaces/IJobsManagerState';
import { ILoginManagerState } from '../interfaces/ILoginManagerState';
import { IProfileMeState } from '../interfaces/IProfileMeState';
import { JOBS_INITIAL_STATE, LOGIN_INITIAL_STATE, PROFILEME_INITIAL_STATE } from './app.store';
import { jobsReducer } from './jobs/jobs.reducer';
import { loginReducer } from './login/login.reducer';
import { profileMeReducer } from './me/me.reducer';

export const MANAGER_INITIAL_STATE: IState = {
  jobsManagerState: JOBS_INITIAL_STATE,
  loginManagerState: LOGIN_INITIAL_STATE,
  profilemeManagerState: PROFILEME_INITIAL_STATE
};
export const ROOT_REDUCER: ActionReducerMap<IState> = {
  jobsManagerState: jobsReducer,
  loginManagerState: loginReducer,
  profilemeManagerState: profileMeReducer
};

export interface IState {
  jobsManagerState: IJobsManagerState;
  loginManagerState: ILoginManagerState;
  profilemeManagerState: IProfileMeState;
}