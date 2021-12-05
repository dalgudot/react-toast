import { createContext, useContext } from 'react';

export type ToastStateType = string[]; // just message
export type ToastStateElementsType = string;
// the type for map() in toast.tsx

export const INITIAL_STATE_TOAST: ToastStateType = [];

export const ToastStateContext = createContext(INITIAL_STATE_TOAST);
export const useToastStateContext = () => useContext(ToastStateContext);
