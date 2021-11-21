import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useOptionsDispatchContext } from './reducer';
import { OptionsType, useOptionsContext } from './state';
import { useToast } from './useToast';
import { toastVariants } from './variants';

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
  const zindex = optionsContext.zIndex;

  return (
    <>
      <AnimatePresence>
        {toastToggleState && (
          <Position
            zindex={zindex}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <Container>
              <Text>{toastMessageState}</Text>
            </Container>
          </Position>
        )}
      </AnimatePresence>
    </>
  );
};

const Position = styled(motion.div)<{ zindex?: number }>`
  /* S of CSS Reset */
  box-sizing: border-box;
  div,
  p {
    box-sizing: border-box;
  }
  /* E of CSS Reset */

  z-index: ${({ zindex }) => zindex ?? 100000};
  position: fixed;
  top: 36px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;

  @media all and (max-width: 768px) {
    width: 91vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #5f5f5f;
  padding: 16px 24px;
`;

const Text = styled.p`
  white-space: pre-wrap;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: #f5f5f5;
  line-height: 23px;
`;
