import { ActionType, Action } from 'src/reducers/ajaxQueueReducer';

export function addAjaxJob(): Action {
  return { type: ActionType.Add };
}

export function finishAjaxJob(): Action {
  return { type: ActionType.Finish };
}
