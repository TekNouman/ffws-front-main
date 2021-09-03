import { CardType, CardsEnum, CardsRoutesRecord } from 'typings/cards';

export const generateCardRoute = (card: CardType): string =>
  `${card.pageRoute}?card=${card.cardKey}`;

export const generateCardsRoutes = (
  cards: Partial<Record<CardsEnum, CardType>>
): CardsRoutesRecord =>
  Object.assign(
    {},
    ...Object.keys(cards).map((cardKey) => ({
      [cardKey]: generateCardRoute(cards[cardKey]),
    }))
  );

export const getCardKey = (
  cards: Partial<Record<CardsEnum, CardType>>,
  defaultKey: CardsEnum,
  cardKey?: string | string[]
): CardsEnum =>
  cards[cardKey as CardsEnum] ? (cardKey as CardsEnum) : defaultKey;

export const generateTeamLeagueQuery = (
  teamId: string | number,
  leagueId: string | number
): string => `?team=${teamId}&league=${leagueId}`;
