import styled, { css } from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import {
  text18Mixin,
  text16Mixin,
  text14Mixin,
  radius6Mixin,
} from 'styles/mixins';
import { transitions } from 'styles/transitions';
import {
  HalfCard,
  HalfCardText,
  FlexAlign,
  FlexColumn,
  FlexJustifyBetween,
} from 'components/ui';

export const Top = styled.div`
  position: relative;
`;

export const WeeksButtons = styled.div`
  display: flex;
`;

export const TeamInfoCard = styled(HalfCard)`
  padding: ${rem(24)} ${rem(15)};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  background: ${colors.blackPanel};
`;

export const LastWaiversCard = styled(HalfCard)`
  position: relative;
  background: ${colors.blackContent};
  color: ${colors.white};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WaiversEditButton = styled.div`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};
`;

export const WaiversColumn = styled(FlexColumn)`
  width: calc(50% - ${rem(3)});
  padding: 0 ${rem(5)} ${rem(5)};
`;

export const WaiversLabel = styled(HalfCardText)`
  padding-left: ${rem(15)};
`;

const leftRadiusMixin = css`
  border-radius: ${rem(6)} ${rem(6)} ${rem(6)} ${rem(24)};
`;

const rightRadiusMixin = css`
  border-radius: ${rem(6)} ${rem(6)} ${rem(24)} ${rem(6)};
`;

export const WaiversCellWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const WaiversCell = styled.div<{
  leftRadius?: boolean;
  rightRadius?: boolean;
}>`
  width: 100%;
  margin-top: ${rem(12)};
  padding: ${rem(5)};
  background: ${colors.blackPanel};
  display: flex;
  height: ${rem(63)};
  color: ${colors.white};
  border-radius: ${rem(6)};

  ${text16Mixin};

  ${(props) => props.leftRadius && leftRadiusMixin}
  ${(props) => props.rightRadius && rightRadiusMixin}
`;

export const WaiversPlayer = styled(FlexAlign)`
  margin-left: ${rem(15)};
  width: 100%;
`;

export const WaiversPrice = styled.div<{ leftRadius?: boolean }>`
  background: ${colors.blackContent};
  padding: ${rem(16.5)} ${rem(12.5)};
  border-radius: ${rem(6)};

  ${(props) => props.leftRadius && leftRadiusMixin}
`;

export const WaiversRemove = styled.div`
  margin-top: ${rem(12)};
  margin-left: ${rem(4)};
  background: ${colors.blackPanel};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(49)};
  user-select: none;
  cursor: pointer;
  transition: ${transitions.hover};

  ${radius6Mixin};

  &:hover {
    background: ${colors.darkRed};
  }
`;

export const CrossWrapper = styled.div`
  width: ${rem(10)};
  height: ${rem(10)};
  position: relative;
`;

export const RemainingDollars = styled.div`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(12)};
  color: ${colors.white};

  ${text14Mixin};
`;

export const RemainingDollarsText = styled.span`
  margin-right: ${rem(18)};
`;

export const WaiversListsWrapper = styled(FlexJustifyBetween)`
  margin-top: ${rem(50)};
`;

export const WaiversListLabel = styled.div`
  color: ${colors.white};
  margin: ${rem(15)};

  ${text18Mixin};
`;

export const WaiversList = styled.div`
  padding: ${rem(15)};
`;

export const LeftSide = styled(FlexColumn)`
  width: 66vw;
`;

export const RightSide = styled(FlexColumn)`
  width: 66vw;
  margin-left: ${rem(6)};
`;

export const TablesScrollInner = styled.div`
  display: inline-flex;
  user-select: none;
`;

export const SearchButtonsWrapper = styled(FlexJustifyBetween)`
  padding: ${rem(6)};
`;
