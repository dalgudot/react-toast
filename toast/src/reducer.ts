import { ToastToggleStateType, ToastMessageStateType } from './state';

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
export type Reducer<State, Action> = (state: State, action: Action) => State;
export type ToastToggleAction = {
  type: 'TOAST_TOGGLE';
  payload: boolean;
};
export type ToastMessageAction = {
  type: 'TOAST_MESSAGE';
  payload: string;
};

export const toastToggleReducer: Reducer<
  ToastToggleStateType,
  ToastToggleAction
> = (state: ToastToggleStateType, action: ToastToggleAction) => {
  switch (action.type) {
    case 'TOAST_TOGGLE':
      return { ...state, toastToggle: action.payload };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const toastMessageReducer: Reducer<
  ToastMessageStateType,
  ToastMessageAction
> = (state: ToastMessageStateType, action: ToastMessageAction) => {
  switch (action.type) {
    case 'TOAST_MESSAGE':
      return {
        ...state,
        toastMessage: action.payload,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
