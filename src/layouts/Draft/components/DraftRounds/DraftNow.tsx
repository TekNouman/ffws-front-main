import * as React from 'react';

import Card from 'components/Card';
import { colors } from 'styles/colors';
import { mockDraftStarts } from 'config/mocks/mockDrafts';
import { useDateTimer } from 'utils/dates';
import ClockValue from 'components/ClockValue';

import {
  DraftNowWrapper,
  RoundWrapper,
  RoundInner,
  CurrentPickWrapper,
  CurrentPickInner,
  RoundLabel,
  RoundTime,
  TeamLogo,
  PickLabel,
  TeamName,
  TeamFlex,
} from './styles';

const DraftNow: React.FC = () => {
  const { seconds, minutes, start } = useDateTimer(mockDraftStarts.date);
  React.useEffect(() => {
    start();
  }, []);
  return (
    <DraftNowWrapper>
      <RoundWrapper>
        <Card color={colors.blackContent} fullHeight fullWidth>
          <RoundInner>
            <RoundLabel>RND {mockDraftStarts.round}</RoundLabel>
            <RoundTime>
              <ClockValue value={minutes} />:
              <ClockValue value={seconds} />
            </RoundTime>
          </RoundInner>
        </Card>
      </RoundWrapper>
      <CurrentPickWrapper>
        <Card color={colors.darkRed} fullHeight fullWidth>
          <CurrentPickInner>
            <TeamLogo img={mockDraftStarts.team.logo || ''}>
              {mockDraftStarts.team.logo ? '' : mockDraftStarts.team.name[0]}
            </TeamLogo>
            <TeamFlex>
              <PickLabel>On the clock: Pick {mockDraftStarts.step}</PickLabel>
              <TeamName>{mockDraftStarts.team.name}</TeamName>
            </TeamFlex>
          </CurrentPickInner>
        </Card>
      </CurrentPickWrapper>
    </DraftNowWrapper>
  );
};

export default DraftNow;
