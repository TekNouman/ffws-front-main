import styled from 'styled-components';

import { colors } from 'styles/colors';
import { radius24Mixin, text16Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0;
  background: ${colors.blackPanel};
  color: ${colors.white};
  overflow: hidden;

  ${text16Mixin};
  ${radius24Mixin};
`;

export const ScrollInner = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  user-select: none;
  padding: ${rem(6)} ${rem(20)};
`;

export const Title = styled.div`
  margin: 0 ${rem(20)} 0 0;
`;
