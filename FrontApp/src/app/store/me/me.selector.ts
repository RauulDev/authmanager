import { createSelector } from '@ngrx/store';
import { IProfileMeState } from 'src/app/interfaces/IProfileMeState';
import { IState } from '../store';
const managerSelector = (state: IState) => state.profilemeManagerState;

export const getProfile = createSelector(
    managerSelector,
    (state: IProfileMeState) => state.profile
);