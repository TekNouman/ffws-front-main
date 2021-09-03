import styled from 'styled-components';

import { coverBg } from 'styles/templates';
import { rem } from 'utils/markup';
import { radius24Mixin } from 'styles/mixins';

export const Wrapper = styled.div<{
  withPadding: boolean;
  small: boolean;
  withOverflow: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
  absolute: boolean;
  $color: string;
  $background?: string;
}>`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background: ${(props) => props.$color};
  padding: ${(props) =>
    props.withPadding ? (props.small ? rem(15) : rem(32)) : 0};
  overflow: ${(props) => (props.withOverflow ? 'visible' : 'hidden')};
  width: ${(props) => (props.fullWidth ? '100%' : `calc(50% - ${rem(3)})`)};
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  ${(props) => props.absolute && 'position: absolute'};
  ${(props) => props.$background && coverBg(props.$background)};

  ${radius24Mixin};
`;
