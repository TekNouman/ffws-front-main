import * as React from 'react';

import { colors } from 'styles/colors';
import { CardProps } from 'typings/cards';

import { Wrapper } from './styles';

const Card: React.FC<CardProps> = ({
  children,
  withPadding = false,
  small = false,
  withOverflow = false,
  fullWidth = false,
  fullHeight = true,
  absolute = false,
  background,
  color = colors.purple,
}: CardProps) => (
  <Wrapper
    withPadding={withPadding}
    small={small}
    withOverflow={withOverflow}
    fullWidth={fullWidth}
    fullHeight={fullHeight}
    absolute={absolute}
    $color={color}
    $background={background}
  >
    {children}
  </Wrapper>
);

export default Card;
