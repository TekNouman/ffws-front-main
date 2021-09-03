import styled, { css } from 'styled-components';

import {
  blur56Mixin,
  absoluteAlignMixin,
  text28Mixin,
  text18Mixin,
  text12Mixin,
  hideScrollbar,
} from 'styles/mixins';
import { transitions } from 'styles/transitions';
import { rem } from 'utils/markup';
import { FlexColumn, Flex } from 'components/ui';
import { colors, transparency } from 'styles/colors';

const visibleModalMixin = css`
  opacity: 1;
  pointer-events: all;
`;

export const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  ${blur56Mixin};
  opacity: 0;
  pointer-events: none;
  transition: ${transitions.opacity};

  ${(props) => props.visible && visibleModalMixin}
`;

export const CardModal = styled.div`
  ${absoluteAlignMixin};

  width: ${rem(712)};
  height: ${rem(806)};
`;

export const CardModalInner = styled.div`
  padding: ${rem(32)};
`;

export const ScrollCardModalInner = styled.div`
  padding: ${rem(15)};
`;

export const ScrollCardModalInnerTitle = styled.div`
  color: ${colors.white};

  ${text18Mixin};
`;

export const Scroll = styled.div`
  overflow-y: scroll;
  max-height: ${rem(420)};
  margin-top: ${rem(40)};

  ${hideScrollbar};
`;

export const PlayerInfoWrapper = styled(FlexColumn)`
  color: ${colors.white};
  margin-left: ${rem(22)};
`;

export const PlayerName = styled.div`
  ${text28Mixin};
`;

export const TeamName = styled.div`
  margin-top: ${rem(8)};

  ${text18Mixin};
`;

export const PlayerAddintionalInfo = styled.div`
  margin-top: ${rem(8)};
  color: ${colors.whiteTransparent(transparency.half)};

  ${text18Mixin};
`;

export const PlayerTags = styled.div`
  margin-top: ${rem(8)};
  display: flex;
`;

export const StatsWrapper = styled.div`
  margin-top: ${rem(8)};
`;

export const Points = styled.div`
  color: ${colors.white};
  margin-top: ${rem(7)};

  ${text28Mixin};
`;

export const InfoText = styled.div`
  color: ${colors.white};
  margin-top: ${rem(27)};
  white-space: break-spaces;
  text-indent: ${rem(40)};

  ${text12Mixin};
`;

export const ButtonsWrapper = styled(Flex)`
  padding-top: ${rem(20)};
`;
