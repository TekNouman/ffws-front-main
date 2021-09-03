import styled, { css } from 'styled-components';

import { colors, transparency } from 'styles/colors';
import { transitions } from 'styles/transitions';
import {
  blur56Mixin,
  radius24Mixin,
  text16Mixin,
  hoverUnderlineMixin,
} from 'styles/mixins';
import { rem } from 'utils/markup';

const tooltipMixin = css`
  width: ${rem(300)};
  color: ${colors.white};
  padding: ${rem(12)} ${rem(23)};

  ${text16Mixin}
`;

const linksListMixin = css`
  width: ${rem(195)};
  left: unset;
  right: ${rem(10)};
`;

const filterListMixin = css`
  width: unset;
  padding: ${rem(2)} ${rem(23)} ${rem(12)};
`;

export const Wrapper = styled.div<{
  toggle: boolean;
  tooltip: boolean;
  linkList: boolean;
  filterList: boolean;
  top: number;
  left?: number;
  width?: number;
  height: number;
  right?: number;
}>`
  background: ${colors.whiteTransparent(transparency.blur)};
  transition: ${transitions.opacity};

  position: absolute;
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
  top: ${(props) => (props.top ? props.top + props.height + 'px' : 'unset')};
  left: ${(props) => (props.left ? props.left + 'px' : 'unset')};
  right: ${(props) => (props.right ? props.right - 18 + 'px' : 'unset')};
  margin: ${rem(5)} 0 0;
  padding: ${rem(12)} ${rem(18)};

  opacity: ${(props) => (props.toggle ? 1 : 0)};
  pointer-events: ${(props) => (props.toggle ? 'all' : 'none')};

  ${radius24Mixin}
  ${blur56Mixin}

  ${(props) => props.tooltip && tooltipMixin}
  ${(props) => props.linkList && linksListMixin}
  ${(props) => props.filterList && filterListMixin}
  ${(props) =>
    props.right &&
    `
    display: table;
  `}
`;

export const InnerLink = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  display: block;
  margin: 0 0 ${rem(14)} 0;

  ${text16Mixin}
  ${hoverUnderlineMixin}
`;
