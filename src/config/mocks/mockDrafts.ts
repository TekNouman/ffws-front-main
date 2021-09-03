import { WaitingRoomDraftInfoType, DraftNowType } from 'typings/waitingRoom';
import { mockTeams } from 'config/mocks/mockTeams';

export const mockDraftInfo: WaitingRoomDraftInfoType = {
  date: '2021-08-31T16:00:00.000Z',
  draftType: 'BBQ',
  scoringType: 'FFWS',
  leagueSize: '10',
  playerUniverse: 'NFL',
};

export const mockDraftStarts: DraftNowType = {
  pickNow: false,
  step: 31,
  round: '4 of 18',
  date: '2021-08-31T16:00:00.000Z',
  team: mockTeams[0],
};
