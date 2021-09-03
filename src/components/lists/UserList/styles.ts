import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { text16Mixin } from 'styles/mixins';

export const UserPicWrapper = styled.div`
  display: inline-block;
  margin: 0 0 0 ${rem(15)};
`;

export const UserName = styled.span`
  color: ${colors.white};
  margin: 0 0 0 ${rem(15)};
  font-weight: 400;

  ${text16Mixin};
`;
