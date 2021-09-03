import styled, { css, keyframes } from 'styled-components';

import { colors, transparency } from 'styles/colors';
import {
  text48Mixin,
  text46Mixin,
  text43Mixin,
  text32Mixin,
  text30Mixin,
  text18Mixin,
  text16Mixin,
  text14Mixin,
  text12Mixin,
  text11Mixin,
  radius99Mixin,
  radius24Mixin,
  absoluteTopLeftMixin,
} from 'styles/mixins';
import { containBg, urlContain, squareSides } from 'styles/templates';
import { transitions } from 'styles/transitions';
import { rem } from 'utils/markup';
import markImg from 'images/icons/mark.svg';

export const CardName = styled.div`
  color: ${colors.white};
  font-weight: 400;

  ${text46Mixin};
`;

export const CardMessage = styled.div<{ width?: number }>`
  margin: ${rem(8)} 0 0 0;
  color: ${colors.whiteTransparent(transparency.border)};
  width: 100%;

  ${text16Mixin};
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(46)} 0 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ExternalLink = styled.a`
  text-decoration: underline;
`;

export const MarkIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: ${rem(150)};
  height: ${rem(200)};

  ${containBg(markImg)};
`;

export const HalfColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const actionTabButtonMixin = css`
  background: ${colors.red};
  transition: ${transitions.hover};
  cursor: pointer;

  &:hover {
    background: ${colors.lightRed};
  }
`;

const actionDisableTabButtonMixin = css`
  color: ${colors.grayPanel};
  background: ${colors.blackPanelDisable};
  pointer-events: none;
`;

export const TagButton = styled.div<{
  $action?: boolean;
  $disable?: boolean;
  $right?: boolean;
  $color?: string;
}>`
  background: ${(props) => (props.$color ? props.$color : colors.blackPanel)};
  color: ${colors.white};
  padding: ${rem(9)} ${rem(14)};
  margin: 0 ${rem(4)} 0 0;
  display: inline-block;

  ${(props) => props.$action && !props.$disable && actionTabButtonMixin};
  ${(props) => props.$action && props.$disable && actionDisableTabButtonMixin};
  ${(props) => props.$right && 'float: right'};

  ${radius99Mixin};
`;

const flexHalfCardMixin = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: normal;
  height: auto;
`;

export const HalfCard = styled.div<{
  withGap?: boolean;
  withMargin?: boolean;
  withFlex?: boolean;
  color?: string;
}>`
  width: ${(props) => (props.withGap ? `calc(50% - ${rem(3)})` : '50%')};
  height: 100%;
  padding: 0 0 ${rem(5)} 0;
  background: ${(props) => (props.color ? props.color : colors.blackPanel)};

  ${(props) => props.withMargin && `margin: ${rem(6)} 0 0`};
  ${(props) => props.withFlex && flexHalfCardMixin};

  ${radius24Mixin};
`;

export const HalfCardHeader = styled.div`
  color: ${colors.white};
  margin: ${rem(16)} 0 0 ${rem(20)};

  ${text32Mixin};
`;

const modalHalfCardTextMixin = css`
  color: ${colors.white};

  ${text12Mixin};
`;

export const HalfCardText = styled.div<{ modal?: boolean }>`
  color: ${colors.grayPanel};
  margin: ${rem(16)} 0 0;
  font-weight: 400;

  ${text14Mixin};

  ${(props) => props.modal && modalHalfCardTextMixin}
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexAlign = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InlineFlexAlign = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const FlexJustifyBetween = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const PageHeaderButtonDropdowns = styled.div`
  display: flex;
  padding: ${rem(10)};
`;

export const PageHeaderButtons = styled.div`
  position: absolute;
  right: ${rem(2)};
  bottom: ${rem(2)};
  display: flex;
  align-items: center;
`;

export const SecondaryTextColor = styled.span<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${(props) =>
    props.disabled ? colors.disabledBlueContent : colors.grayPanel};
`;

export const TransparentTextColor = styled.span`
  color: ${colors.whiteTransparent(transparency.border)};
`;

export const smallTeamLogo = css`
  ${squareSides(85)};
`;

export const TeamLogo = styled.div<{
  img?: string | null;
  small?: boolean;
}>`
  background: ${(props) =>
    props.img ? urlContain(props.img) : colors.purpleDark};
  color: ${colors.white};
  ${squareSides(156)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  margin: 0 ${rem(22)} 0 0;

  ${radius99Mixin};
  ${text48Mixin};

  ${(props) => props.small && smallTeamLogo}
`;

export const TeamLogoWrapper = styled.div`
  display: flex;
  margin: 0 0 ${rem(43)} 0;
  user-select: none;
  cursor: pointer;
`;

export const UploadInfo = styled.div`
  color: ${colors.whiteTransparent(transparency.border)};
  margin: 0 0 ${rem(24)} 0;

  ${text18Mixin};
`;

export const PortalWrapper = styled.div`
  ${absoluteTopLeftMixin};
  z-index: 9;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const PlayerName = styled.span`
  color: ${colors.white};

  ${text16Mixin};
`;

export const PlayerNameRoster = styled.span`
  color: ${colors.white};

  ${text16Mixin};
`;


export const PlayerLabel = styled.span`
  color: ${colors.grayPanel};
  margin: ${rem(2)} 0 0;

  ${text11Mixin};
`;

export const ModalTitle = styled.div`
  ${text30Mixin};

  color: ${colors.white};
  margin: 0 0 ${rem(36)} 0;
`;

const spinnerKeyframes = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled.div<{ altSpinner?: boolean }>`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-top: ${rem(2)} solid
    ${(props) =>
      props.altSpinner
        ? colors.blackTransparent(transparency.checkbox)
        : colors.whiteTransparent(transparency.checkbox)};
  border-right: ${rem(2)} solid
    ${(props) =>
      props.altSpinner
        ? colors.blackTransparent(transparency.checkbox)
        : colors.whiteTransparent(transparency.checkbox)};
  border-bottom: ${rem(2)} solid
    ${(props) =>
      props.altSpinner
        ? colors.blackTransparent(transparency.checkbox)
        : colors.whiteTransparent(transparency.checkbox)};
  border-left: ${rem(2)} solid
    ${(props) => (props.altSpinner ? colors.black : colors.white)};
  transform: translateZ(0);
  animation: ${spinnerKeyframes} 1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const CardWrapper = styled.div`
  margin-top: ${rem(6)};
`;

export const SearchQueryItem = styled.div`
  ${text16Mixin};
  color: ${colors.white};
  padding-top: ${rem(10)};
  cursor: pointer;

  &:first-child {
    border-bottom: ${rem(1)} solid ${colors.whiteTransparent(transparency.blur)};
    padding-bottom: ${rem(10)};
  }
`;

const absoluteHeaderButtonsMixin = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const HeaderButtons = styled.div<{
  flexEnd?: boolean;
  absolute?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  height: ${rem(52)};
  padding: ${rem(2)} ${rem(10)} ${rem(10)} 0;

  ${(props) => props.flexEnd && 'justify-content: flex-end'};
  ${(props) => props.absolute && absoluteHeaderButtonsMixin};
`;

export const TeamName = styled.div`
  margin-bottom: ${rem(9)};

  ${text43Mixin};
`;

export const UserName = styled.div`
  ${text16Mixin};
`;

export const InfoList = styled(FlexColumn)`
  padding: ${rem(21.5)} ${rem(20)};
  background: ${colors.blackContent};
  min-width: ${rem(255)};
  margin-bottom: ${rem(6)};

  ${radius24Mixin};
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${rem(4)};

  ${text16Mixin};
`;

const withArrowMixin = css`
  padding-right: ${rem(22.5)};
  cursor: pointer;
  transition: ${transitions.hover};

  &:hover {
    background: ${colors.blackContent};
  }
`;

export const InfoTagButton = styled(TagButton)<{ withArrow?: boolean }>`
  position: relative;

  ${text12Mixin};

  ${(props) => props.withArrow && withArrowMixin}
`;

export const TeamTableName = styled(PlayerName)`
  margin-left: ${rem(15)};
`;


export const TeamTableNameRoster = styled(PlayerNameRoster)`
  margin-left: ${rem(15)};
`;
