import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useOptionsDispatchContext } from './reducers/options-reducer';
import { OptionsType, useOptionsStateContext } from './state/options-state';
import { Toast } from './toast';
import {
  ToastStateElementsType,
  useToastStateContext,
} from './state/toast-state';

export const ToastList = ({
  optionsPayload,
}: {
  optionsPayload: OptionsType;
}) => {
  const toastState = useToastStateContext();

  const optionsDispatchContext = useOptionsDispatchContext();
  const setOptions = (optionsPayload: OptionsType) => {
    optionsDispatchContext({
      type: 'SET_OPTIONS',
      payload: optionsPayload,
    });
  };

  useEffect(() => {
    setOptions(optionsPayload);
  }, [optionsPayload.duration, optionsPayload.zIndex]);
  // In case the props are changed while development

  const optionsContext = useOptionsStateContext();
  const zindex = optionsContext.zIndex;

  return (
    <>
      {/* <ToastPositionUl key='ToastPositionUl' zindex={zindex}> */}
      <ToastPositionUl zindex={zindex}>
        <AnimatePresence>
          {toastState.length !== 0 &&
            toastState
              .map((state: ToastStateElementsType, _idx: number) => (
                <Toast key={state} state={state} />
              ))
              .reverse()}
        </AnimatePresence>
      </ToastPositionUl>
    </>
  );
};
// <AnimatePresence>'s child motion components must each have a unique key prop so AnimatePresence can track their presence in the tree.
// https://codesandbox.io/s/framer-motion-notifications-5cvo9?file=/src/Example.tsx

const ToastPositionUl = styled.ul<{ zindex?: number }>`
  /* S of CSS Reset */
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  /* E of CSS Reset */

  z-index: ${({ zindex }) => zindex ?? 100000};
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;

  /* For multiple children toast */
  display: flex;
  flex-direction: column;
  /* For multiple children toast */

  @media all and (max-width: 768px) {
    width: 91vw;
  }
`;
