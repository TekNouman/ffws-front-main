import { DraftTableType } from 'typings/drafts';

export type LeagueType = {
  id: string | number;
  name: string;
};

export type DraftLeagueType = {
  drafts: DraftTableType[];
} & LeagueType;

export type LeagueInfoType = {
  waiverDollars: number;
  teamsCount: number;
} & LeagueType;
