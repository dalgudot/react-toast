import { useToastDispatchContext } from './reducers/toast-reducer';
import { ToastStateType, useToastStateContext } from './state/toast-state';

export const useToast = () => {
  const toastState = useToastStateContext();

  const toastDispatchContext = useToastDispatchContext();
  const setToast = (toastPayload: ToastStateType) => {
    toastDispatchContext({
      type: 'SET_TOAST',
      payload: toastPayload,
    });
  };

  const showToast = (message: string): void => {
    // UX Logic
    // Toast duplication prevention for UX
    if (toastState.indexOf(message) === -1) {
      setToast([...toastState, message]);
    }
  };

  return { showToast };
};
