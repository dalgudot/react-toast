import { useEffect } from 'react';
import { useToastDispatchContext } from './reducer';
import { ToastStateType, useToastStateContext } from './state';

export const useToast = (duration: number = 1850) => {
  const toastState = useToastStateContext();
  const toastToggleState = toastState.toastToggle;
  const toastMessageState = toastState.toastMessage;

  console.log('useToast');

  const dispatch = useToastDispatchContext();
  const setToast = (toast: ToastStateType) => {
    dispatch({
      type: 'SET_TOAST',
      payload: toast,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toastToggleState &&
        setToast({
          toastToggle: false,
          toastMessage: toastState.toastMessage,
        });
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastToggleState]);

  const showToast = (message: string) => {
    if (toastToggleState === false) {
      setToast({
        toastToggle: true,
        toastMessage: message,
      });
    }
  };

  return { toastToggleState, toastMessageState, showToast };
};
