import * as React from 'react';

import InfoCard from 'components/cards/InfoCard';
import { SecondaryTextColor } from 'components/ui';
import { PlayerType, PositionType } from 'typings/players';

import { rosterLimits, rosterPositionsCount } from './config';
import { Wrapper, SmallButton, LimitsWrapper } from './styles';

type Props = {
  rosterList: (PlayerType | PositionType)[];
};

const getLimitsCount = (rosterList: (PlayerType | PositionType)[]) => {
  const count = rosterPositionsCount;
  rosterList.forEach((item) => {
    if ((item as PlayerType).id && item.position) {
      count[item.position] = count[item.position] + 1;
    }
  });
  return count;
};

const RosterLimits: React.FC<Props> = ({ rosterList }: Props) => {
  const [positionsCount] = React.useState(() => getLimitsCount(rosterList));

  return (
    <Wrapper>
      <InfoCard
        title="Roster Limits"
        info={
          rosterList.filter((item) => (item as PlayerType).id).length + '/16'
        }
      >
        <LimitsWrapper>
          {Object.keys(rosterLimits).map((key) => {
            return (
              <SmallButton key={key}>
                {key}&nbsp;
                <SecondaryTextColor suppressHydrationWarning>
                  • {positionsCount[key]}/{rosterLimits[key]}
                </SecondaryTextColor>
              </SmallButton>
            );
          })}
        </LimitsWrapper>
      </InfoCard>
    </Wrapper>
  );
};

export default RosterLimits;
