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

/**
 *
 * Options Context
 *
 */

export type OptionsType = {
  duration?: number;
  zIndex?: number;
};

export const INITIAL_STATE_OPTIONS: OptionsType = {
  duration: 2000,
  zIndex: 100000,
};

export const OptionsContext = createContext(INITIAL_STATE_OPTIONS);
export const useOptionsContext = () => useContext(OptionsContext);
