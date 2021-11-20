import { useEffect } from 'react';
import { useToastDispatch, useToastState } from './toast-state-management';

export const useToast = (duration: number = 1850) => {
  const toastState = useToastState();
  const toastToggleState = toastState.toastToggle;
  const toastMessageState = toastState.toastMessage;

  const dispatch = useToastDispatch() as any;

  console.log(toastState);

  const setToast = (toast: {
    toastToggle: boolean;
    toastMessage: string | null;
  }) => {
    dispatch({
      type: 'TOAST',
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
      // console.log('click');
      setToast({
        toastToggle: true,
        toastMessage: message,
      });
    }
  };

  return { toastToggleState, toastMessageState, showToast };
};
