import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { transitions } from 'styles/transitions';
import {
  radius16Mixin,
  text36Mixin,
  text18Mixin,
  text14Mixin,
} from 'styles/mixins';

const LINE_HEIGHT = rem(80);
const LINE_NUMBER_WIDTH = rem(80);
const PLAYER_WIDTH = rem(111.5);

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0;
  position: relative;
`;

export const Board = styled.div<{ toggle: boolean }>`
  display: flex;
  flex-direction: row;
  margin: ${rem(16)} 0 0;
  transition: ${transitions.linear};
  max-height: ${(props) => (props.toggle ? '5000px' : 0)};
  overflow: hidden;
`;

export const LineNumber = styled.div`
  height: ${LINE_HEIGHT};
  width: ${LINE_NUMBER_WIDTH};
  background: ${colors.blackContent};
  border: ${rem(4)} solid ${colors.blackPanel};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${radius16Mixin};
  ${text36Mixin};
`;

export const PlayerCell = styled.div<{ color: string }>`
  height: ${LINE_HEIGHT};
  width: ${PLAYER_WIDTH};
  background: ${(props) => props.color};
  border: ${rem(4)} solid ${colors.blackPanel};
  color: ${colors.white};
  padding: ${rem(24)} ${rem(11.5)} ${rem(10)} ${rem(10)};

  ${radius16Mixin};
  ${text18Mixin};
`;

export const ScrollInner = styled.div`
  display: flex;
  user-select: none;
  padding: ${rem(6)};
`;

export const LineLabel = styled.div`
  color: ${colors.grayPanel};
  text-align: center;
  padding-bottom: ${rem(12)};
  width: ${LINE_NUMBER_WIDTH};

  ${text14Mixin};
`;

export const PlayerLabel = styled(LineLabel)`
  width: ${PLAYER_WIDTH};
  padding-left: ${rem(10)};
  text-align: left;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: ${rem(16)};
  right: ${rem(16)};
  display: flex;
  height: ${rem(40)};
`;

export const QuatersButtons = styled.div`
  display: flex;
  margin: 0 ${rem(32)};
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  align-self: center;
  width: ${rem(20)};
  height: ${rem(20)};
`;
