import * as React from 'react';
import { useToast } from './useToast';

export const Toast: React.FC = React.memo(function Toast() {
  const { toastToggleState, toastMessageState } = useToast();

  console.log('Toast');

  return <>{toastToggleState && <p>{toastMessageState}</p>}</>;
});
