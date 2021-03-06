import { createContext, useContext, Reducer, Dispatch } from 'react';
import { ToastStateType } from '../state/toast-state';

export type ToastActionType = {
  type: 'SET_TOAST' | 'HIDE_TOAST';
  payload: ToastStateType;
};

export const toastReducer: Reducer<ToastStateType, ToastActionType> = (
  state: ToastStateType,
  action: ToastActionType
) => {
  switch (action.type) {
    case 'SET_TOAST':
      return action.payload;

    case 'HIDE_TOAST':
      const copyState = [...state]; // for immutability
      copyState.splice(0, 1); // Remove the first array element
      return copyState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ToastDispatchContext = createContext(
  {} as Dispatch<ToastActionType>
);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332

/** from 'react'
 *
 * type Reducer<S, A> = (prevState: S, action: A) => S;
 * type Dispatch<A> = (value: A) => void;
 * type SetStateAction<S> = S | ((prevState: S) => S);
 *
 */
