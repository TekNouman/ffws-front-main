import * as React from 'react';

import InfoCard from 'components/cards/InfoCard';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import AvatarPic from 'components/AvatarPic';
import {
  HalfCardText,
  FlexColumn,
  PlayerName,
  PlayerLabel,
} from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableCellValue,
  THeadSticky,
} from 'components/tables';
import { PlayerType } from 'typings/players';

import ArrowIcon from './icons/arrow.component.svg';
import CrossIcon from './icons/cross.component.svg';
import { PickQueueType, OrderArrowEnum } from './usePickQueue';
import {
  Wrapper,
  TableScroll,
  AutoPick,
  Toggle,
  OrderButton,
  OrderButtonsWrapper,
  RemoveButton,
  TableLineValuesWithHover,
} from './styles';

type Props = {
  pickQueue: PickQueueType;
  handleRemoveFromPickQueue: (playerId: number) => void;
  handlePlayerClick: (player: PlayerType) => void;
};

const PickQueue: React.FC<Props> = ({
  pickQueue,
  handleRemoveFromPickQueue,
  handlePlayerClick,
}: Props) => {
  return (
    <Wrapper>
      <InfoCard title="Pick Queue">
        <AutoPick onClick={pickQueue.handleAutoPick}>
          <span>Autopick</span>
          <Toggle $active={pickQueue.autoPick} />
        </AutoPick>
        <TableScroll>
          <Table withPadding>
            <THeadSticky>
              <TableLineLabels>
                <TableCellLabel>&nbsp;</TableCellLabel>
                <TableCellLabel withArrow alignLeft>
                  <HalfCardText>RK</HalfCardText>
                </TableCellLabel>
                <TableCellLabel alignLeft>
                  <HalfCardText>Player</HalfCardText>
                </TableCellLabel>
              </TableLineLabels>
            </THeadSticky>
            <tbody>
              {pickQueue.playersList.map((player, i) => (
                <TableLineValuesWithHover
                  key={'player_' + i}
                  onClick={() => handlePlayerClick(player)}
                >
                  <TableCellValue withArrows>
                    <OrderButtonsWrapper>
                      <OrderButton
                        onClick={() =>
                          pickQueue.handlePickOrder(
                            player.id,
                            OrderArrowEnum.up
                          )
                        }
                      >
                        <ArrowIcon />
                      </OrderButton>
                      <OrderButton
                        onClick={() =>
                          pickQueue.handlePickOrder(
                            player.id,
                            OrderArrowEnum.down
                          )
                        }
                        bottom
                      >
                        <ArrowIcon />
                      </OrderButton>
                    </OrderButtonsWrapper>
                  </TableCellValue>
                  <TableCellValue withArrows>
                    <ValueButton flexStart>{player.rk}</ValueButton>
                  </TableCellValue>
                  <TableCellValue flexAlign>
                    <AvatarPic img={player.pic} name={player.name} />
                    <FlexColumn>
                      <PlayerName>{player.name}</PlayerName>
                      <PlayerLabel>{player.label}</PlayerLabel>
                    </FlexColumn>
                  </TableCellValue>
                  <TableCellValue>
                    <RemoveButton
                      onClick={(event) => {
                        event.stopPropagation();
                        handleRemoveFromPickQueue(player.id);
                      }}
                    >
                      <CrossIcon />
                    </RemoveButton>
                  </TableCellValue>
                </TableLineValuesWithHover>
              ))}
            </tbody>
          </Table>
        </TableScroll>
      </InfoCard>
    </Wrapper>
  );
};

export default React.memo(PickQueue);
