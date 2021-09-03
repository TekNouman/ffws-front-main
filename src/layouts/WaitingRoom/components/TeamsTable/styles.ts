import styled from 'styled-components';

import { colors } from 'styles/colors';
import { text32Mixin, text16Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const CardTitle = styled.div`
  color: ${colors.white};

  ${text32Mixin};
`;

export const Spots = styled.span`
  color: ${colors.lightGray};
`;

export const TeamName = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? colors.lightGraySecond : colors.white)};
  vertical-align: top;

  ${text16Mixin};

  line-height: ${rem(32)};
`;
