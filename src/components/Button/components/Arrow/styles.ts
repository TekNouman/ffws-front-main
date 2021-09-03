import styled, { css } from 'styled-components';

import { rem } from 'utils/markup';
import { transitions } from 'styles/transitions';

const reverseMixin = css`
  transform: scaleX(-1);
  right: unset;
  left: ${rem(24)};
`;

const rotateBottomArrowMixin = css`
  transform: rotate(90deg);
`;

const rotateTopArrowMixin = css`
  transform: rotate(-90deg);
`;

const smallMixin = css`
  right: ${rem(12.5)};
  width: ${rem(4)};
  height: ${rem(8)};
`;

export const Wrapper = styled.div<{
  rotateBottom: boolean;
  rotateTop: boolean;
  reverse: boolean;
  small: boolean;
}>`
  width: ${rem(6)};
  height: ${rem(10)};
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${rem(24)};
  margin: auto;

  svg {
    position: absolute;
    transition: ${transitions.linear};
    transform: rotate(0);

    ${(props) => props.rotateBottom && rotateBottomArrowMixin};
    ${(props) => props.rotateTop && rotateTopArrowMixin};
  }

  ${(props) => props.reverse && reverseMixin};
  ${(props) => props.small && smallMixin};
`;
