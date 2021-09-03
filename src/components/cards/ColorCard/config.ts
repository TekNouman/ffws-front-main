import { colors } from 'styles/colors';

export enum ColorCardEnum {
  averageQS,
  totalQPS,
  lifetimeWinnings,
  QW,
  tournamentQW,
}

export type ColorCardType = {
  color: string;
  name: string;
  big?: boolean;
};

export const colorCardsConfig: Record<ColorCardEnum, ColorCardType> = {
  [ColorCardEnum.averageQS]: {
    color: colors.lightBlue,
    name: 'Average QS',
  },
  [ColorCardEnum.totalQPS]: {
    color: colors.pink,
    name: 'Total QPS',
  },
  [ColorCardEnum.lifetimeWinnings]: {
    color: colors.gray,
    name: 'Lifetime Winnings',
  },
  [ColorCardEnum.QW]: {
    color: colors.lightRed,
    name: 'QW',
    big: true,
  },
  [ColorCardEnum.tournamentQW]: {
    color: colors.green,
    name: 'Tournament QW',
  },
};
