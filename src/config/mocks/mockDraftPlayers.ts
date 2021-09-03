import {
  DraftPlayersListsType,
  DraftPlayersPickQueueType,
} from 'typings/drafts';
import { mockPlayers } from 'config/mocks/mockPlayers';

export const mockDraftPlayers: DraftPlayersListsType = {
  valuesNames: ['RD', 'PTS', 'MP', 'G', 'A', 'CS', 'GS', 'S', 'BPS'],
  players: [
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[0],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[1],
    },
    {
      isFree: false,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[2],
    },
    {
      isFree: false,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[3],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[4],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[5],
    },
    {
      isFree: false,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[6],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[7],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[8],
    },
    {
      isFree: true,
      values: [123.2, 0, 0, 0, 0, 0, 274, 234, 124],
      info: mockPlayers[9],
    },
  ],
};

export const mockDraftPlayersPickQueue: DraftPlayersPickQueueType = {
  autoPick: true,
  players: [
    mockPlayers[8],
    mockPlayers[4],
    mockPlayers[7],
    mockPlayers[2],
    mockPlayers[5],
  ],
};
