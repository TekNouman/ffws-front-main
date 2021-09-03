import { DropdownQueryType } from 'typings/filters';

export enum PositionQueryEnum {
  all = 'all',
  qb = 'qb',
  rb = 'rb',
  wr = 'wr',
  te = 'te',
}

export const positionQueries: Record<PositionQueryEnum, DropdownQueryType> = {
  [PositionQueryEnum.all]: {
    label: 'All',
    query: PositionQueryEnum.all,
  },
  [PositionQueryEnum.qb]: {
    label: 'QB',
    query: PositionQueryEnum.qb,
  },
  [PositionQueryEnum.rb]: {
    label: 'RB',
    query: PositionQueryEnum.rb,
  },
  [PositionQueryEnum.wr]: {
    label: 'WR',
    query: PositionQueryEnum.wr,
  },
  [PositionQueryEnum.te]: {
    label: 'TE',
    query: PositionQueryEnum.te,
  },
};
