import * as React from 'react';

import { SpinnerIcon } from 'components/ui';

import PlusIcon from './icons/plus.component.svg';
import MinusIcon from './icons/minus.component.svg';
import { Wrapper } from './styles';

type Props = {
  minus?: boolean;
  isLoading?: boolean;
};

const PlusMinus: React.FC<Props> = ({
  minus = false,
  isLoading = false,
}: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <SpinnerIcon />
      </Wrapper>
    );
  }
  return <Wrapper>{minus ? <MinusIcon /> : <PlusIcon />}</Wrapper>;
};

export default PlusMinus;
