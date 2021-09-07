import * as React from 'react';

import Card from 'components/Card';
import { HalfCardHeader, CardWrapper, SecondaryTextColor } from 'components/ui';
import { colors } from 'styles/colors';
import PlayersList from 'components/lists/PlayersList';
import { PlayersListType } from 'typings/players';

type Props = {
  list: PlayersListType;
};

const TeamRoster: React.FC<Props> = ({ list }: Props) => {
  return (
    <CardWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>
          Team Roster{' '}
          <SecondaryTextColor>• {list.players.length}</SecondaryTextColor>
        </HalfCardHeader>
        <PlayersList   />
      </Card>
    </CardWrapper>
  );
};

export default TeamRoster;
