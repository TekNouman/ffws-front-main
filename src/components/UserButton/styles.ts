import styled from 'styled-components';

import { colors } from 'styles/colors';
import { text16Mixin, hoverUnderlineMixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const InnerLink = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  display: block;
  margin: 0 0 ${rem(14)} 0;
  cursor: pointer;

  ${text16Mixin}

  ${hoverUnderlineMixin}
`;
