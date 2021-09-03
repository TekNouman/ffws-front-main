import { UserType } from 'typings/users';
import { LeagueInfoType } from 'typings/leagues';

export enum PositionsEnum {
  qb = 'qb',
  wr = 'wr',
  te = 'te',
  rb = 'rb',
}

export type PositionsValuesType = {
  [PositionsEnum.qb]: number;
  [PositionsEnum.wr]: number;
  [PositionsEnum.te]: number;
  [PositionsEnum.rb]: number;
};

export type TeamStatsType = {
  points: number;
  rank: number;
  aqs: number;
  aws: number;
  qw: number;
};

export type TeamType = {
  id: string | number;
  name: string;
  logo?: string;
  owner?: UserType;
  positions: PositionsValuesType;
  stats?: TeamStatsType;
};

export type OfficeTeamType = {
  league: LeagueInfoType;
} & TeamType;

export type StandingsTeamType = {
  info: TeamType;
  values: (string | number)[];
};

export type StandingsTeamsListType = {
  valuesNames: string[];
  teams: StandingsTeamType[];
};
