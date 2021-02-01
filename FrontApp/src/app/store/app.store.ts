import { IJobsManagerState } from '../interfaces/IJobsManagerState';
import { ILoginManagerState } from '../interfaces/ILoginManagerState';
import { IProfileMeState } from '../interfaces/IProfileMeState';


export const JOBS_INITIAL_STATE: IJobsManagerState = {
    jobs: []
};

export const LOGIN_INITIAL_STATE: ILoginManagerState = {
    loginStatus: ''
};

export const PROFILEME_INITIAL_STATE: IProfileMeState = {
    profile: null
};
