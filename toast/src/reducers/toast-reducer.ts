import { createContext, useContext, Reducer, Dispatch } from 'react';
import { ToastStateType } from '../state/toast-state';

/** from 'react'
 * type Reducer<S, A> = (prevState: S, action: A) => S;
 * type Dispatch<A> = (value: A) => void;
 * type SetStateAction<S> = S | ((prevState: S) => S);
 */

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
export type ToastActionType = {
  type: 'SHOW_TOAST' | 'HIDE_TOAST';
  payload: ToastStateType;
};

export const toastReducer: Reducer<ToastStateType, ToastActionType> = (
  state: ToastStateType,
  action: ToastActionType
) => {
  console.log('state: ', state);

  switch (action.type) {
    case 'SHOW_TOAST':
      return action.payload;

    case 'HIDE_TOAST':
      // state.splice(0, 1);
      state.shift();
      console.log('update state', state);
      return [...state]; // remove first array element

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ToastDispatchContext = createContext(
  {} as Dispatch<ToastActionType>
);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
