import * as React from 'react';

import { Wrapper, Value } from './styles';

type Props = {
  children: React.ReactNode;
  flexStart?: boolean;
  flexEnd?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  modal?: boolean;
  inline?: boolean;
};

const ValueButton: React.FC<Props> = ({
  children,
  flexStart = false,
  flexEnd = false,
  disabled = false,
  uppercase = false,
  modal = false,
  inline = false,
}: Props) => {
  return (
    <Wrapper flexStart={flexStart} flexEnd={flexEnd} inline={inline}>
      <Value disableSecond={disabled} uppercase={uppercase} modal={modal}>
        {children}
      </Value>
    </Wrapper>
  );
};

export default ValueButton;
