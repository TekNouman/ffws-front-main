import styled from 'styled-components';

import { colors } from 'styles/colors';
import { radius24Mixin, text14Mixin, hoverUnderlineMixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  margin: ${rem(150)} 0 0;
  padding: ${rem(9)} ${rem(20)};
  background: ${colors.blackPanel};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;

  ${text14Mixin};
  ${radius24Mixin};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    margin-left: ${rem(43)};

    ${hoverUnderlineMixin}
  }
`;
