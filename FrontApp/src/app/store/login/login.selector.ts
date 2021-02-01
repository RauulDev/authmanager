import { createSelector } from '@ngrx/store';
import { ILoginManagerState } from 'src/app/interfaces/ILoginManagerState';
import { IState } from '../store';
const managerSelector = (state: IState) => state.loginManagerState;

export const getLoginStatus = createSelector(
    managerSelector,
    (state: ILoginManagerState) => state.loginStatus
);