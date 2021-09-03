import { PositionsEnum } from 'typings/teams';

export type PlayerType = {
  id: number;
  pic?: string;
  name: string;
  label?: string;
  rk?: number;
  position?: PositionsEnum;
  additional?: string;
};

export type PositionType = {
  position: PositionsEnum;
};

export type PlayerInfoDescriptionType = {
  title: string;
  points: number;
  text: string;
};

export type PlayerInfoType = {
  teamName: string;
  info: string;
  tags: string[];
  description: PlayerInfoDescriptionType;
  stats: (string | number)[][];
  statsValuesNames: string[];
} & PlayerType;

export type PlayerWithValues = {
  values: (string | number)[];
} & PlayerType;

export type PlayersListType = {
  valuesNames: string[];
  players: PlayerWithValues[];
};
