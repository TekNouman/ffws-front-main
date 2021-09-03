import * as React from 'react';

import Card from 'components/Card';
import Button from 'components/Button';
import { ExternalLink } from 'components/ui';
import { links } from 'config/links';

import {
  Wrapper,
  TVOverlay,
  PlayButton,
  TVName,
  ButtonWrapper,
} from './styles';
import tvPosterImg from './images/tv-poster.jpg';
import PlayButtonIcon from './icons/play.component.svg';

const TV: React.FC = () => {
  return (
    <Wrapper>
      <Card fullWidth fullHeight background={tvPosterImg}>
        <ExternalLink href={links.tv} target="_blank">
          <TVOverlay>
            <TVName>FFWS TV</TVName>
            <PlayButton>
              <PlayButtonIcon />
            </PlayButton>
            <ButtonWrapper>
              <Button simple small withArrow={false}>
                WATCH
              </Button>
            </ButtonWrapper>
          </TVOverlay>
        </ExternalLink>
      </Card>
    </Wrapper>
  );
};

export default TV;
