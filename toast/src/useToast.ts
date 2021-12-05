import { useEffect, useState } from 'react';
import { useToastDispatchContext } from './reducers/toast-reducer';
import { useOptionsStateContext } from './state/options-state';
import { ToastStateType, useToastStateContext } from './state/toast-state';

export const useToast = () => {
  const toastState = useToastStateContext();
  const [toastMessage, setToastMessage] = useState(['']);

  const toastDispatchContext = useToastDispatchContext();
  const setToast = (toastPayload: ToastStateType) => {
    toastDispatchContext({
      type: 'SET_TOAST',
      payload: toastPayload,
    });
  };

  const hideToast = (_: ToastStateType) => {
    toastDispatchContext({
      type: 'HIDE_TOAST',
      payload: _,
    });
  };

  const optionsContext = useOptionsStateContext();
  const duration = optionsContext.duration
    ? optionsContext.duration * 1000 // To make a 'second unit'
    : 2000;

  // https://github.com/facebook/react/issues/14010
  // https://codesandbox.io/s/elastic-water-w6ikw?file=/src/index.js
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideToast(['_']);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastState.length]);

  useEffect(() => {
    console.log('setToastMessage');
    setToastMessage(toastState);
  }, [toastState]);

  const showToast = (message: string): void => {
    // Key duplication prevention of <Li> in toast.tsx
    // Toast duplication prevention for UX
    if (toastMessage.indexOf(message) === -1) {
      setToastMessage((prev) => [...prev, message]);
      setToast([...toastState, message]);
    }
  };

  return { showToast };
};
