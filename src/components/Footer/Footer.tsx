import * as React from 'react';

import { links } from 'config/links';

import { Wrapper, Links } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div>Fantasy Football World Series ©2021</div>
      <div>Our Social</div>
      <Links>
        <a href={links.youtube} target="_blank">
          Youtube
        </a>
        <a href={links.instagram} target="_blank">
          Instagram
        </a>
        <a href={links.tiktok} target="_blank">
          Tiktok
        </a>
        <a href={links.twitter} target="_blank">
          Twitter
        </a>
      </Links>
    </Wrapper>
  );
};

export default Footer;
