import * as React from 'react';

import ClockValue from 'components/ClockValue';

import { ClockWrapper } from './styles';

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock: React.FC<Props> = ({ days, hours, minutes, seconds }: Props) => {
  return (
    <ClockWrapper>
      <ClockValue value={days} />:
      <ClockValue value={hours} />:
      <ClockValue value={minutes} />:
      <ClockValue value={seconds} />
    </ClockWrapper>
  );
};

export default Clock;
