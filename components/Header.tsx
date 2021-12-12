import { FC } from 'react';
import styled from 'styled-components';

import GitHub from '../public/icons/github.svg';
import Instagram from '../public/icons/instagram.svg';
import LinkedIn from '../public/icons/linkedin.svg';
import Twitch from '../public/icons/twitch.svg';
import Twitter from '../public/icons/twitter.svg';

export const Header: FC = () => {
  return (
    <Socials>
      <a
        href="https://github.com/jack-douglas"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
      </a>
      <a href="https://twitter.com/jackenv" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
      <a href="https://instagram.com/jackenv" target="_blank" rel="noreferrer">
        <Instagram />
      </a>
      <a href="https://www.twitch.tv/jackenv" target="_blank" rel="noreferrer">
        <Twitch />
      </a>
      <a
        href="https://www.linkedin.com/in/jack-douglas"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
    </Socials>
  );
};

const Socials = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    display: block;
    margin: 0 12px 0 0;
    padding: 5px;

    svg {
      height: 25px;
      color: var(--text);
      opacity: 0.85;
      transition: ease all 150ms;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
