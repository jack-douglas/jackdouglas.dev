import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { Layout } from '../components/Layout';
import LanyardProvider from '../components/lanyard';

const GlobalStyle = createGlobalStyle`
  :root {
    --background_100: #00111C;
    --background_200: #001523;
    --background_300: #002137;
    --text: #fff;
  }

  html, body {
    font-family: 'Source Sans 3', sans-serif;
    padding: 0;
    margin: 0;
    background: var(--background_100);
    background-image: url("https://cdn.jackdouglas.dev/2021/12/hPfjfqa4Cvq.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: var(--text);
    overscroll-behavior-y: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LanyardProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </LanyardProvider>
    </Layout>
  );
}

export default MyApp;
