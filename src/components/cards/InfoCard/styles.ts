import styled from 'styled-components';

import { colors } from 'styles/colors';
import { text18Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const Title = styled.div<{ withMargin?: boolean }>`
  color: ${colors.white};
  ${(props) => props.withMargin && `margin: ${rem(15)} 0 0 ${rem(15)};`}

  ${text18Mixin};
`;
