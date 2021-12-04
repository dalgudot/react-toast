import { createContext, useContext } from 'react';

export type CountStateType = number[];

export const INITIAL_STATE_COUNT: CountStateType = [0];

export const CountStateContext = createContext(INITIAL_STATE_COUNT);
export const useCountStateContext = () => useContext(CountStateContext);
