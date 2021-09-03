import * as React from 'react';

import { SpinnerIcon } from 'components/ui';

import { Wrapper } from './styles';
import ArrowIcon from './icons/arrow.component.svg';

type Props = {
  rotateBottom: boolean;
  rotateTop: boolean;
  reverse: boolean;
  small?: boolean;
  isLoading?: boolean;
  altSpinner?: boolean;
};

const Arrow: React.FC<Props> = ({
  rotateBottom,
  rotateTop,
  reverse,
  small = false,
  isLoading = false,
  altSpinner = false,
}: Props) => {
  if (isLoading) {
    return (
      <Wrapper
        rotateBottom={rotateBottom}
        rotateTop={rotateTop}
        reverse={reverse}
        small={small}
      >
        <SpinnerIcon altSpinner={altSpinner} />
      </Wrapper>
    );
  }
  return (
    <Wrapper
      rotateBottom={rotateBottom}
      rotateTop={rotateTop}
      reverse={reverse}
      small={small}
    >
      <ArrowIcon />
    </Wrapper>
  );
};

export default Arrow;
