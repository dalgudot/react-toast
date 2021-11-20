import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useOptionsDispatchContext } from './reducer';
import { OptionsType, useOptionsContext } from './state';
import { useToast } from './useToast';

export const Toast = ({ optionsPayload }: { optionsPayload: OptionsType }) => {
  const { toastToggleState, toastMessageState } = useToast();

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

  const optionsContext = useOptionsContext();
  const toastZIndex = optionsContext.zIndex;

  return (
    <>
      <AnimatePresence>
        {toastToggleState && (
          <Position toastZIndex={toastZIndex}>
            <Container>
              <Text>{toastMessageState}</Text>
            </Container>
          </Position>
        )}
      </AnimatePresence>
    </>
  );
};

const Position = styled.div<{ toastZIndex: number }>`
  /* S of CSS Reset */
  div,
  p {
    box-sizing: border-box;
  }
  /* E of CSS Reset */

  z-index: ${({ toastZIndex }) => toastZIndex};
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

const Container = styled.div`
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
