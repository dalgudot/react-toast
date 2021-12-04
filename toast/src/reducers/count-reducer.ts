import { createContext, useContext, Reducer, Dispatch } from 'react';
import { CountStateType } from '../state/count-state';

/** from 'react'
 * type Reducer<S, A> = (prevState: S, action: A) => S;
 * type Dispatch<A> = (value: A) => void;
 * type SetStateAction<S> = S | ((prevState: S) => S);
 */

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
export type CountActionType = {
  type: 'SET_COUNT';
  payload: CountStateType;
};

export const countReducer: Reducer<CountStateType, CountActionType> = (
  _state: CountStateType,
  action: CountActionType
) => {
  switch (action.type) {
    case 'SET_COUNT':
      return action.payload;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CountDispatchContext = createContext(
  {} as Dispatch<CountActionType>
);
export const useCountDispatchContext = () => useContext(CountDispatchContext);
