import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import Status from './Status';

export const About: FC = () => {
  const age =
    new Date(
      new Date().getTime() - new Date('12/04/1999 00:00:00').getTime(),
    ).getFullYear() - 1970;

  return (
    <AboutContainer>
      <Top>
        <Left>
          <h1>Jack Douglas</h1>
          <p>
            Well Hello there, I&apos;m Jack, a {age} year old self-taught
            Backend Engineer from the UK.
          </p>
          <Header />
        </Left>
        <Right>
          <Image
            src="https://cdn.jackdouglas.dev/images/avatar.png"
            alt="Jack Douglas Image"
            height={375}
            width={281.25}
          />
          <Status />
        </Right>
      </Top>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 650px) {
    height: 450px;
  }
`;

export const Top = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100%;
  max-width: 1275px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  margin-left: 25px;
  margin-right: 150px;
  flex: 1;
  h2 {
    font-size: 72px;
    color: #1c94eb;
    letter-spacing: 0;
    text-transform: lowercase;
    text-shadow: 0 2px 1px rgba(37, 40, 48, 0.55);
    margin: 0;
    margin-bottom: 50px;
    @media (max-width: 650px) {
      font-size: 32px;
      margin-bottom: 25px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  position: relative;
  @media (max-width: 1035px) {
    display: none;
  }
`;
