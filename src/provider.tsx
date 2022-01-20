import React, { useReducer } from 'react';
import {
  OptionsDispatchContext,
  optionsReducer,
} from './reducers/options-reducer';
import { ToastDispatchContext, toastReducer } from './reducers/toast-reducer';
import {
  INITIAL_STATE_OPTIONS,
  OptionsStateContext,
  OptionsType,
} from './state/options-state';
import { ToastStateContext, INITIAL_STATE_TOAST } from './state/toast-state';
import { ToastList } from './toast-list';

interface ToastProviderProps extends OptionsType {
  children: JSX.Element | JSX.Element[];
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  duration,
  zIndex,
  children,
}) => {
  const [toastState, toastDispatch] = useReducer(
    toastReducer,
    INITIAL_STATE_TOAST
  );
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
            <OptionsStateContext.Provider value={optionsState}>
              <ToastList optionsPayload={optionsPayload} />
              {children}
            </OptionsStateContext.Provider>
          </OptionsDispatchContext.Provider>
        </ToastStateContext.Provider>
      </ToastDispatchContext.Provider>
    </>
  );
};
