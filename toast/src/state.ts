import { createContext, useContext } from 'react';

export type ToastStateType = {
  toastToggle: boolean;
  toastMessage: string;
};

export const INITIAL_STATE: ToastStateType = {
  toastToggle: false,
  toastMessage: '',
};

export const ToastStateContext = createContext(INITIAL_STATE);
export const useToastStateContext = () => useContext(ToastStateContext);
