import { useEffect } from 'react';
import { useToastDispatchContext } from './reducers/toast-reducer';
import { useOptionsStateContext } from './state/options-state';
import { ToastStateType, useToastStateContext } from './state/toast-state';

export const useToast = () => {
  const toastState = useToastStateContext();
  const toastDispatchContext = useToastDispatchContext();
  const setMultipleToast = (toastPayload: ToastStateType) => {
    toastDispatchContext({
      type: 'SHOW_TOAST',
      payload: toastPayload,
    });
  };

  const hideToast = (_?: any) => {
    toastDispatchContext({
      type: 'HIDE_TOAST',
      payload: _,
    });
  };

  const optionsContext = useOptionsStateContext();
  const duration = optionsContext.duration
    ? optionsContext.duration * 1000 // To make a 'second unit'
    : 2000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideToast();
    }, duration);

    return () => {
      console.log('cleanTimeout');
      clearTimeout(timeoutId);
    };
  }, [toastState.length]);

  const showToast = (message: string) => {
    setMultipleToast([
      ...toastState,
      {
        toastToggle: true,
        toastMessage: message,
      },
    ]);
  };

  return { showToast };
};
