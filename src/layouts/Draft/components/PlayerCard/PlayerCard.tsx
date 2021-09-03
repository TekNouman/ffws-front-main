import * as React from 'react';

import Card from 'components/Card';
import Close from 'components/Close';
import { ModalTitle } from 'components/ui';

import PlayerInfo from './PlayerInfo';
import { Wrapper, CardModal, CardModalInner } from './styles';
import { PlayerCardProps } from './types';

const PlayerCard: React.FC<PlayerCardProps> = (props: PlayerCardProps) => {
  const { modalPlayer, onClose } = props;

  return (
    <Wrapper visible={Boolean(modalPlayer)}>
      <CardModal>
        <Card fullHeight fullWidth>
          <CardModalInner>
            <Close onClose={onClose} />
            <ModalTitle>Player Card</ModalTitle>
            {modalPlayer && <PlayerInfo {...props} />}
          </CardModalInner>
        </Card>
      </CardModal>
    </Wrapper>
  );
};

export default PlayerCard;
