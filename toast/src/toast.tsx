import React from 'react';
import { useToast } from './useToast';

export const Toast: React.FC = () => {
  const { toastToggleState, toastMessageState } = useToast();

  return <>{toastToggleState && <p>{toastMessageState}</p>}</>;
};
