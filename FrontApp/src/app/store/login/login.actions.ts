import { Action } from '@ngrx/store';

export const LoginActions = {
    LOGIN_SERVICE: '[Login Actions] Login',
    LOGIN_SERVICE_SUCCESS: '[JOBS Actions] Login success',
    LOGIN_SERVICE_ERROR: '[JOBS Actions] Login error'
};

export class LoginServiceAction implements Action {
    readonly type = LoginActions.LOGIN_SERVICE;
    constructor(public payload: { email: string, password: string }) { }
}

export class LoginServiceSuccess implements Action {
    readonly type = LoginActions.LOGIN_SERVICE_SUCCESS;
    constructor(public payload?: Array<any>) { }
}

export class LoginServiceError implements Action {
    readonly type = LoginActions.LOGIN_SERVICE_ERROR;
    constructor(public payload?: Array<any>) { }
}

export type LoginActions =
    LoginServiceAction | LoginServiceSuccess | LoginServiceError;
