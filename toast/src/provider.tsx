import React, { useReducer } from 'react';
import { ToastDispatchContext, toastReducer } from './reducer';
import { ToastStateContext, INITIAL_STATE } from './state';
import { Toast } from './toast';

type ToastProviderProps = {
  children: JSX.Element;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  duration,
  children,
}: {
  duration?: number;
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(toastReducer, INITIAL_STATE);

  return (
    <>
      <ToastDispatchContext.Provider value={dispatch}>
        <ToastStateContext.Provider value={state}>
          {children}
          <Toast duration={duration} />
        </ToastStateContext.Provider>
      </ToastDispatchContext.Provider>
    </>
  );
};
