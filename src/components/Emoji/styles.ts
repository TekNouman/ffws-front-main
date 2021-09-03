import styled from 'styled-components';

import { urlContain, squareSides } from 'styles/templates';
import { rem } from 'utils/markup';

import { emojisConfig, EmojiEnum } from './config';

export const Wrapper = styled.span<{ emoji: EmojiEnum }>`
  display: inline-block;
  background: ${(props) => urlContain(emojisConfig[props.emoji])};
  margin-right: ${rem(10)};
  ${squareSides(20)};
`;
