import * as React from 'react';

import Card from 'components/Card';
import {
  HalfCard,
  HalfCardHeader,
  TagButton,
  CardWrapper,
} from 'components/ui';
import { colors } from 'styles/colors';
import { WaiverType } from 'typings/drafts';
import { formatter } from 'utils/intl';

import WaiverPlayer from './WaiverPlayer';
import {
  RemainingDollars,
  RemainingDollarsText,
  WaiversListLabel,
  WaiversListsWrapper,
  WaiversList,
} from './styles';

type Props = {
  waiversRef: React.RefObject<HTMLDivElement>;
  waivers: WaiverType | null;
};

const Waivers: React.FC<Props> = ({ waiversRef, waivers }: Props) => {
  return (
    <CardWrapper ref={waiversRef}>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>Waivers</HalfCardHeader>
        <RemainingDollars>
          <RemainingDollarsText>Remaining Faab Dollars</RemainingDollarsText>
          <TagButton $color={colors.blackContent}>
            {formatter.format(
              waivers?.remainingDollars ? waivers.remainingDollars : 0
            )}
          </TagButton>
        </RemainingDollars>
        <WaiversListsWrapper>
          <HalfCard color={colors.blackContent} withGap>
            <WaiversListLabel>Add Players</WaiversListLabel>
            <WaiversList>
              {waivers ? (
                waivers.primary.map((waiver, i) => (
                  <WaiverPlayer
                    player={waiver.player}
                    price={waiver.price}
                    key={`waivers_primary_${i}`}
                  />
                ))
              ) : (
                <WaiverPlayer />
              )}
            </WaiversList>
          </HalfCard>
          <HalfCard color={colors.blackContent} withGap>
            <WaiversListLabel>Drop Players</WaiversListLabel>
            <WaiversList>
              {waivers ? (
                waivers.drop.map((player, i) => (
                  <WaiverPlayer player={player} key={`waivers_drop_${i}`} />
                ))
              ) : (
                <WaiverPlayer />
              )}
            </WaiversList>
          </HalfCard>
        </WaiversListsWrapper>
      </Card>
    </CardWrapper>
  );
};

export default Waivers;
