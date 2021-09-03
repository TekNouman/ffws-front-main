import styled from 'styled-components';

import { rem } from 'utils/markup';
import { text98Mixin, text16Mixin } from 'styles/mixins';
import { colors } from 'styles/colors';
import { TagButton } from 'components/ui';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${rem(6)} 0 ${rem(12)};
`;

export const DraftInfo = styled.div`
  ${text16Mixin};

  color: ${colors.white};
  margin: ${rem(15)} ${rem(10)};
`;

export const ClockWrapper = styled.div`
  padding: 0 ${rem(10)};
  display: flex;
  justify-content: space-between;
`;

export const ClockCardWrapper = styled.div`
  width: 24%;
  height: ${rem(163)};
`;

export const ClockCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(6)} 0 ${rem(20)} 0;

  ${text98Mixin};
`;

export const ClockLabel = styled.div`
  ${text16Mixin};

  color: ${colors.grayPanel};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  padding: ${rem(6)};
`;

export const DraftInfoWrapper = styled.div`
  padding: ${rem(14.5)} ${rem(15)};
`;

export const DraftInfoLine = styled.div`
  ${text16Mixin};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rem(4)} 0 0;
`;

export const DraftInfoLabel = styled.div`
  color: ${colors.white};
`;

export const DraftInfoValue = styled(TagButton)``;
