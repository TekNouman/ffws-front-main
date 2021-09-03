import { DropdownQueryType } from 'typings/filters';

export enum SeasonQueryEnum {
  s2021 = '2021',
  s2022 = '2022',
}

export const seasonQueries: Record<SeasonQueryEnum, DropdownQueryType> = {
  [SeasonQueryEnum.s2021]: {
    label: '2021 Season',
    query: SeasonQueryEnum.s2021,
  },
  [SeasonQueryEnum.s2022]: {
    label: '2022 Season',
    query: SeasonQueryEnum.s2022,
  },
};
