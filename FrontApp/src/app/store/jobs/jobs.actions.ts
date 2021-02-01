import { Action } from '@ngrx/store';

export const JOBSActions = {
    JOBS_GET_SERVICE: '[JOBS Actions] Get JOBS',
    GET_JOBS_SERVICE_SUCCESS: '[JOBS Actions] Get JOBS Service success'
};

export class LoadJOBSService implements Action {
    readonly type = JOBSActions.JOBS_GET_SERVICE;
    constructor() { }
}

export class LoadJOBSSuccess implements Action {
    readonly type = JOBSActions.GET_JOBS_SERVICE_SUCCESS;
    constructor(public payload?: Array<any>) { }
}

export type JOBSActions =
    LoadJOBSService | LoadJOBSSuccess;
