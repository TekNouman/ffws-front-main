import styled, { css } from 'styled-components';

import { rem } from 'utils/markup';
import {
  text11Mixin,
  text14Mixin,
  text16Mixin,
  text32Mixin,
  text43Mixin,
  radius20Mixin,
} from 'styles/mixins';
import { colors } from 'styles/colors';
import { urlContain } from 'styles/templates';

export const Wrapper = styled.div``;

export const ScrollInner = styled.div`
  display: flex;
  user-select: none;
  padding: ${rem(6)};
`;

const redMixin = css`
  background: ${colors.darkRed};
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const DraftInfoWrapper = styled.div<{ red?: boolean }>`
  ${text16Mixin};
  color: ${colors.white};
  padding: ${rem(9)} ${rem(20)};
  text-align: center;
  white-space: nowrap;

  ${(props) => props.red && redMixin}
`;

export const ClockWrapper = styled.div`
  ${text43Mixin};
  color: ${colors.grayPanel};
  display: flex;
  justify-content: center;
`;

export const PickRoundSeparator = styled.div`
  padding: ${rem(13.5)} ${rem(39)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PickCardWrapper = styled.div`
  height: 100%;
  color: ${colors.white};
  margin-left: ${rem(6)};
`;

export const PickCardInner = styled.div`
  height: 100%;
  display: flex;
`;

export const Positions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${rem(1)};
`;

export const PositionValueWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(4)} ${rem(9)} ${rem(4)} ${rem(3)};
`;

export const PositionLabel = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  text-transform: uppercase;
  text-align: center;
  padding: ${rem(1.12)} ${rem(6.5)};
  min-width: ${rem(30)};
  ${radius20Mixin};
`;

export const PositionValueNumber = styled.div`
  ${text11Mixin};
  margin-left: ${rem(5)};
`;

export const PickCardLabel = styled.div`
  ${text16Mixin};
  color: ${colors.grayPanel};
  margin-bottom: ${rem(6)};
  white-space: nowrap;
`;

export const PickTeamName = styled.div`
  ${text14Mixin};
  margin-top: ${rem(6)};
  white-space: nowrap;
`;

export const PickTeam = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${rem(10)} ${rem(23)};
  text-align: center;
`;

export const RoundValue = styled.div`
  ${text32Mixin};
  color: ${colors.white};
  text-align: center;
`;

export const DraftNowWrapper = styled.div`
  display: flex;
`;

export const RoundWrapper = styled.div`
  height: 100%;
`;

export const RoundInner = styled.div`
  padding: 0 ${rem(37)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${rem(200)};
`;

export const CurrentPickWrapper = styled.div`
  height: 100%;
  margin: 0 0 0 ${rem(6)};
`;

export const CurrentPickInner = styled.div`
  padding: ${rem(12)} ${rem(30)} ${rem(15)} ${rem(14)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${colors.white};
`;

export const RoundLabel = styled.span`
  color: ${colors.grayPanel};
  text-align: center;
  padding: ${rem(9)} 0 0 0;

  ${text16Mixin};
`;

export const RoundTime = styled.span`
  color: ${colors.white};
  text-align: center;
  padding: 0 0 ${rem(9)} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${text43Mixin};
`;

export const TeamLogo = styled.div<{ img?: string }>`
  background: ${(props) =>
    props.img ? urlContain(props.img) : colors.purpleDark};
  width: ${rem(82)};
  height: ${rem(63)};
  ${text43Mixin};
`;

export const PickLabel = styled.div`
  white-space: nowrap;
  text-align: left;

  ${text16Mixin};
`;

export const TeamName = styled.div`
  text-align: left;

  ${text32Mixin};
`;

export const TeamFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: baseline;
`;
