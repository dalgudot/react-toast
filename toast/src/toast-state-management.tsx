import React, { createContext, useContext, useReducer } from 'react';
import { Toast } from './toast';

// const ToastToggleContext = createContext(false);
// const ToastMessageContext = createContext('');
type ToastState = {
  toastToggle: boolean;
  toastMessage: string | null;
};

// https://www.newline.co/@bespoyasov/how-to-use-usereducer-with-typescript--3918a332
type Reducer<State, Action> = (state: State, action: Action) => State;

type Action = {
  type: 'TOAST';
  payload: ToastState;
};

const INITIAL_STATE: ToastState = {
  toastToggle: false,
  toastMessage: null,
};

const reducer: Reducer<ToastState, Action> = (
  _state: ToastState,
  action: Action
) => {
  switch (action.type) {
    case 'TOAST':
      return action.payload;
  }
};

const ToastStateContext = createContext(INITIAL_STATE);
const ToastDispatchContext = createContext(null);

export const ToastProvider = React.memo(function ToastProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <ToastDispatchContext.Provider value={dispatch as any}>
        <ToastStateContext.Provider value={state}>
          {children}
          <Toast />
        </ToastStateContext.Provider>
      </ToastDispatchContext.Provider>
    </>
  );
});

export const useToastState = () => useContext(ToastStateContext);
export const useToastDispatch = () => useContext(ToastDispatchContext);
