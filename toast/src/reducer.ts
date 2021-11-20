import { createContext, Dispatch, useContext } from 'react';
import { ToastStateType } from './state';

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
type Reducer<State, Action> = (state: State, action: Action) => State;
export type ToastActionType = {
  type: 'SET_TOAST';
  payload: ToastStateType;
};

export const toastReducer: Reducer<ToastStateType, ToastActionType> = (
  _state: ToastStateType,
  action: ToastActionType
) => {
  switch (action.type) {
    case 'SET_TOAST':
      return action.payload;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ToastDispatchContext = createContext(
  {} as Dispatch<ToastActionType>
);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
