import * as _ from 'lodash';
import { ILoginManagerState } from 'src/app/interfaces/ILoginManagerState';
import { LOGIN_INITIAL_STATE } from '../app.store';
import { LoginActions, LoginServiceSuccess } from './login.actions';

export function loginReducer(
  state: ILoginManagerState = LOGIN_INITIAL_STATE,
  action: LoginActions
): ILoginManagerState {
  switch (action.type) {
    case LoginActions.LOGIN_SERVICE_SUCCESS: {
      return {
        ...state,
        loginStatus : 'success'
      };
    }
    case LoginActions.LOGIN_SERVICE_ERROR: {
      return {
        ...state,
        loginStatus : 'error'
      };
    }
    default:
      return state;
  }
}