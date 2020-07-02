export type State = number;
export const initState: State = 0;

export enum ActionType {
  Reset = 'collections$ajaxQueue$Reset',
  Add = 'collections$ajaxQueue$Add',
  Finish = 'collections$ajaxQueue$Finish',
}

export interface Action {
  type: ActionType;
}

const reducer = (state: State = initState, action: Action) => {
  const { type } = action;

  switch (type) {
    case ActionType.Reset:
      return initState;

    case ActionType.Add:
      return state + 1;

    case ActionType.Finish:
      return state - 1;

    default:
      return state;
  }
};

export default reducer;
