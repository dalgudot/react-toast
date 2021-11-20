import React, { useReducer } from 'react';
import {
  OptionsDispatchContext,
  optionsReducer,
  ToastDispatchContext,
  toastReducer,
} from './reducer';
import {
  ToastStateContext,
  INITIAL_STATE,
  INITIAL_STATE_OPTIONS,
  OptionsContext,
  OptionsType,
} from './state';
import { Toast } from './toast';

interface ToastProviderProps extends OptionsType {
  children: JSX.Element;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  duration,
  zIndex,
  children,
}) => {
  const [toastState, toastDispatch] = useReducer(toastReducer, INITIAL_STATE);
  const [optionsState, optionsDispatch] = useReducer(
    optionsReducer,
    INITIAL_STATE_OPTIONS
  );

  const optionsPayload: OptionsType = { duration, zIndex };

  return (
    <>
      <ToastDispatchContext.Provider value={toastDispatch}>
        <ToastStateContext.Provider value={toastState}>
          <OptionsDispatchContext.Provider value={optionsDispatch}>
            <OptionsContext.Provider value={optionsState}>
              {children}
              <Toast optionsPayload={optionsPayload} />
            </OptionsContext.Provider>
          </OptionsDispatchContext.Provider>
        </ToastStateContext.Provider>
      </ToastDispatchContext.Provider>
    </>
  );
};
