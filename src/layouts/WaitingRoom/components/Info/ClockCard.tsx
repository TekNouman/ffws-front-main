import * as React from 'react';

import { colors } from 'styles/colors';
import Card from 'components/Card';
import ClockValue from 'components/ClockValue';

import { ClockCardWrapper, ClockCardInner, ClockLabel } from './styles';

type Props = {
  value: number;
  label: string;
};

const ClockCard: React.FC<Props> = ({ value, label }: Props) => {
  return (
    <ClockCardWrapper>
      <Card color={colors.blackPanel} fullHeight fullWidth>
        <ClockCardInner>
          <ClockValue value={value} />
          <ClockLabel>{label}</ClockLabel>
        </ClockCardInner>
      </Card>
    </ClockCardWrapper>
  );
};

export default ClockCard;
