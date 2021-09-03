import styled, { css } from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { transitions } from 'styles/transitions';
import {
  fixedScreenMixin,
  absoluteAlignMixin,
  text43Mixin,
} from 'styles/mixins';
import { rem } from 'utils/markup';

const visibleMixin = css`
  opacity: 1;
  pointer-events: all;
  transition: ${transitions.opacityOut};
`;

export const Wrapper = styled.div<{ visible: boolean }>`
  ${fixedScreenMixin};

  background: red;
  z-index: 3;
  background: ${colors.blackTransparent(transparency.half)};
  opacity: 0;
  pointer-events: none;
  transition: ${transitions.opacity};

  ${(props) => props.visible && visibleMixin};
`;

export const CardModal = styled.div`
  ${absoluteAlignMixin};

  width: ${rem(712)};
  height: ${rem(543)};
`;

export const TeamName = styled.div`
  ${text43Mixin};

  color: ${colors.white};
  margin: ${rem(25)} 0 ${rem(12)} 0;
`;

export const ButtonWrapper = styled.div`
  margin: ${rem(80)} 0 0;
`;
