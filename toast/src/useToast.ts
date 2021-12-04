import { useEffect, useRef, useState } from 'react';
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

  const [toastMessage, setToastMessage] = useState(['']);

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
  const [count, setCount] = useState<any>();
  const prevCountRef = useRef(count);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideToast(['_']);
    }, duration);
    setCount(timeoutId);
    prevCountRef.current = count;

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [toastState.length]);

  useEffect(() => {
    setToastMessage(toastState);
    console.log(toastState);
  }, [toastState]);

  const showToast = (message: string) => {
    // Key duplication prevention of <Li> in toast.tsx
    // Toast duplication prevention for UX
    if (toastMessage.indexOf(message) === -1) {
      setToastMessage((prev) => [...prev, message]);
      setMultipleToast([...toastState, message]);
    }
  };

  return { showToast };
};
