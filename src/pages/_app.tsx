import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastProvider } from '../../toast/src';
import styled from 'styled-components';

function ReactToastApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <ToastProvider duration={2} zIndex={10000}>
        {/* <ToastProvider> */}
        <Component {...pageProps} />
      </ToastProvider>
    </Main>
  );
}

export default ReactToastApp;

const Main = styled.main`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 48px;
    padding: 48px;
  }

  a {
    padding: 48px;
  }
`;
