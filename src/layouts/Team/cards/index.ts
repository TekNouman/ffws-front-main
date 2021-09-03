import { CardType } from 'typings/cards';

import CreateCard from './CreateCard';
import ChooseCard from './ChooseCard';
import PriceCard from './PriceCard';

export enum TeamCardsEnum {
  create = 'create',
  choose = 'choose',
  price = 'price',
}

export const teamRoute = '/team';

export const teamCards: Record<TeamCardsEnum, CardType> = {
  [TeamCardsEnum.create]: {
    component: CreateCard,
    cardKey: TeamCardsEnum.create,
    pageRoute: teamRoute,
    name: 'Create Team',
  },
  [TeamCardsEnum.choose]: {
    component: ChooseCard,
    cardKey: TeamCardsEnum.choose,
    pageRoute: teamRoute,
    name: 'Choose Team',
  },
  [TeamCardsEnum.price]: {
    component: PriceCard,
    cardKey: TeamCardsEnum.price,
    pageRoute: teamRoute,
    name: 'Price',
  },
};
