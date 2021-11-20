import { useEffect } from 'react';
import {
  useToastMessageContext,
  useToastMessageDispatchContext,
  useToastToggleContext,
  useToastToggleDispatchContext,
} from './state';

export const useToast = (duration: number = 3000) => {
  const toastToggleState = useToastToggleContext().toastToggle;
  const toastMessageState = useToastMessageContext().toastMessage;
  const toggleDispatch = useToastToggleDispatchContext();
  const messageDispatch = useToastMessageDispatchContext();

  console.log('useToast');

  const setToastToggle = (togglePayload: boolean) => {
    toggleDispatch({
      type: 'TOAST_TOGGLE',
      payload: togglePayload,
    });
  };

  const setMessageToggle = (messagePayload: string) => {
    messageDispatch({
      type: 'TOAST_MESSAGE',
      payload: messagePayload,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToastToggle(false);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastToggleState]);

  // The role of showToast is dispatch!
  // Dispatch is the function for changing the state.
  const showToast = (message: string) => {
    if (toastToggleState === false) {
      setToastToggle(true);
      setMessageToggle(message);
    }
  };

  return { toastToggleState, toastMessageState, showToast };
};
