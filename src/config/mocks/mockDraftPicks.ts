import { PicksRoundType } from 'typings/picks';
import { mockTeams } from 'config/mocks/mockTeams';

export const mockDraftPicks: PicksRoundType[] = [
  {
    step: 5,
    picks: [
      {
        step: 33,
        team: mockTeams[10],
      },
    ],
  },
  {
    step: 6,
    picks: [
      {
        step: 34,
        team: mockTeams[11],
      },
      {
        step: 35,
        team: mockTeams[0],
      },
      {
        step: 36,
        team: mockTeams[12],
      },
      {
        step: 37,
        team: mockTeams[13],
      },
    ],
  },
  {
    step: 7,
    picks: [
      {
        step: 38,
        team: mockTeams[14],
      },
    ],
  },
];
