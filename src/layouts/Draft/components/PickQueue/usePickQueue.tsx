import * as React from 'react';

import { mockDraftPlayersPickQueue } from 'config/mocks/mockDraftPlayers';
import { PlayerType } from 'typings/players';

export enum OrderArrowEnum {
  up = 'up',
  down = 'down',
}

export type PickQueueType = {
  autoPick: boolean;
  handleAutoPick: () => void;
  playersList: PlayerType[];
  handlePickOrder: (playerId: number, orderArrow: OrderArrowEnum) => void;
  removePlayerFromPickQueue: (playerId: number) => void;
  addPlayerToPickQueue: (player: PlayerType) => void;
};

export const usePickQueue = (): PickQueueType => {
  const [playersList, setPlayersList] = React.useState<PlayerType[]>([]);

  const [autoPick, setAutoPick] = React.useState(
    mockDraftPlayersPickQueue.autoPick
  );
  const handleAutoPick = () => setAutoPick((prev) => !prev);

  const handlePickOrder = (playerId: number, orderArrow: OrderArrowEnum) => {
    // TODO call API and put pick queue data to setPlayersList
    setPlayersList((prev) => {
      const playerIndex = prev.findIndex((item) => item.id === playerId);
      const newIndex =
        playerIndex + deltaIndex(playerIndex, prev.length, orderArrow);
      const list = [...prev];
      const temp = list[playerIndex];
      list[playerIndex] = list[newIndex];
      list[newIndex] = temp;
      return list;
    });
  };

  const removePlayerFromPickQueue = (playerId: number) => {
    // TODO call API and put pick queue data to setPlayersList
    setPlayersList((prev) => prev.filter((item) => item.id !== playerId));
  };

  const addPlayerToPickQueue = (player: PlayerType) => {
    // TODO call API and put pick queue data to setPlayersList
    setPlayersList((prev) => [...prev, player]);
  };

  return {
    autoPick,
    handleAutoPick,
    playersList,
    handlePickOrder,
    removePlayerFromPickQueue,
    addPlayerToPickQueue,
  };
};

const deltaIndex = (
  oldIndex: number,
  arrayLength: number,
  orderArrow: OrderArrowEnum
): number => {
  if (orderArrow === OrderArrowEnum.up) {
    return oldIndex > 0 ? -1 : 0;
  }
  if (orderArrow === OrderArrowEnum.down) {
    return oldIndex < arrayLength - 1 ? 1 : 0;
  }
  return 0;
};
