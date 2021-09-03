import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { text16Mixin, hideScrollbar } from 'styles/mixins';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0 0;
`;

export const TableScroll = styled.div`
  overflow-y: scroll;
  max-height: ${rem(300)};

  ${hideScrollbar};
`;

export const EmptyLabel = styled.div`
  color: ${colors.lightGraySecond};

  ${text16Mixin};
`;
