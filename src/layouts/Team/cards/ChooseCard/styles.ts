import styled from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { transitions } from 'styles/transitions';
import { radius16Mixin, text32Mixin, text16Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamItem = styled.div<{ $active: boolean }>`
  display: flex;
  background: ${(props) => (props.$active ? colors.white : 'none')};
  transition: ${transitions.checkbox};
  padding: ${rem(15)};
  margin: 0 0 ${rem(12)} 0;
  border: ${rem(1)} solid ${colors.whiteTransparent(transparency.checkbox)};
  cursor: pointer;

  ${radius16Mixin};
`;

export const TeamName = styled.div<{ $active: boolean }>`
  color: ${(props) => (props.$active ? colors.black : colors.white)};
  transition: ${transitions.checkbox};

  ${text32Mixin};
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(10)} 0 0;
`;

export const OwnerName = styled.div<{ $active: boolean }>`
  color: ${(props) => (props.$active ? colors.grayPanel : colors.white)};
  transition: ${transitions.checkbox};

  ${text16Mixin};
`;
