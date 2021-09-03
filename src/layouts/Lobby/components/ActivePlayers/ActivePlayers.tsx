import * as React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import Button from 'components/Button';
import AvatarPic from 'components/AvatarPic';
import { mockActivePlayers } from 'config/mocks/mockActivePlayers';

import { Wrapper, ScrollInner, Title } from './styles';

const ActivePlayers: React.FC = () => {
  return (
    <Wrapper>
      <ScrollContainer horizontal className="scroll-container">
        <ScrollInner>
          <Title>Active Players</Title>
          {mockActivePlayers.map((player, i) => (
            <Button black key={i}>
              <AvatarPic
                img={player.userPic}
                name={player.name}
                online={player.online}
              />
              {player.name}
            </Button>
          ))}
        </ScrollInner>
      </ScrollContainer>
    </Wrapper>
  );
};

export default ActivePlayers;
