import { createContext, useContext, Dispatch } from 'react';
import { ToastMessageAction, ToastToggleAction } from './reducer';

export type ToastToggleStateType = {
  toastToggle: boolean;
};
export type ToastMessageStateType = {
  toastMessage: string;
};
// export type ToastState = ToastToggleStateType | ToastMessageStateType;

export const TOAST_TOGGLE_INITIAL_STATE: ToastToggleStateType = {
  toastToggle: false,
};
export const TOAST_MESSAGE_INITIAL_STATE: ToastMessageStateType = {
  toastMessage: '',
};
// export const INITIAL_STATE: ToastState = {
//   toastToggle: TOAST_TOGGLE_INITIAL_STATE.toastToggle,
//   toastMessage: TOAST_MESSAGE_INITIAL_STATE.toastMessage,
// };

export const ToastToggleStateContext = createContext(
  TOAST_TOGGLE_INITIAL_STATE
);
export const useToastToggleContext = () => useContext(ToastToggleStateContext);

export const ToastMessageStateContext = createContext(
  TOAST_MESSAGE_INITIAL_STATE
);
export const useToastMessageContext = () =>
  useContext(ToastMessageStateContext);

export const ToastToggleDispatchContext = createContext(
  {} as Dispatch<ToastToggleAction>
);
export const useToastToggleDispatchContext = () =>
  useContext(ToastToggleDispatchContext);

export const ToastMessageDispatchContext = createContext(
  {} as Dispatch<ToastMessageAction>
);
export const useToastMessageDispatchContext = () =>
  useContext(ToastMessageDispatchContext);
