import * as React from 'react';

import { mockDraftInfo } from 'config/mocks/mockDrafts';
import { routes } from 'config/routes';
import { colors } from 'styles/colors';
import { draftStartDate } from 'utils/dates';
import { HalfCard, SecondaryTextColor, InlineFlexAlign } from 'components/ui';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';

import { Wrapper, DraftInfo, ButtonsWrapper } from './styles';
import Clock from './Clock';
import DraftInfoList from './DraftInfoList';

const Info: React.FC = () => {
  return (
    <Wrapper>
      <HalfCard withGap color={colors.blackContent} withFlex>
        <DraftInfo>
          <InlineFlexAlign>
            <SecondaryTextColor>
              <Emoji emoji={EmojiEnum.hourglass} /> This Draft Starts:
            </SecondaryTextColor>
            &nbsp; {draftStartDate(mockDraftInfo.date)}
          </InlineFlexAlign>
        </DraftInfo>
        <Clock date={mockDraftInfo.date} />
      </HalfCard>
      <HalfCard withGap color={colors.blackContent}>
        <ButtonsWrapper>
          <Button reverse black href={routes.lobby}>
            Back to Lobby
          </Button>
          <Button redSecond href={routes.notImplemented}>
            Edit Pre-Draft Rankings
          </Button>
        </ButtonsWrapper>
        <DraftInfoList info={mockDraftInfo} />
      </HalfCard>
    </Wrapper>
  );
};

export default React.memo(Info);
