import { createContext, useContext, Reducer, Dispatch } from 'react';
import { OptionsType } from '../state/options-state';

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
