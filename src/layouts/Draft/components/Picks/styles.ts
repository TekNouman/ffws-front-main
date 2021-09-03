import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { radius6Mixin, hideScrollbar } from 'styles/mixins';

export const Wrapper = styled.div`
  margin: ${rem(6)} 0;
`;

export const PicksInner = styled.div`
  height: ${rem(405)};
  padding: ${rem(5)};
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;

  ${hideScrollbar};
`;

export const PlayerItem = styled.div`
  display: flex;
  background: ${colors.blackContent};
  padding: ${rem(15)};
  margin: ${rem(4)} 0 0;

  ${radius6Mixin};
`;
