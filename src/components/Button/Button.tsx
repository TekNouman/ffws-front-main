import * as React from 'react';
import Link from 'next/link';

import { noop } from 'utils/noop';

import Arrow from './components/Arrow';
import PlusMinus from './components/PlusMinus';
import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  withMargin?: boolean;
  withArrow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  red?: boolean;
  redSecond?: boolean;
  black?: boolean;
  blurred?: boolean;
  blackBlurred?: boolean;
  rotateBottom?: boolean;
  toggle?: boolean;
  reverse?: boolean;
  simple?: boolean;
  small?: boolean;
  inline?: boolean;
  disabled?: boolean;
  blurredActive?: boolean;
  smallBlurred?: boolean;
  upperCase?: boolean;
  listed?: boolean;
  withPlusMinus?: boolean;
  minus?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick = noop,
  href,
  withMargin = false,
  withArrow = true,
  primary = false,
  secondary = false,
  red = false,
  redSecond = false,
  black = false,
  blurred = false,
  blackBlurred = false,
  rotateBottom = false,
  toggle = false,
  reverse = false,
  simple = false,
  small = false,
  inline = false,
  disabled = false,
  blurredActive = false,
  smallBlurred = false,
  upperCase = false,
  listed = false,
  withPlusMinus = false,
  minus = false,
  isLoading = false,
}: Props) => {
  const props = {
    withMargin,
    primary,
    secondary,
    blurred,
    blackBlurred,
    red,
    redSecond,
    black,
    reverse,
    simple,
    small,
    inline,
    disabled,
    blurredActive,
    smallBlurred,
    upperCase,
    listed,
  };

  const arrowProps = {
    rotateBottom,
    rotateTop: toggle,
    reverse,
    isLoading,
    altSpinner: primary,
  };

  const plusMinuxProps = {
    minus,
    isLoading,
  };

  if (href) {
    return (
      <Link href={href}>
        <Wrapper {...props}>
          {children}
          {withArrow && <Arrow {...arrowProps} />}
          {withPlusMinus && <PlusMinus {...plusMinuxProps} />}
        </Wrapper>
      </Link>
    );
  }
  return (
    <Wrapper {...props} onClick={onClick} toggle={toggle}>
      {children}
      {withArrow && <Arrow {...arrowProps} />}
      {withPlusMinus && <PlusMinus {...plusMinuxProps} />}
    </Wrapper>
  );
};

export default Button;
