import { PlayerInfoType } from 'typings/players';

import { mockPlayers } from './mockPlayers';

export const mockPlayersInfo: PlayerInfoType[] = [
  {
    ...mockPlayers[0],
    teamName: 'Philadelphia Eagles',
    info: 'Age 25 • 6 • 220 lbs',
    tags: ['RB', 'DAL'],
    description: {
      title: '2021 projection',
      points: 305.0,
      text: '\nPharetra curabitur aenean mauris amet adipiscing consequat cras praesent at. Diam pharetra mattis sed bibendum vulputate sit et tempus, orci. Blandit etiam vivamus mattis at purus id risus elementum. Amet eu purus justo ut vitae. Nunc sed urna ac consectetur. Viverra ultrices ac et tincidunt vestibulum pharetra orci aenean convallis. Lacus, id ullamcorper odio id. Volutpat amet varius nulla malesuada ac donec cras id. Proin viverra nec maecenas laoreet auctor lorem. Turpis nec in in adipiscing. \nPulvinar suscipit proin proin vitae scelerisque viverra. Mi, viverra dui nisl est odio mauris. Dolor viverra sit lacus, natoque. Feugiat in tristique vestibulum quis in et ullamcorper.',
    },
    statsValuesNames: [
      'Wk',
      'Opp',
      'Vds',
      'TD',
      'Ist',
      'Yds',
      'TD',
      'Rec',
      'Yds',
      'TD',
      'Pts',
    ],
    stats: [
      [1, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
      [2, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
      [3, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
      [4, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
      [5, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
      [6, 'LAR', 0, 0, 96, 1, 3, 31, 1, 1, 27.7],
    ],
  },
];
