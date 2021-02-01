import * as _ from 'lodash';
import { IProfileMeState } from 'src/app/interfaces/IProfileMeState';
import { PROFILEME_INITIAL_STATE } from '../app.store';
import { GetProfileServiceSuccess, ProfileMeActions } from './me.actions';

export function profileMeReducer(
  state: IProfileMeState = PROFILEME_INITIAL_STATE,
  action: ProfileMeActions
): IProfileMeState {
  switch (action.type) {
    case ProfileMeActions.PROFILEME_SERVICE_SUCCESS: {
      const profile = _.cloneDeep((action as GetProfileServiceSuccess).payload);
      return {
        ...state,
        profile
      };
    }
    default:
      return state;
  }
}