import styled, { css } from 'styled-components';

import { colors, transparency } from 'styles/colors';
import {
  text16Mixin,
  blur26Mixin,
  radius99Mixin,
  text12Mixin,
} from 'styles/mixins';
import { backgroundHover } from 'styles/templates';
import { transitions } from 'styles/transitions';
import { rem } from 'utils/markup';

const primaryButtonMixin = css`
  color: ${colors.black};

  ${backgroundHover(colors.white, colors.whiteHover)};
`;

const secondaryButtonMixin = css`
  ${backgroundHover(colors.purpleDark, colors.purpleDarkHover)};
`;

const redButtonMixin = css`
  border: none;
  padding: ${rem(8)} ${rem(20)};

  ${radius99Mixin};

  ${backgroundHover(colors.red, colors.lightRed)};
`;

const redSecondButtonMixin = css`
  border: none;
  ${backgroundHover(colors.red, colors.lightRed)};
`;

const upperCaseMixin = css`
  text-transform: uppercase;
`;

const blackButtonMixin = css`
  border: none;
  padding: ${rem(7)} ${rem(8)};
  padding-right: ${rem(40)};
  display: flex;
  align-items: center;
  min-width: fit-content;
  margin: 0;

  ${radius99Mixin};

  ${backgroundHover(colors.blackContent, colors.blackPanel)};
`;

const blurredButtonMixin = css`
  border: none;
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0 ${rem(40)} 0 ${rem(20)};
  line-height: ${rem(50)};
  display: flex;
  align-items: center;

  ${blur26Mixin};
  ${radius99Mixin};

  ${backgroundHover(
    colors.whiteTransparent(transparency.hoverSecond),
    colors.whiteTransparent(transparency.hover)
  )};
`;

const blackBlurredButtonMixin = css`
  ${blurredButtonMixin};

  ${backgroundHover(
    colors.blackTransparent(transparency.hoverSecond),
    colors.blackTransparent(transparency.hover)
  )};
`;

const toggleButtonMixin = css`
  ${backgroundHover(colors.white, colors.whiteHover)};
  color: ${colors.black};
  z-index: 2;
`;

const reverseButtonMix = css`
  display: flex;
  flex-direction: row-reverse;
`;

const simpleButtonMix = css`
  text-align: center;
  padding: ${rem(6)} ${rem(22)};
  color: ${colors.black};
  ${backgroundHover(colors.white, colors.whiteHover)};
  width: fit-content;

  ${radius99Mixin};
`;

const smallButtonMix = css`
  padding: ${rem(9)} ${rem(11)} ${rem(9)} ${rem(18)};

  ${text12Mixin};
`;

const inlineButtonMix = css`
  display: inline-block;
  width: auto;
  text-transform: none;
  margin: 0 0 0 ${rem(15)};
  vertical-align: bottom;
`;

const disabledButtonMix = css`
  background: ${colors.disabledBlue};
  color: ${colors.disabledBlueContent};
  pointer-events: none;
`;

const withMarginMixin = css`
  margin: 0 ${rem(8)} ${rem(8)} 0;
`;

const blurredActiveMixin = css`
  background: ${colors.white};
  color: ${colors.black};
  pointer-events: none;
`;

const smallBlurredMixin = css`
  padding: ${rem(10)} ${rem(22)};
  display: flex;
  align-items: center;
`;

const listedMixin = css`
  ${radius99Mixin};
  ${text12Mixin};
  white-space: nowrap;
  margin: 0;
  height: ${rem(33)};
  align-items: center;
  display: inline-flex;
  width: auto;
  margin-left: ${rem(8)};
  padding-right: ${rem(50)};
`;

export const Wrapper = styled.div<{
  withMargin?: boolean;
  withDropdown?: boolean;
  primary?: boolean;
  secondary?: boolean;
  blurred?: boolean;
  blackBlurred?: boolean;
  red?: boolean;
  redSecond?: boolean;
  black?: boolean;
  toggle?: boolean;
  reverse?: boolean;
  simple?: boolean;
  small?: boolean;
  inline?: boolean;
  disabled?: boolean;
  blurredActive?: boolean;
  smallBlurred?: boolean;
  upperCase?: boolean;
  listed?: boolean;
}>`
  border-radius: ${rem(16)};
  color: ${colors.white};
  padding: ${rem(16)} ${rem(22)};
  margin: 0 0 ${rem(8)} 0;
  border: ${(props) =>
    !props.primary && !props.secondary
      ? `${rem(1)} solid ${colors.whiteTransparent(transparency.border)}`
      : 'none'};
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 0;
  user-select: none;
  transition: ${transitions.hover};

  ${text16Mixin};
  line-height: ${rem(24)};

  &:hover {
    background: ${colors.whiteTransparent(transparency.hoverSecond)};
  }

  ${(props) => props.primary && primaryButtonMixin}
  ${(props) => props.secondary && secondaryButtonMixin}
  ${(props) => props.red && redButtonMixin}
  ${(props) => props.redSecond && redSecondButtonMixin}
  ${(props) => props.black && blackButtonMixin}
  ${(props) => props.blurred && blurredButtonMixin}
  ${(props) => props.blackBlurred && blackBlurredButtonMixin}
  ${(props) => props.toggle && toggleButtonMixin}
  ${(props) => props.reverse && reverseButtonMix}
  ${(props) => props.simple && simpleButtonMix}
  ${(props) => props.small && smallButtonMix}
  ${(props) => props.inline && inlineButtonMix}
  ${(props) => props.disabled && disabledButtonMix}
  ${(props) => props.withMargin && withMarginMixin}
  ${(props) => props.blurredActive && blurredActiveMixin}
  ${(props) => props.smallBlurred && smallBlurredMixin}
  ${(props) => props.upperCase && upperCaseMixin}
  ${(props) => props.listed && listedMixin}
`;
