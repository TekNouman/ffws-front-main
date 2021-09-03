import styled from 'styled-components';

import { rem } from 'utils/markup';
import {
  absoluteInnerMixin,
  absoluteAlignMixin,
  text32Mixin,
} from 'styles/mixins';
import { colors, transparency } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { colorHover } from 'styles/templates';

export const Wrapper = styled.div`
  width: 100%;
  height: ${rem(600)};
  margin: ${rem(6)} 0 0;
`;

export const TVOverlay = styled.div`
  ${absoluteInnerMixin};

  background: ${colors.blackTransparent(transparency.overlay)};
`;

export const PlayButton = styled.div`
  width: ${rem(46)};
  height: ${rem(66)};
  transition: ${transitions.hover};
  cursor: pointer;

  ${colorHover(colors.white, colors.whiteHover)};

  ${absoluteAlignMixin};
`;

export const TVName = styled.div`
  position: absolute;
  top: ${rem(16)};
  left: ${rem(20)};
  color: ${colors.white};
  text-transform: uppercase;

  ${text32Mixin};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: ${rem(15)};
  left: ${rem(15)};
`;
