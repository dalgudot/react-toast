import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useToast } from './useToast';

export interface ToastProps {
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ duration }) => {
  const { toastToggleState, toastMessageState } = useToast(duration);

  return (
    <>
      <AnimatePresence>
        {toastToggleState && (
          <ToastPosition>
            <ToastContainer>
              <Text>{toastMessageState}</Text>
            </ToastContainer>
          </ToastPosition>
        )}
      </AnimatePresence>
    </>
  );
};

const ToastPosition = styled.div`
  /* S of CSS Reset */

  /* E of CSS Reset */

  z-index: 10000;
  position: fixed;
  top: 28px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 480px;

  @media all and (max-width: 768px) {
    width: 91vw;
  }
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #565656;
  padding: 16px 24px;
`;

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
