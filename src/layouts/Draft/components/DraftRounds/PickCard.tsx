import * as React from 'react';

import { PickType } from 'typings/picks';
import { colors } from 'styles/colors';
import Card from 'components/Card';
import AvatarPic from 'components/AvatarPic';

import PositionValue from './PositionValue';
import {
  PickCardWrapper,
  PickCardInner,
  Positions,
  PickCardLabel,
  PickTeamName,
  PickTeam,
} from './styles';
import { positionValues } from './config';

type Props = {
  pick: PickType;
};

const PickCard: React.FC<Props> = ({ pick }: Props) => {
  if (!pick.team.positions) {
    return null;
  }

  return (
    <PickCardWrapper>
      <PickCardInner>
        <Card fullWidth fullHeight color={colors.blackContent}>
          <PickTeam>
            <PickCardLabel>Pick&nbsp;{pick.step}</PickCardLabel>
            <AvatarPic
              img={pick.team.logo}
              name={pick.team.name}
              withMargin={false}
              contain
            />
            <PickTeamName>{pick.team.name}</PickTeamName>
          </PickTeam>
        </Card>

        <Positions>
          {positionValues.map((item) => (
            <PositionValue
              key={item.position}
              label={item.position}
              value={pick.team.positions[item.position] || 0}
              background={item.background}
              color={item.color}
            />
          ))}
        </Positions>
      </PickCardInner>
    </PickCardWrapper>
  );
};

export default PickCard;
