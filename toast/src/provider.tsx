import React, { Reducer, useReducer } from 'react';
import { Toast } from './toast';
import {
  ToastMessageDispatchContext,
  ToastMessageStateContext,
  ToastMessageStateType,
  ToastToggleDispatchContext,
  ToastToggleStateContext,
  ToastToggleStateType,
  TOAST_MESSAGE_INITIAL_STATE,
  TOAST_TOGGLE_INITIAL_STATE,
} from './state';
import {
  ToastMessageAction,
  toastMessageReducer,
  ToastToggleAction,
  toastToggleReducer,
} from './reducer';

type ToastProviderProps = {
  children: JSX.Element;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toggleState, toggleDispatch] = useReducer<
    Reducer<ToastToggleStateType, ToastToggleAction>
  >(toastToggleReducer, TOAST_TOGGLE_INITIAL_STATE);

  const [messageState, messageDispatch] = useReducer<
    Reducer<ToastMessageStateType, ToastMessageAction>
  >(toastMessageReducer, TOAST_MESSAGE_INITIAL_STATE);

  return (
    <>
      <ToastToggleDispatchContext.Provider value={toggleDispatch}>
        <ToastMessageDispatchContext.Provider value={messageDispatch}>
          <ToastToggleStateContext.Provider value={toggleState}>
            <ToastMessageStateContext.Provider value={messageState}>
              {children}
              <Toast />
            </ToastMessageStateContext.Provider>
          </ToastToggleStateContext.Provider>
        </ToastMessageDispatchContext.Provider>
      </ToastToggleDispatchContext.Provider>
    </>
  );
};
