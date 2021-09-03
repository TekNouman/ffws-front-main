import React from 'react';

import { AuthCardsEnum } from 'layouts/Auth/cards';
import { TeamCardsEnum } from 'layouts/Team/cards';
import { ColorCardEnum } from 'components/cards/ColorCard/config';

export type CardType = {
  component: React.FC;
  pageRoute: string;
  cardKey: CardsEnum;
  name: string;
};

export type CardProps = {
  children?: React.ReactNode;
  withPadding?: boolean;
  withOverflow?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  absolute?: boolean;
  color?: string;
  background?: string;
};

export type CardScreenProps = {
  cards: React.FC<CardProps>[];
};

export type CardStatsInfo = {
  listNumber: number;
  statsNumber: number;
};

export type ColorCardProps = {
  type: ColorCardEnum;
  info: CardStatsInfo;
};

export type CardsEnum = AuthCardsEnum | TeamCardsEnum;
export type CardsRoutesRecord = Record<CardsEnum, string>;
