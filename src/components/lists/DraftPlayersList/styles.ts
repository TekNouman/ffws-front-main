import styled from 'styled-components';

import { rem } from 'utils/markup';
import { hideScrollbar } from 'styles/mixins';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0 0 0;
`;

export const TableScroll = styled.div`
  overflow-y: scroll;
  max-height: ${rem(700)};
  cursor: pointer;

  ${hideScrollbar};
`;
