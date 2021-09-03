import * as React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import Card from 'components/Card';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { FlexColumn, HalfCardHeader, SpinnerIcon } from 'components/ui';
import { QuatersEnum, DraftBoardType } from 'typings/drafts';

import { quatersButtons } from './config';
import {
  Wrapper,
  Board,
  LineNumber,
  PlayerCell,
  LineLabel,
  PlayerLabel,
  ScrollInner,
  ButtonWrapper,
  QuatersButtons,
  SpinnerWrapper,
} from './styles';

type Props = {
  handleQuater: (quater: QuatersEnum) => void;
  draftBoard: DraftBoardType;
  quater: QuatersEnum;
  toggleDraftBoard: boolean;
  handleToggleDraftBoard: () => void;
  draftBoardRef: React.RefObject<HTMLDivElement>;
  withShare?: boolean;
  draftBoardLoading?: boolean;
};

const DraftBoard: React.FC<Props> = ({
  handleQuater,
  draftBoard,
  quater,
  toggleDraftBoard,
  handleToggleDraftBoard,
  draftBoardRef,
  withShare,
  draftBoardLoading,
}: Props) => {
  return (
    <Wrapper ref={draftBoardRef}>
      <ButtonWrapper>
        {withShare && toggleDraftBoard && (
          <Button blurred withArrow={false} href={routes.notImplemented}>
            <Emoji emoji={EmojiEnum.link} /> Share
          </Button>
        )}
        {toggleDraftBoard && (
          <>
            {draftBoardLoading && (
              <SpinnerWrapper>
                <SpinnerIcon />
              </SpinnerWrapper>
            )}
            <QuatersButtons>
              {Object.keys(quatersButtons).map((quaterKey) => (
                <Button
                  inline
                  blurred
                  smallBlurred
                  blurredActive={quater === quaterKey}
                  withArrow={false}
                  key={quaterKey}
                  onClick={() => handleQuater(quaterKey as QuatersEnum)}
                >
                  {quatersButtons[quaterKey]}
                </Button>
              ))}
            </QuatersButtons>
          </>
        )}
        <Button
          blurred
          withArrow
          rotateBottom
          toggle={toggleDraftBoard}
          onClick={handleToggleDraftBoard}
        >
          {toggleDraftBoard ? 'Hide' : 'Show'}
        </Button>
      </ButtonWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>Draft Board</HalfCardHeader>
        <Board toggle={toggleDraftBoard}>
          <ScrollContainer horizontal className="scroll-container">
            <ScrollInner>
              <FlexColumn>
                <LineLabel>Rd</LineLabel>
                {new Array(draftBoard.rounds).fill(null).map((_, i) => (
                  <LineNumber key={i}>{i + 1}</LineNumber>
                ))}
              </FlexColumn>
              {draftBoard.teams.map((team, i) => (
                <FlexColumn key={i}>
                  <PlayerLabel>{team.name}</PlayerLabel>
                  {team.players.map((player, j) => (
                    <PlayerCell key={j} color={player.color}>
                      {player.name}
                    </PlayerCell>
                  ))}
                </FlexColumn>
              ))}
            </ScrollInner>
          </ScrollContainer>
        </Board>
      </Card>
    </Wrapper>
  );
};

export default React.memo(DraftBoard);
