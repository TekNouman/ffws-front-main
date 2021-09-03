import * as React from 'react';

import { TeamType, PositionsEnum } from 'typings/teams';
import { mockAuthUser } from 'config/mocks/mockAuthUser';

export const mockEvent = {
  description: (
    <>
      Main Event ONLINE #2, Friday. Aug. 20th, <br />
      10 PM ET/ 7 PM PT
    </>
  ),
  priceDescription:
    'Free Entry Credit into (Main Event ONLINE #2, Friday. Aug. 20th, 10 PM ET / 7 PM PT)',
  price: '$1,900.00',
};

export const mockTeams: TeamType[] = [
  {
    id: 1,
    name: 'Nixons',
    logo: require('./mockLogos/team-1.png'),
    owner: {
      id: mockAuthUser.id,
      name: mockAuthUser.name,
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
    stats: {
      points: 12.02,
      rank: 7,
      aqs: 123,
      aws: 321,
      qw: 425,
    },
  },
  {
    id: 2,
    name: 'Moun',
    owner: {
      id: mockAuthUser.id,
      name: mockAuthUser.name,
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 3,
    name: 'Seether',
    logo: require('./mockLogos/team-3.png'),
    owner: {
      id: mockAuthUser.id,
      name: mockAuthUser.name,
    },

    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 4,
    name: 'Faust',
    logo: require('./mockLogos/team-4.png'),
    owner: {
      id: mockAuthUser.id,
      name: mockAuthUser.name,
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 15,
    name: 'Warren',
    owner: {
      id: 1,
      name: 'Cameron Williamson',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 16,
    name: 'Black',
    logo: require('config/mocks/mockLogos/team-16.png'),
    owner: {
      id: 2,
      name: 'Leslie Alexander',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 17,
    name: 'Black',
    owner: {
      id: 3,
      name: 'Ralph Edwards',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 18,
    name: 'Restless',
    owner: {
      id: 4,
      name: 'Eleanor Pena',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 19,
    name: 'Gray',
    logo: require('config/mocks/mockLogos/team-19.png'),
    owner: {
      id: 5,
      name: 'Jenny Wilson',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 20,
    name: 'Watson',
    logo: require('config/mocks/mockLogos/team-20.png'),
    owner: {
      id: 6,
      name: 'Alexander Wilson',
    },
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 21,
    name: 'Nixons',
    logo: require('config/mocks/mockLogos/team-21.png'),
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 22,
    name: 'Bulls',
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 23,
    name: 'Seether',
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 24,
    name: 'Nixons',
    logo: require('config/mocks/mockLogos/team-24.png'),
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
  {
    id: 25,
    name: 'Very Long Long Long Long Name',
    positions: {
      [PositionsEnum.qb]: 4,
      [PositionsEnum.wr]: 5,
      [PositionsEnum.te]: 1,
      [PositionsEnum.rb]: 6,
    },
  },
];

export const mockAuthUserTeams: TeamType[] = [
  mockTeams[0],
  mockTeams[1],
  mockTeams[2],
  mockTeams[3],
];
