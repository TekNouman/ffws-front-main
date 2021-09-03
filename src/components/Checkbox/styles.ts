import styled from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { text14Mixin } from 'styles/mixins';
import { transitions } from 'styles/transitions';
import { squareSides } from 'styles/templates';
import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  margin: 0 0 ${rem(6)} 0;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label::before {
    background: ${colors.white};
    border-color: ${colors.checkboxBorderActive};
  }
`;

export const Label = styled.label`
  user-select: none;
  color: ${colors.white};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;

  ${text14Mixin};

  &:before {
    content: '';
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    ${squareSides(14)};
    border: ${rem(1)} solid ${colors.whiteTransparent(transparency.checkbox)};
    border-radius: 50%;
    margin: 0 ${rem(16)} 0 0;
    box-sizing: border-box;
    cursor: pointer;
    transition: ${transitions.checkbox};
  }
`;
