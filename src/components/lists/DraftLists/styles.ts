import styled from 'styled-components';

import { colors } from 'styles/colors';
import { text32Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const LeaguesDrafts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LeagueName = styled.div`
  color: ${colors.white};
  padding: ${rem(16)} 0 0 ${rem(20)};

  ${text32Mixin};
`;
