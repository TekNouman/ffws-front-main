import { PositionsEnum } from 'typings/teams';
import { colors } from 'styles/colors';

type PositionValueType = {
  position: PositionsEnum;
  background: string;
  color: string;
};

export const positionValues: PositionValueType[] = [
  {
    position: PositionsEnum.qb,
    background: colors.lightBlueSecond,
    color: colors.blackPanel,
  },
  {
    position: PositionsEnum.wr,
    background: colors.headersGreen,
    color: colors.blackPanel,
  },
  {
    position: PositionsEnum.te,
    background: colors.headerRed,
    color: colors.white,
  },
  {
    position: PositionsEnum.rb,
    background: colors.purple,
    color: colors.white,
  },
];
