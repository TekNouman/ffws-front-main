import { PositionsEnum } from 'typings/teams';

export const rosterLimits: Record<PositionsEnum, number> = {
  [PositionsEnum.qb]: 4,
  [PositionsEnum.rb]: 2,
  [PositionsEnum.wr]: 2,
  [PositionsEnum.te]: 3,
};

export const rosterPositionsCount: Record<PositionsEnum, number> = {
  [PositionsEnum.qb]: 0,
  [PositionsEnum.rb]: 0,
  [PositionsEnum.wr]: 0,
  [PositionsEnum.te]: 0,
};
