import * as React from 'react';

import DraftPlayersList from 'components/lists/DraftPlayersList';
import { DraftPlayersListsType } from 'typings/drafts';
import { PlayerType } from 'typings/players';

import { PlayerSearchType } from './usePlayersSearch';
import Search from './Search';
import { Wrapper } from './styles';

type Props = {
  search: PlayerSearchType;
  playersList: DraftPlayersListsType;
  handlePlayerClick: (player: PlayerType) => void;
};

const Players: React.FC<Props> = ({
  search,
  playersList,
  handlePlayerClick,
}: Props) => {
  return (
    <Wrapper>
      <Search search={search} />
      <DraftPlayersList
        playersList={playersList}
        handlePlayerClick={handlePlayerClick}
      />
    </Wrapper>
  );
};

export default React.memo(Players);
