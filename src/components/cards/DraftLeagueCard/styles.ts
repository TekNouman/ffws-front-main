import styled from 'styled-components';

import { colors } from 'styles/colors';
import { radius6Mixin, text18Mixin } from 'styles/mixins';
import { lastTwoChildsRadius } from 'styles/templates';
import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  background: ${colors.blackContent};
  padding: ${rem(8)};
  margin: ${rem(4)} ${rem(3)} 0;
  width: calc(50% - ${rem(6)});

  ${radius6Mixin};

  ${lastTwoChildsRadius(24)};
`;

export const Name = styled.div`
  color: ${colors.white};
  margin: ${rem(4)} 0 0 ${rem(7)};

  ${text18Mixin};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${rem(25)} 0 0;
  border-top: ${rem(1)} solid ${colors.lightGray};
  padding: ${rem(8)} 0 0;
`;
