import * as React from 'react';

import { useDateTimer } from 'utils/dates';

import { ClockWrapper } from './styles';
import ClockCard from './ClockCard';

type Props = {
  date: string;
};

const Clock: React.FC<Props> = ({ date }: Props) => {
  const { seconds, minutes, hours, days, start } = useDateTimer(date);

  React.useEffect(() => {
    start();
  }, []);

  return (
    <ClockWrapper>
      <ClockCard value={days} label="Days" />
      <ClockCard value={hours} label="Hours" />
      <ClockCard value={minutes} label="Minutes" />
      <ClockCard value={seconds} label="Seconds" />
    </ClockWrapper>
  );
};

export default React.memo(Clock);
