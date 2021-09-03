import * as React from 'react';

import { colors } from 'styles/colors';
import Card from 'components/Card';
import Button from 'components/Button';
import AvatarPic from 'components/AvatarPic';
import { HalfCardText, Flex, SecondaryTextColor } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
} from 'components/tables';
import ValueButton from 'components/lists/UserList/components/ValueButton';

import { PlayerCardProps } from './types';
import {
  Scroll,
  PlayerInfoWrapper,
  PlayerName,
  TeamName,
  PlayerAddintionalInfo,
  PlayerTags,
  StatsWrapper,
  ScrollCardModalInner,
  ScrollCardModalInnerTitle,
  Points,
  InfoText,
  ButtonsWrapper,
} from './styles';

const PlayerInfo: React.FC<PlayerCardProps> = ({
  modalPlayer,
  onClose,
  handleAddToPickQueue,
  handleRemoveFromPickQueue,
  pickQueue,
  draftDisabled = false,
}: PlayerCardProps) => {
  const handleAddPlayer = () => {
    if (!modalPlayer) {
      return;
    }
    handleAddToPickQueue(modalPlayer);
    onClose();
  };

  const handleRemovePlayer = () => {
    if (!modalPlayer) {
      return;
    }

    handleRemoveFromPickQueue(modalPlayer.id);
  };
  if (!modalPlayer) {
    return null;
  }
  return (
    <>
      <div>
        <Flex>
          <AvatarPic img={modalPlayer.pic} name={modalPlayer.name} big />
          <PlayerInfoWrapper>
            <PlayerName>{modalPlayer.name}</PlayerName>
            <TeamName>{modalPlayer.teamName}</TeamName>
            <PlayerAddintionalInfo>{modalPlayer.info}</PlayerAddintionalInfo>
            <PlayerTags>
              {modalPlayer.tags.map((tag, i) => (
                <ValueButton inline modal key={i}>
                  {tag}
                </ValueButton>
              ))}
            </PlayerTags>
          </PlayerInfoWrapper>
        </Flex>
        <Scroll>
          <Card fullWidth color={colors.darkPurple}>
            <ScrollCardModalInner>
              <ScrollCardModalInnerTitle>
                Outlook{' '}
                <SecondaryTextColor>
                  • {modalPlayer.description.title}
                </SecondaryTextColor>
              </ScrollCardModalInnerTitle>
              <Points>
                {modalPlayer.description.points.toFixed(1)} points
              </Points>
              <InfoText>
                {modalPlayer.description.text.split('\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </InfoText>
            </ScrollCardModalInner>
          </Card>
          <StatsWrapper>
            <Card fullWidth color={colors.darkPurple}>
              <ScrollCardModalInner>
                <ScrollCardModalInnerTitle>Stats</ScrollCardModalInnerTitle>
                <Table withPadding>
                  <thead>
                    <TableLineLabels>
                      {modalPlayer.statsValuesNames.map((valueName, i) => (
                        <TableCellLabel
                          key={'valueName_' + i}
                          withPaddingRight={i === 1}
                          modal
                        >
                          <HalfCardText modal>{valueName}</HalfCardText>
                        </TableCellLabel>
                      ))}
                    </TableLineLabels>
                  </thead>
                  <tbody>
                    {modalPlayer.stats.map((stats, i) => (
                      <TableLineValues key={'stats_' + i}>
                        {stats.map((value, j) => (
                          <TableCellValue
                            key={'value_' + j}
                            withPaddingRight={j === 1}
                            modal
                          >
                            <ValueButton modal>{value}</ValueButton>
                          </TableCellValue>
                        ))}
                      </TableLineValues>
                    ))}
                  </tbody>
                </Table>
              </ScrollCardModalInner>
            </Card>
          </StatsWrapper>
        </Scroll>
      </div>
      <ButtonsWrapper>
        {pickQueue.playersList.find(
          (player) => player.id === modalPlayer.id
        ) ? (
          <Button withMargin secondary onClick={handleRemovePlayer}>
            Remove from Queue
          </Button>
        ) : (
          <Button withMargin secondary onClick={handleAddPlayer}>
            Add to Queue
          </Button>
        )}

        <Button primary disabled={draftDisabled}>
          Draft Now
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default PlayerInfo;
