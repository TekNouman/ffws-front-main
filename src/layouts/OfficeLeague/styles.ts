import styled from 'styled-components';

import { colors } from 'styles/colors';
import { hideScrollbar, radius24Mixin } from 'styles/mixins';
import { rem } from 'utils/markup';
import { FlexJustifyBetween } from 'components/ui';

export const Top = styled.div`
  position: relative;
`;

export const TeamInfoCardWrapper = styled.div`
  width: 30%;
  color: ${colors.white};
  background: ${colors.blackPanel};
  margin-top: ${rem(6)};
  padding: 0 ${rem(10)} ${rem(10)};

  ${radius24Mixin};
`;

export const ButtonsWrapper = styled(FlexJustifyBetween)`
  padding: ${rem(15)} ${rem(15)} ${rem(5)} ${rem(15)};
`;

export const TeamStatsCard = styled.div`
  margin-top: ${rem(6)};
`;

export const StandingsCardWrapper = styled.div`
  margin-top: ${rem(6)};
  width: calc(70% - ${rem(6)});
`;

export const TableScroll = styled.div`
  overflow-y: scroll;
  max-height: ${rem(800)};

  ${hideScrollbar};
`;
