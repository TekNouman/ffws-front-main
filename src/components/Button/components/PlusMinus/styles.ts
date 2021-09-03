import styled from 'styled-components';

import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  width: ${rem(11)};
  height: ${rem(11)};
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${rem(24)};
  margin: auto;
  display: flex;
`;
