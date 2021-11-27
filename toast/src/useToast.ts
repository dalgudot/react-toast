import { useEffect } from 'react';
import { useToastDispatchContext } from './reducer';
import {
  ToastStateType,
  useOptionsContext,
  useToastStateContext,
} from './state';

export const useToast = () => {
  const toastState = useToastStateContext();
  const toastToggleState = toastState.toastToggle;
  const toastMessageState = toastState.toastMessage;

  const toastDispatchContext = useToastDispatchContext();
  const setToast = (toast: ToastStateType) => {
    toastDispatchContext({
      type: 'SET_TOAST',
      payload: toast,
    });
  };

  const optionsContext = useOptionsContext();
  const duration = optionsContext.duration
    ? optionsContext.duration * 1000 // second
    : 2000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toastToggleState &&
        setToast({
          toastToggle: false,
          toastMessage: toastMessageState,
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

  return { showToast };
};
