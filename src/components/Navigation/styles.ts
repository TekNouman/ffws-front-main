import styled, { css } from 'styled-components';

import { containBg } from 'styles/templates';
import { text16Mixin, radius99Mixin, blur26Mixin } from 'styles/mixins';
import { colors, transparency } from 'styles/colors';
import { rem } from 'utils/markup';
import logoImg from 'images/logo.png';

const absoluteNavMixin = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: ${rem(10)};
`;

export const Wrapper = styled.nav<{ absolute: boolean }>`
  display: flex;
  justify-content: space-between;
  height: ${rem(66)};

  ${(props) => props.absolute && absoluteNavMixin};
`;

export const Left = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  ${containBg(logoImg)};

  width: ${rem(81)};
  height: ${rem(46)};
`;

export const Links = styled.div`
  background: ${colors.whiteTransparent(transparency.hoverSecond)};
  margin: 0 0 0 ${rem(13)};
  display: flex;

  ${radius99Mixin};
  ${blur26Mixin};
`;

const activeNavLink = css`
  background: ${colors.red};
  ${radius99Mixin};
`;

export const NavLink = styled.div<{ active: boolean }>`
  ${text16Mixin};

  color: ${colors.white};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${rem(10)} ${rem(24)};
  user-select: none;

  ${(props) => props.active && activeNavLink};
`;
