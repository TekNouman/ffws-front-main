import * as React from 'react';

import { mockDraftInfo } from 'config/mocks/mockDrafts';
import { SecondaryTextColor, InlineFlexAlign } from 'components/ui';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { draftStartDate, useDateTimer } from 'utils/dates';
import { colors } from 'styles/colors';
import Card from 'components/Card';

import Clock from './Clock';
import { DraftInfoWrapper } from './styles';

const DraftInfo: React.FC = () => {
  const startDate = draftStartDate(mockDraftInfo.date);
  const { seconds, minutes, hours, days, start } = useDateTimer(
    mockDraftInfo.date
  );
  React.useEffect(() => {
    start();
  }, []);

  return (
    <div>
      <Card fullHeight fullWidth color={colors.blackContent}>
        <>
          {seconds === 0 && minutes === 0 && hours === 0 && days === 0 ? (
            <DraftInfoWrapper red>
              <InlineFlexAlign>
                <Emoji emoji={EmojiEnum.hourglass} /> The Draft will start
                <br />
                momentarily...
              </InlineFlexAlign>
            </DraftInfoWrapper>
          ) : (
            <DraftInfoWrapper>
              <InlineFlexAlign>
                <SecondaryTextColor>
                  <Emoji emoji={EmojiEnum.hourglass} /> Start:
                </SecondaryTextColor>
                &nbsp; {startDate}
              </InlineFlexAlign>
              <Clock
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                days={days}
              />
            </DraftInfoWrapper>
          )}
        </>
      </Card>
    </div>
  );
};

export default DraftInfo;
