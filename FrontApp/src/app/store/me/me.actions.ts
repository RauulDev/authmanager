import { Action } from '@ngrx/store';

export const ProfileMeActions = {
    PROFILEME_GET_SERVICE: '[JOBS Actions] Get PROFILE',
    PROFILEME_SERVICE_SUCCESS: '[JOBS Actions] Get PROFILE success'
};

export class GetProfileService implements Action {
    readonly type = ProfileMeActions.PROFILEME_GET_SERVICE;
    constructor() { }
}

export class GetProfileServiceSuccess implements Action {
    readonly type = ProfileMeActions.PROFILEME_SERVICE_SUCCESS;
    constructor(public payload?: any) { }
}

export type ProfileMeActions =
    GetProfileService | GetProfileServiceSuccess;
