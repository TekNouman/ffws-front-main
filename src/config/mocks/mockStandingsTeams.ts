import { StandingsTeamsListType } from 'typings/teams';

import { mockTeams } from './mockTeams';

export const mockStandingsTeams: StandingsTeamsListType = {
  valuesNames: ['W', 'L', 'T', 'PTS', 'PTS AGNST'],
  teams: mockTeams.map((team) => ({
    info: team,
    values: [5, 7, 19, 12, 197],
  })),
};
