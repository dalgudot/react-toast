import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useOptionsDispatchContext } from './reducers/options-reducer';
import { OptionsType, useOptionsStateContext } from './state/options-state';
import {
  ToastStateElementsType,
  useToastStateContext,
} from './state/toast-state';
import { toastVariants } from './variants';

export const Toast = React.memo(function Toast({
  optionsPayload,
}: {
  optionsPayload: OptionsType;
}) {
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
  }, [optionsPayload.duration, optionsPayload.zIndex]); // In case the props are changed while development

  const optionsContext = useOptionsStateContext();
  const zindex = optionsContext.zIndex;

  return (
    <>
      <ToastPositionUl key="ToastPositionUl" zindex={zindex}>
        <AnimatePresence>
          {toastState.length !== 0 &&
            toastState
              .map((state: ToastStateElementsType, _idx: number) => (
                <Li
                  key={state}
                  variants={toastVariants}
                  initial="initial"
                  animate="animate"
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    transition: { duration: 0.3 },
                  }}
                  layout
                >
                  <Text>{state}</Text>
                </Li>
              ))
              .reverse()}
        </AnimatePresence>
      </ToastPositionUl>
    </>
  );
});
// <AnimatePresence>'s child motion components must each have a unique key prop so AnimatePresence can track their presence in the tree.

const ToastPositionUl = styled(motion.ul)<{ zindex?: number }>`
  /* S of CSS Reset */
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  /* E of CSS Reset */

  z-index: ${({ zindex }) => zindex ?? 100000};
  position: fixed;
  top: 36px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;

  /* For multiple children toast */
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* For multiple children toast */

  @media all and (max-width: 768px) {
    width: 91vw;
  }
`;

const Li = styled(motion.li)`
  /* S of CSS Reset */
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;

  div,
  p {
    box-sizing: border-box;
  }
  /* E of CSS Reset */

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #5f5f5f;
  padding: 16px 24px;

  /* For multiple children toast */
  position: relative;
  margin-top: 24px;

  :nth-child(1) {
    margin-top: 0px;
  }
  /* For multiple children toast */
`;

const Text = styled(motion.p)`
  white-space: pre-wrap;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: #f5f5f5;
  line-height: 23px;
`;
