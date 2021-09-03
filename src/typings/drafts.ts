import { PlayerType } from './players';
import { DraftLeagueType } from './leagues';

export type DraftType = {
  id: string;
  name: string;
  spots: [number, number];
  date: string;
  draft: number;
  buyIn: number;
  entry: number;
  duration: string;
};

export type DraftTableType = {
  id: string | number;
  isOpen: boolean;
  values: string[];
};

export type DraftListsType = {
  valuesNames: string[];
  leagues: DraftLeagueType[];
};

export type DraftPlayerType = {
  isFree: boolean;
  values: number[];
  info: PlayerType;
};

export type DraftPlayersListsType = {
  valuesNames: string[];
  players: DraftPlayerType[];
};

export type DraftPlayersPickQueueType = {
  autoPick: boolean;
  players: PlayerType[];
};

export enum QuatersEnum {
  q1 = 'q1',
  q2 = 'q2',
  q3 = 'q3',
  q4 = 'q4',
}

export type DraftBoardPlayerType = {
  name: string;
  color: string;
};

export type DraftBoardTeamType = {
  name: string;
  players: DraftBoardPlayerType[];
};

export type DraftBoardType = {
  rounds: number;
  teams: DraftBoardTeamType[];
};

export enum WeeksEnum {
  week1 = 'week1',
  week2 = 'week2',
  week3 = 'week3',
  week4 = 'week4',
}

export type WaiverPlayerType = {
  player: PlayerType;
  price: number;
};

export type WaiverType = {
  primary: WaiverPlayerType[];
  drop: PlayerType[];
  remainingDollars?: number;
};

export type RosterBenchPlayerType = {
  values: (string | number)[];
  slot: string;
  info: PlayerType;
  swapPlayers: PlayerType[];
};

export type RosterBenchPlayerListType = {
  valuesNames: string[];
  players: RosterBenchPlayerType[];
};
