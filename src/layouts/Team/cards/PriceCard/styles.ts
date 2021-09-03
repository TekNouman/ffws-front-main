import styled from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { radius16Mixin, text55Mixin, text16Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';

export const InfoWrapper = styled.div``;

export const Balance = styled.div`
  border: ${rem(1)} solid ${colors.whiteTransparent(transparency.checkbox)};
  padding: ${rem(12)} ${rem(10)} ${rem(1)} ${rem(18)};
  color: ${colors.white};

  ${radius16Mixin};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BalanceTitle = styled.div`
  ${text16Mixin};
`;

export const BalanceValue = styled.div`
  width: 100%;
  text-align: right;
  margin: ${rem(54)} 0 0;

  ${text55Mixin};
`;

export const PriceList = styled.div`
  margin: ${rem(70)} 0 0;
`;

export const PriceItem = styled.div`
  border-bottom: ${rem(1)} solid
    ${colors.whiteTransparent(transparency.checkbox)};
  padding: ${rem(13)} ${rem(11)};
  display: flex;
  justify-content: space-between;

  ${text16Mixin};
`;

export const PriceLabel = styled.div`
  max-width: 70%;
  color: ${colors.whiteTransparent(transparency.border)};
`;

export const PriceValue = styled.div`
  color: ${colors.white};
`;
