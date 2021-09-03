import * as React from 'react';

import ColorCard from 'components/cards/ColorCard';
import { ColorCardEnum } from 'components/cards/ColorCard/config';
import { HalfColumn } from 'components/ui';

import { ColorCardsWrapper } from './styles';

const ColorCards: React.FC = () => {
  return (
    <ColorCardsWrapper>
      <HalfColumn>
        <ColorCard
          type={ColorCardEnum.averageQS}
          info={{ listNumber: 1, statsNumber: 0 }}
        />
        <ColorCard
          type={ColorCardEnum.totalQPS}
          info={{ listNumber: 3, statsNumber: 0 }}
        />
        <ColorCard
          type={ColorCardEnum.lifetimeWinnings}
          info={{ listNumber: 3, statsNumber: 0 }}
        />
      </HalfColumn>
      <HalfColumn>
        <ColorCard
          type={ColorCardEnum.QW}
          info={{ listNumber: 2, statsNumber: 0 }}
        />
        <ColorCard
          type={ColorCardEnum.tournamentQW}
          info={{ listNumber: 1, statsNumber: 0 }}
        />
      </HalfColumn>
    </ColorCardsWrapper>
  );
};

export default ColorCards;
