import { AnimatePresence } from 'framer-motion';
import React, { useReducer } from 'react';
import { CountDispatchContext, countReducer } from './reducers/count-reducer';
import {
  OptionsDispatchContext,
  optionsReducer,
} from './reducers/options-reducer';
import { ToastDispatchContext, toastReducer } from './reducers/toast-reducer';
import { CountStateContext, INITIAL_STATE_COUNT } from './state/count-state';
import {
  INITIAL_STATE_OPTIONS,
  OptionsStateContext,
  OptionsType,
} from './state/options-state';
import { ToastStateContext, INITIAL_STATE_TOAST } from './state/toast-state';
import { Toast } from './toast';

interface ToastProviderProps extends OptionsType {
  children: JSX.Element;
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
  const [countState, countDispatch] = useReducer(
    countReducer,
    INITIAL_STATE_COUNT
  );

  const optionsPayload: OptionsType = { duration, zIndex };

  return (
    <>
      <ToastDispatchContext.Provider value={toastDispatch}>
        <ToastStateContext.Provider value={toastState}>
          <OptionsDispatchContext.Provider value={optionsDispatch}>
            <OptionsStateContext.Provider value={optionsState}>
              <CountDispatchContext.Provider value={countDispatch}>
                <CountStateContext.Provider value={countState}>
                  {children}
                  <Toast optionsPayload={optionsPayload} />
                </CountStateContext.Provider>
              </CountDispatchContext.Provider>
            </OptionsStateContext.Provider>
          </OptionsDispatchContext.Provider>
        </ToastStateContext.Provider>
      </ToastDispatchContext.Provider>
    </>
  );
};
