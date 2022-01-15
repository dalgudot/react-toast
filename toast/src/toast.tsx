import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useOptionsStateContext } from './state/options-state';
import { ToastStateElementsType, ToastStateType } from './state/toast-state';
import { toastVariants } from './variants';
import { useToastDispatchContext } from './reducers/toast-reducer';

export const Toast = ({ state }: { state: ToastStateElementsType }) => {
  const optionsContext = useOptionsStateContext();
  const duration = optionsContext.duration
    ? optionsContext.duration * 1000 // To make a 'second unit'
    : 2000;

  const toastDispatchContext = useToastDispatchContext();
  const hideToast = (_: ToastStateType) => {
    toastDispatchContext({
      type: 'HIDE_TOAST',
      payload: _,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideToast(['_']);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Li
      variants={toastVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      layout
      transition={{ duration: 0.3 }} // for layout
    >
      <Text>{state}</Text>
    </Li>
  );
};

const Li = styled(motion.li)`
  /* S of CSS Reset */
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;

  div,
  p {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

const Text = styled.p`
  white-space: pre-wrap;
  font-size: 17px;
  color: #f5f5f5;
  line-height: 23px;
`;
