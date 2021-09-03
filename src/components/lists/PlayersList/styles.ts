import styled from 'styled-components';

import { rem } from 'utils/markup';
import { hideScrollbar, radius6Mixin } from 'styles/mixins';
import { colors } from 'styles/colors';
import { transitions } from 'styles/transitions';

export const TableScroll = styled.div`
  overflow-y: scroll;
  max-height: ${rem(750)};

  ${hideScrollbar};
`;

export const PlayerAddRemove = styled.div`
  background: ${colors.blackPanel};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(49)};
  height: ${rem(63)};
  user-select: none;
  cursor: pointer;
  transition: ${transitions.hover};
  margin: 0;

  ${radius6Mixin};

  &:hover {
    background: ${colors.darkRed};
  }
`;

export const PlayerAddRemoveWrapper = styled.div`
  width: ${rem(10)};
  height: ${rem(10)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
