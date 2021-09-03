import { TeamType } from 'typings/teams';

export type PickType = {
  step: number;
  team: TeamType;
};

export type PicksRoundType = {
  step: number;
  picks: PickType[];
};
