import * as React from 'react';

import Card from 'components/Card';
import Chart from 'components/Chart';
import { ColorCardProps } from 'typings/cards';

import { colorCardsConfig } from './config';
import { mockValues } from './mockConfig';
import { ColorCardWrapper, CardName, ListNumber, StatsNumber } from './styles';

const ColorCard: React.FC<ColorCardProps> = ({
  type,
  info,
}: ColorCardProps) => {
  const card = colorCardsConfig[type];
  return (
    <ColorCardWrapper big={card.big}>
      <Card color={card.color} fullWidth>
        <CardName>{card.name}</CardName>
        <ListNumber>#{info.listNumber}</ListNumber>
        <StatsNumber>{info.statsNumber}</StatsNumber>
        {card.big && <Chart values={mockValues} />}
      </Card>
    </ColorCardWrapper>
  );
};

export default ColorCard;
