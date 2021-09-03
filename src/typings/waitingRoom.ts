import { UserType } from 'typings/users';
import { TeamType } from 'typings/teams';

export type WaitingRoomItemType = {
  slot: number;
  team: TeamType | null;
  manager?: UserType | null;
};

export type WaitingRoomType = {
  slotsFilled: number;
  slotsMax: number;
  leagueID: string | number;
  list: WaitingRoomItemType[];
};

export type WaitingRoomDraftInfoType = {
  date: string;
  draftType: string;
  scoringType: string;
  leagueSize: string;
  playerUniverse: string;
};

export type DraftNowType = {
  pickNow: boolean;
  step: number;
  round: string;
  date: string;
  team: TeamType;
};
