import styled from 'styled-components';

import { rem } from 'utils/markup';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: ${rem(6)};
`;

export const SearchWrapper = styled.div`
  width: 100%;
`;

export const SearchInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(6)};
`;
