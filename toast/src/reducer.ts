import { createContext, useContext, Reducer, Dispatch } from 'react';
import { OptionsType, ToastStateType } from './state';

/** from 'react'
 * type Reducer<S, A> = (prevState: S, action: A) => S;
 * type Dispatch<A> = (value: A) => void;
 * type SetStateAction<S> = S | ((prevState: S) => S);
 */

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
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

/**
 *
 * Options Reducer
 *
 */
export type OptionsActionType = {
  type: 'SET_OPTIONS';
  payload: OptionsType;
};

export const optionsReducer: Reducer<OptionsType, OptionsActionType> = (
  _state: OptionsType,
  action: OptionsActionType
) => {
  switch (action.type) {
    case 'SET_OPTIONS':
      return action.payload;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const OptionsDispatchContext = createContext(
  {} as Dispatch<OptionsActionType>
);
export const useOptionsDispatchContext = () =>
  useContext(OptionsDispatchContext);
