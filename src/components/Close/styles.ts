import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { squareSides } from 'styles/templates';
import { rem } from 'utils/markup';

const modalMixin = css`
  top: 0;
  bottom: 0;
  margin: auto;
  ${squareSides(30)};
`;

export const Wrapper = styled.div<{ modal: boolean }>`
  ${squareSides(41)};
  position: absolute;
  z-index: 99;
  top: ${rem(15)};
  right: ${rem(15)};
  cursor: pointer;

  & svg rect {
    transition: ${transitions.opacity};
    color: ${colors.white};
    opacity: 0.08;
  }

  &:hover svg rect {
    opacity: 0.3;
  }

  ${(props) => props.modal && modalMixin}
`;
