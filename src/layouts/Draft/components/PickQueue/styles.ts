import styled, { css } from 'styled-components';

import {
  text14Mixin,
  radius10Mixin,
  radius6Mixin,
  hideScrollbar,
} from 'styles/mixins';
import { colors } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { rem } from 'utils/markup';
import { TableLineValues } from 'components/tables';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0 0;
`;

export const TableScroll = styled.div`
  overflow-y: scroll;
  height: ${rem(304)};

  ${hideScrollbar};
`;

export const AutoPick = styled.div`
  position: absolute;
  top: ${rem(16)};
  right: ${rem(15)};
  color: ${colors.grayPanel};
  display: flex;
  align-items: center;
  user-select: none;

  ${text14Mixin};
`;

const TOGGLE_HEIGHT = 21;
const TOGGLE_PADDING = 2;

export const Toggle = styled.div<{ $active: boolean }>`
  margin: 0 0 0 ${rem(10)};
  width: ${rem(TOGGLE_HEIGHT * 2)};
  height: ${rem(TOGGLE_HEIGHT)};
  background: ${(props) => (props.$active ? colors.red : colors.grayPanel)};
  position: relative;
  transition: ${transitions.hover};
  cursor: pointer;

  ${radius10Mixin};

  &:before {
    content: '';
    position: absolute;
    top: ${rem(TOGGLE_PADDING)};
    left: ${(props) =>
      props.$active
        ? `calc(100% - ${rem(TOGGLE_HEIGHT)})`
        : `${rem(TOGGLE_PADDING)}`};
    width: ${rem(TOGGLE_HEIGHT - TOGGLE_PADDING * 2)};
    height: ${rem(TOGGLE_HEIGHT - TOGGLE_PADDING * 2)};
    background: ${colors.white};
    border-radius: 50%;
    transition: ${transitions.hover};
  }
`;

const orderButtonBottomMixin = css`
  margin: ${rem(4)} 0 0;

  svg {
    transform: rotate(180deg);
  }
`;

export const OrderButton = styled.div<{ bottom?: boolean }>`
  background: ${colors.blackContent};
  width: ${rem(34)};
  height: ${rem(29.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  ${radius6Mixin};

  svg {
    width: ${rem(10)};
    height: ${rem(6)};
  }

  ${(props) => props.bottom && orderButtonBottomMixin}
`;

export const OrderButtonsWrapper = styled.div`
  padding: 0 ${rem(4)};
`;

export const RemoveButton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${rem(5)};
  margin: auto;
  background: ${colors.red};
  width: ${rem(24)};
  height: ${rem(53)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  user-select: none;
  transition: ${transitions.opacity};

  ${radius6Mixin};

  svg {
    width: ${rem(10)};
    height: ${rem(11)};
  }
`;

export const TableLineValuesWithHover = styled(TableLineValues)`
  user-select: none;

  &:hover {
    ${RemoveButton} {
      opacity: 1;
      user-select: all;
    }
  }
`;
