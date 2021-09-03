import styled from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { backgroundHover, squareSides } from 'styles/templates';
import { rem } from 'utils/markup';

export const Wrapper = styled.span`
  ${squareSides(40)};
  margin: 0 ${rem(15)} 0 0;
  display: inline-block;

  svg {
    border-radius: 50%;
    cursor: pointer;
    transition: ${transitions.hover};

    ${backgroundHover(
      colors.blackTransparent(transparency.hoverSecond),
      colors.blackTransparent(transparency.hover)
    )}
  }
`;
