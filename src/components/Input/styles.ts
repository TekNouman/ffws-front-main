import styled, { css } from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { text16Mixin } from 'styles/mixins';
import { transitions } from 'styles/transitions';
import { containBg, squareSides } from 'styles/templates';
import { rem } from 'utils/markup';
import errorImg from 'images/icons/error.svg';
import showImg from 'images/icons/show.svg';
import hideImg from 'images/icons/hide.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const errorLabelMixin = css`
  &:before {
    content: '';
    ${squareSides(10)};
    position: absolute;
    top: ${rem(50)};
    right: ${rem(20)};
    pointer-events: none;

    ${containBg(errorImg)}
  }
`;

export const StyledLabel = styled.label<{
  error: boolean;
}>`
  color: ${colors.whiteTransparent(transparency.border)};
  margin: 0 0 ${rem(10)} ${rem(18)};
  position: relative;

  ${text16Mixin};

  ${(props) => props.error && errorLabelMixin};
`;

const errorInputMixin = css`
  border: ${rem(1)} solid ${colors.error};
  border-radius: ${rem(8)};
`;

export const StyledInput = styled.input<{
  withMargin: boolean;
  error: boolean;
}>`
  font-family: 'Neue Haas Grotesk Text Pro', sans-serif;
  position: relative;
  background: transparent;
  border: ${rem(1)} solid ${colors.whiteTransparent(transparency.border)};
  border-radius: ${rem(8)};
  padding: ${rem(14)} ${rem(18)};
  margin: 0 ${(props) => (props.withMargin ? rem(8) : 0)} ${rem(18)} 0;
  color: ${colors.white};
  transition: ${transitions.linear};

  ${text16Mixin};

  ${(props) => props.error && errorInputMixin};
`;

export const ErrorWrapper = styled.span<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: ${(props) =>
    props.visible ? transitions.opacity : transitions.opacityOut};
`;

export const ErrorMessage = styled.span`
  color: ${colors.error};
`;

export const PasswordVisibleToggle = styled.div`
  ${squareSides(21.15)};
  position: absolute;
  z-index: 1;
  top: ${rem(45)};
  right: ${rem(20)};
  cursor: pointer;
`;

export const Icon = styled.div<{ visible: boolean }>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: ${transitions.opacity};

  opacity: ${(props) => (props.visible ? 0 : 1)};
`;

export const Show = styled(Icon)`
  background-image: url(${showImg});
`;

export const Hide = styled(Icon)`
  background-image: url(${hideImg});
`;
