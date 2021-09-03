import styled from 'styled-components';

import { rem } from 'utils/markup';
import { text18Mixin, text59Mixin } from 'styles/mixins';
import { colors } from 'styles/colors';
import { squareSides } from 'styles/templates';

export const ColorCardWrapper = styled.div<{ big?: boolean }>`
  margin: 0 ${rem(6)} ${rem(6)} 0;
  height: ${(props) => rem(props.big ? 288 : 141)};
`;

export const CardName = styled.div`
  ${text18Mixin};

  position: absolute;
  top: ${rem(12)};
  left: ${rem(16)};
  max-width: ${rem(100)};
`;

export const ListNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};
  ${squareSides(34)};
  color: ${colors.white};
  background: ${colors.black};
  border-radius: 50%;
`;

export const StatsNumber = styled.div`
  position: absolute;
  bottom: 0;
  right: ${rem(12)};

  ${text59Mixin};
`;
