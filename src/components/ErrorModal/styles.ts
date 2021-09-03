import styled from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { text16Mixin, radius12Mixin, blur56Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const Wrapper = styled.div<{ visible: boolean }>`
  background: ${colors.redTransparent(transparency.blur)};
  color: ${colors.white};
  border: ${rem(1)} solid ${colors.error};
  position: absolute;
  top: ${rem(15)};
  left: ${rem(15)};
  padding: ${rem(12)} ${rem(72)} ${rem(12)} ${rem(23)};

  ${text16Mixin};
  ${radius12Mixin};
  ${blur56Mixin};
`;
