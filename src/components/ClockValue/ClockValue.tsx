import * as React from 'react';

import { Wrapper } from './styles';

type Props = {
  value: number;
};

const ClockValue: React.FC<Props> = ({ value }: Props) => {
  return (
    <Wrapper suppressHydrationWarning>
      {value < 0 ? 0 : value < 10 ? `0${value}` : value}
    </Wrapper>
  );
};

export default ClockValue;
