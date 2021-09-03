import { css } from 'styled-components';

import { fontSize, borderRadius, blur } from 'styles/templates';

export const text98Mixin = fontSize(98, 120);
export const text92Mixin = fontSize(92, 112.52);
export const text62Mixin = fontSize(62, 76);
export const text59Mixin = fontSize(59, 72);
export const text55Mixin = fontSize(55, 67);
export const text48Mixin = fontSize(48, 59);
export const text46Mixin = fontSize(46, 56.26);
export const text43Mixin = fontSize(43, 53);
export const text36Mixin = fontSize(36, 43);
export const text32Mixin = fontSize(32, 39);
export const text30Mixin = fontSize(30, 37);
export const text28Mixin = fontSize(28, 34);
export const text18Mixin = fontSize(18, 22);
export const text16Mixin = fontSize(16, 20);
export const text14Mixin = fontSize(14, 17);
export const text12Mixin = fontSize(12, 15);
export const text11Mixin = fontSize(11, 13);

export const radius6Mixin = borderRadius(6);
export const radius10Mixin = borderRadius(10);
export const radius12Mixin = borderRadius(12);
export const radius16Mixin = borderRadius(16);
export const radius20Mixin = borderRadius(20);
export const radius24Mixin = borderRadius(24);
export const radius99Mixin = borderRadius(99);

export const blur26Mixin = blur(26);
export const blur56Mixin = blur(56);

export const fixedScreenMixin = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const absoluteTopLeftMixin = css`
  position: absolute;
  top: 0;
  left: 0;
`;

export const absoluteInnerMixin = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const absoluteAlignMixin = css`
  ${absoluteTopLeftMixin};
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const hoverUnderlineMixin = css`
  &:hover {
    text-decoration: underline;
  }
`;

export const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;
