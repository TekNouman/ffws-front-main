import { LeagueInfoType } from 'typings/leagues';
import { OfficeTeamType } from 'typings/teams';
import { WaiverType, RosterBenchPlayerListType } from 'typings/drafts';
import { PlayersListType } from 'typings/players';

import { mockTeams } from './mockTeams';
import { mockPlayers } from './mockPlayers';

export const mockLeaguesInfo: LeagueInfoType[] = [
  {
    id: 'bbq',
    name: 'BBQ',
    waiverDollars: 1000,
    teamsCount: 12,
  },
];

export const mockOfficeTeam: OfficeTeamType = {
  ...mockTeams[0],
  league: mockLeaguesInfo[0],
};

export const mockLastWaivers: WaiverType = {
  primary: [
    {
      player: mockPlayers[0],
      price: 104.2,
    },
  ],
  drop: [mockPlayers[1]],
};

export const mockWaivers: WaiverType = {
  primary: [
    {
      player: mockPlayers[0],
      price: 82.3,
    },
    {
      player: mockPlayers[1],
      price: 100.12,
    },
    {
      player: mockPlayers[2],
      price: 203.99,
    },
  ],
  drop: [mockPlayers[3], mockPlayers[4], mockPlayers[5]],
  remainingDollars: 1000,
};

const mockRosterBenchPlayer = {
  slot: 'FLEX',
  info: mockPlayers[0],
  values: ['IND SUN 100ED', '9', '0.00', '0', '0.00', '67,4%'],
  swapPlayers: [mockPlayers[1], mockPlayers[2], mockPlayers[3]],
};

export const mockRosterList: RosterBenchPlayerListType = {
  valuesNames: ['OPP', 'BYE', 'AVG', 'PROJ', 'LAST', 'START %'],
  players: new Array(10).fill(mockRosterBenchPlayer),
};

export const mockBenchList: RosterBenchPlayerListType = {
  valuesNames: ['OPP', 'BYE', 'AVG', 'PROJ', 'LAST', 'START %'],
  players: new Array(6).fill(mockRosterBenchPlayer),
};

export const mockAvailablePlayers: PlayersListType = {
  valuesNames: [
    'Next OPP',
    'BYE',
    'OPP RK',
    'LAST',
    'PROJ',
    'AVG',
    'PTS',
    'OWN %',
  ],
  players: [
    {
      ...mockPlayers[0],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[1],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[2],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[3],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[4],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[5],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[6],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[7],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[8],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[9],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[0],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
    {
      ...mockPlayers[1],
      values: ['DEN', 14, 12, 15, 16, 13, 21, 96],
    },
  ],
};
