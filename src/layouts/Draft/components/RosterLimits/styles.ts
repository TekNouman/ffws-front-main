import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors, transparency } from 'styles/colors';
import { radius99Mixin } from 'styles/mixins';
import { blur } from 'styles/templates';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0 0;
`;

export const LimitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${rem(15)};
`;

export const SmallButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  width: ${rem(77)};
  height: ${rem(29)};
  background: ${colors.blackTransparent(transparency.hoverSecond)};
  border-radius: ${radius99Mixin};
  margin: ${rem(4)} ${rem(4)} 0 0;
  text-transform: uppercase;
  ${blur(60)};
`;
