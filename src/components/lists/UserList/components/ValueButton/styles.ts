import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { text12Mixin } from 'styles/mixins';
import { TagButton } from 'components/ui';
import { rem } from 'utils/markup';

const inlineMixin = css`
  width: auto;
  margin-right: ${rem(4)};
`;

export const Wrapper = styled.div<{
  flexStart?: boolean;
  flexEnd?: boolean;
  inline?: boolean;
}>`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  ${(props) => props.flexStart && 'justify-content: flex-start;'};
  ${(props) => props.flexEnd && 'justify-content: flex-end;'};
  ${(props) => props.inline && inlineMixin};
`;

const modalMixin = css`
  background: ${colors.darkPurple};
  ${text12Mixin};
`;

export const Value = styled(TagButton)<{
  disableSecond?: boolean;
  uppercase?: boolean;
  modal?: boolean;
}>`
  margin: 0;

  ${(props) => props.disableSecond && `background: ${colors.blackContent};`};
  ${(props) => props.uppercase && 'text-transform: uppercase;'};
  ${(props) => props.modal && modalMixin};
`;
