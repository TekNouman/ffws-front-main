import styled from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';
import { text18Mixin, radius24Mixin } from 'styles/mixins';
import { transitions } from 'styles/transitions';

export const Top = styled.div`
  position: relative;
  max-height: 70vh;
  overflow: hidden;
`;

export const VideoCardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  height: 0;
`;

export const StatsWrapper = styled.div`
  padding: ${rem(8)} 0;
  display: flex;
  justify-content: space-between;
`;

export const MainListLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainListLink = styled.div`
  background: ${colors.blackContent};
  color: ${colors.white};
  padding: ${rem(23)} 0;
  margin: 0 ${rem(3)};
  text-align: center;
  width: -webkit-fill-available;
  cursor: pointer;
  transition: ${transitions.hover};

  ${text18Mixin};
  ${radius24Mixin};

  &:hover {
    background: ${colors.blackPanel};
  }
`;
