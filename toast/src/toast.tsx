import React from 'react';
import { useToast } from './useToast';

type ToastType = {
  duration?: number;
};

export const Toast: React.FC<ToastType> = ({ duration }) => {
  const { toastToggleState, toastMessageState } = useToast(duration);

  return <>{toastToggleState && <p>{toastMessageState}</p>}</>;
};
