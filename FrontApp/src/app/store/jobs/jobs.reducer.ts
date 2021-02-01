import * as _ from 'lodash';
import { IJobsManagerState } from 'src/app/interfaces/IJobsManagerState';
import { JOBS_INITIAL_STATE } from '../app.store';
import { JOBSActions, LoadJOBSSuccess } from './jobs.actions';

export function jobsReducer(
  state: IJobsManagerState = JOBS_INITIAL_STATE,
  action: JOBSActions
): IJobsManagerState {
  switch (action.type) {
    case JOBSActions.GET_JOBS_SERVICE_SUCCESS: {
      const jobs = _.cloneDeep((action as LoadJOBSSuccess).payload);
      return {
        ...state,
        jobs
      };
    }
    default:
      return state;
  }
}