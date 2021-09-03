import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { text16Mixin, hideScrollbar } from 'styles/mixins';
import { transitions } from 'styles/transitions';

export const RosterBenchListWrapper = styled.div``;

export const TableScroll = styled.div<{ remove: boolean }>`
  overflow-y: scroll;
  max-height: ${(props) => rem(props.remove ? 450 : 700)};
  position: relative;

  ${hideScrollbar};
`;

export const PlayerButtonsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  height: ${rem(33)};
  width: ${rem(280)};
  float: right;
`;

export const SwapPlayer = styled.div`
  white-space: nowrap;
  color: ${colors.white};
  cursor: pointer;
  margin-bottom: ${rem(14)};
  transition: ${transitions.hover};

  ${text16Mixin};

  &:hover {
    color: ${colors.whiteHover};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
