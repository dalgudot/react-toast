import { createContext, useContext } from 'react';

export type OptionsType = {
  duration?: number;
  zIndex?: number;
};

export const INITIAL_STATE_OPTIONS: OptionsType = {
  duration: 2,
  zIndex: 100000,
};

export const OptionsStateContext = createContext(INITIAL_STATE_OPTIONS);
export const useOptionsStateContext = () => useContext(OptionsStateContext);
