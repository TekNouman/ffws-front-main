import { WaitingRoomType } from 'typings/waitingRoom';
import { mockTeams } from 'config/mocks/mockTeams';

export const mockWaitingRoom: WaitingRoomType = {
  slotsFilled: 7,
  slotsMax: 10,
  leagueID: 'bbq',
  list: [
    {
      slot: 1,
      team: mockTeams[0],
    },
    {
      slot: 2,
      team: mockTeams[4],
    },
    {
      slot: 3,
      team: mockTeams[5],
    },
    {
      slot: 4,
      team: null,
      manager: null,
    },
    {
      slot: 5,
      team: null,
      manager: null,
    },
    {
      slot: 6,
      team: mockTeams[6],
    },
    {
      slot: 7,
      team: mockTeams[7],
    },
    {
      slot: 8,
      team: mockTeams[8],
    },
    {
      slot: 9,
      team: null,
      manager: null,
    },
    {
      slot: 10,
      team: mockTeams[9],
    },
  ],
};
