import '@dalgu/react-product-system/styles/globals.css';
import '@dalgu/react-product-system/styles/colors.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastProvider } from '../../toast/src';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <ToastProvider duration={4000}>
        <Component {...pageProps} />
      </ToastProvider>
    </Main>
  );
}

export default MyApp;

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
