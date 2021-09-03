import styled from 'styled-components';

import { rem } from 'utils/markup';

export const Top = styled.div`
  position: relative;
  margin-bottom: ${rem(6)};
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Side = styled.div`
  width: 22%;
`;

export const Center = styled.div`
  width: 54%;
`;
