import * as React from 'react';

import { HalfCardHeader, Flex, FlexColumn, PlayerLabel } from 'components/ui';
import Button from 'components/Button';
import AvatarPic from 'components/AvatarPic';
import { WaiverType } from 'typings/drafts';

import {
  LastWaiversCard,
  WaiversEditButton,
  WaiversLabel,
  WaiversColumn,
  WaiversCell,
  WaiversPlayer,
  WaiversPrice,
} from './styles';

type Props = {
  lastWaivers: WaiverType;
  waiversRef: React.RefObject<HTMLDivElement>;
};

const LastWaivers: React.FC<Props> = ({ lastWaivers, waiversRef }: Props) => {
  const handleWaiversEdit = () => {
    waiversRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [primary] = lastWaivers.primary;
  const [drop] = lastWaivers.drop;

  return (
    <LastWaiversCard withGap withMargin>
      <HalfCardHeader>Last Waivers</HalfCardHeader>
      <WaiversEditButton>
        <Button red small inline withArrow={false} onClick={handleWaiversEdit}>
          Edit Waivers&nbsp;&nbsp;
        </Button>
      </WaiversEditButton>
      <Flex>
        <WaiversColumn>
          <WaiversLabel>Primary</WaiversLabel>
          <WaiversCell leftRadius>
            <WaiversPrice leftRadius>${primary.price.toFixed(1)}</WaiversPrice>
            <WaiversPlayer>
              <AvatarPic img={primary.player.pic} name={primary.player.name} />
              <FlexColumn>
                <span>{primary.player.name}</span>
                <PlayerLabel>{primary.player.label}</PlayerLabel>
              </FlexColumn>
            </WaiversPlayer>
          </WaiversCell>
        </WaiversColumn>
        <WaiversColumn>
          <WaiversLabel>Drop</WaiversLabel>
          <WaiversCell rightRadius>
            <WaiversPlayer>
              <AvatarPic img={drop.pic} name={drop.name} />
              <FlexColumn>
                <span>{drop.name}</span>
                <PlayerLabel>{drop.label}</PlayerLabel>
              </FlexColumn>
            </WaiversPlayer>
          </WaiversCell>
        </WaiversColumn>
      </Flex>
    </LastWaiversCard>
  );
};

export default LastWaivers;
