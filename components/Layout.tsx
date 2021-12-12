import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Jack Douglas - Backend Engineer</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source%20Sans%203:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Jack Douglas - Backend Engineer" />
        <meta name="author" content="Jack Douglas" />
        <meta name="copyright" content="Jack Douglas" />
        <meta name="rating" content="General" />
        <meta name="url" content="https://jackdouglas.dev" />
        <meta name="twitter:creator" content="@jackenv" />
        <meta name="twitter:site" content="@jackenv" />

        <link rel="dns-prefetch" href="https://media.jackdouglas.dev/" />
      </Head>
      <Body>
        <Content>{children}</Content>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
  color: var(--text);
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const Content = styled.div`
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
