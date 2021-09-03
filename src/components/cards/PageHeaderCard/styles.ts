import styled, { css } from 'styled-components';

import { text92Mixin, text62Mixin } from 'styles/mixins';
import { colors } from 'styles/colors';
import { rem } from 'utils/markup';

const smallMixin = css`
  padding-top: ${rem(118)};

  ${text62Mixin};
`;

export const Title = styled.div<{ small?: boolean }>`
  color: ${colors.white};
  padding: ${rem(268)} ${rem(10)} ${rem(8)};

  ${text92Mixin};

  ${(props) => props.small && smallMixin}
`;
