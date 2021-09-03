import styled from 'styled-components';

import { colors } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { squareSides } from 'styles/templates';
import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  height: 100%;
  padding: ${rem(5)};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Close = styled.div`
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
`;
