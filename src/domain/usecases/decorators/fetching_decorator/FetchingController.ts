import { Dispatch } from '@src/ReduxTypes';
import { Nullable } from '@src/types/BaseTypes';
import { ToastType } from '@src/data/ToastMessage';
import { addRawToastMessage } from '@src/actions/appPageActions';
import { addAjaxJob, finishAjaxJob } from '@src/actions/ajaxQueueActions';

export interface FetchingController {
  startFetching: (dispatch: Dispatch) => void;
  resolveFetching: (dispatch: Dispatch) => void;
  rejectFetching: (dispatch: Dispatch, e?: Error) => void;
}

export class Controller implements FetchingController {

  static _INSTANCE: Nullable<FetchingController> = null;

  static get INSTANCE(): FetchingController {
    if (!this._INSTANCE) {
      this._INSTANCE = new Controller();
    }
    return this._INSTANCE;
  }

  startFetching(dispatch: Dispatch) {
    dispatch(addAjaxJob());
  }

  resolveFetching(dispatch: Dispatch) {
    dispatch(finishAjaxJob());
  }

  rejectFetching(dispatch: Dispatch, e?: Error) {
    if (e instanceof Error) {
      dispatch(
        addRawToastMessage({
          type: ToastType.ERROR,
          message: e.message,
          error: e,
        })
      );
    }
    dispatch(finishAjaxJob());
  }
}
