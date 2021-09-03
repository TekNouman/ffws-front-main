import * as React from 'react';

import { mockDraftPicks } from 'config/mocks/mockDraftPicks';
import { mockDraftPlayers } from 'config/mocks/mockDraftPlayers';
import { mockRosterPlayers } from 'config/mocks/mockRosterPlayers';
import { mockPicksPlayers } from 'config/mocks/mockPicksPlayers';
import { mockPlayersInfo } from 'config/mocks/mockPlayersInfo';
import { mockDraftBoards } from 'config/mocks/mockDraftBoard';
import { PlayerType, PlayerInfoType, PositionType } from 'typings/players';
import { useDraftBoard } from 'components/DraftBoard/useDraftBoard';

import { usePlayersSearch } from './components/Players/usePlayersSearch';
import { usePickQueue } from './components/PickQueue/usePickQueue';

export const useDraftPlayers = () => {
  // TODO call API and put draft players data to useState https://reactjs.org/docs/hooks-state.html
  // You can useEffect inside component to avoid side effects https://reactjs.org/docs/hooks-effect.html
  const [draftPlayers, setDraftPlayers] = React.useState(mockDraftPlayers);

  const enablePlayerInList = (playerId: number) => {
    // TODO call API and put updated draft players data to useState
    setDraftPlayers((prev) => {
      const newDraftPlayers = { ...prev };
      prev.players.forEach((item) => {
        if (item.info.id === playerId) {
          item.isFree = true;
        }
      });
      return newDraftPlayers;
    });
  };

  const disablePlayerInList = (playerId: number) => {
    // TODO call API and put updated draft players data to setDraftPlayers
    setDraftPlayers((prev) => {
      const newDraftPlayers = { ...prev };
      prev.players.forEach((item) => {
        if (item.info.id === playerId) {
          item.isFree = false;
        }
      });
      return newDraftPlayers;
    });
  };

  return { draftPlayers, enablePlayerInList, disablePlayerInList };
};

export const useRoster = () => {
  // TODO call API and put roster players data to useState

  const [rosterList] =
    React.useState<(PlayerType | PositionType)[]>(mockRosterPlayers);

  return { rosterList };
};

export const usePicks = () => {
  // TODO call API and put roster players data to useState
  const [picksList] = React.useState<PlayerType[]>(mockPicksPlayers);

  return { picksList };
};

export const usePlayerModal = () => {
  const [modalPlayer, setModalPlayer] = React.useState<PlayerInfoType | null>(
    null
  );

  const handleCloseModalPlayer = () => setModalPlayer(null);
  const handleModalPlayer = (player: PlayerType) => {
    const playerInfo = mockPlayersInfo.find(
      (playerInfo) => playerInfo.id === player.id
    );
    setModalPlayer(playerInfo || null);
  };

  return { modalPlayer, handleModalPlayer, handleCloseModalPlayer };
};

export const useDraft = () => {
  // TODO call API and put draft picks data to useState
  const [picksRounds] = React.useState(mockDraftPicks);

  const { rosterList } = useRoster();
  const { picksList } = usePicks();

  const { draftPlayers, enablePlayerInList, disablePlayerInList } =
    useDraftPlayers();
  const playerSearch = usePlayersSearch();
  const pickQueue = usePickQueue();

  const handleRemoveFromPickQueue = (playerId: number) => {
    pickQueue.removePlayerFromPickQueue(playerId);
    enablePlayerInList(playerId);
  };

  const { modalPlayer, handleModalPlayer, handleCloseModalPlayer } =
    usePlayerModal();

  const handlePlayerClick = (player: PlayerType) => {
    handleModalPlayer(player);
  };

  const handleAddToPickQueue = (player: PlayerType) => {
    pickQueue.addPlayerToPickQueue(player);
    disablePlayerInList(player.id);
  };

  const {
    handleQuater,
    draftBoard,
    quater,
    toggleDraftBoard,
    handleToggleDraftBoard,
    draftBoardRef,
    scrollToDraftBoard,
    draftBoardLoading,
  } = useDraftBoard(mockDraftBoards, true);

  return {
    picksRounds,
    playerSearch,
    draftPlayers,
    pickQueue,
    handleRemoveFromPickQueue,
    handlePlayerClick,
    rosterList,
    picksList,
    handleQuater,
    draftBoard,
    quater,
    toggleDraftBoard,
    handleToggleDraftBoard,
    draftBoardRef,
    scrollToDraftBoard,
    draftBoardLoading,
    modalPlayer,
    handleCloseModalPlayer,
    handleAddToPickQueue,
  };
};
