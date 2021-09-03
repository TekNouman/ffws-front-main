import * as React from 'react';

import { routes } from 'config/routes';
import { CardScreenProps } from 'typings/cards';
import Close from 'components/Close';

import { Wrapper } from './styles';

const CardsScreen: React.FC<CardScreenProps> = ({ cards }: CardScreenProps) => {
  return (
    <Wrapper>
      <Close href={routes.home} />
      {cards.map((Card, i) => (
        <Card key={i} />
      ))}
    </Wrapper>
  );
};

export default CardsScreen;
