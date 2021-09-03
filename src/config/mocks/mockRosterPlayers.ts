import { mockPlayers } from 'config/mocks/mockPlayers';
import { PlayerType, PositionType } from 'typings/players';
import { PositionsEnum } from 'typings/teams';

export const mockRosterPlayers: (PlayerType | PositionType)[] = [
  {
    position: PositionsEnum.qb,
  },
  mockPlayers[3],
  {
    position: PositionsEnum.te,
  },
  {
    position: PositionsEnum.rb,
  },
];
