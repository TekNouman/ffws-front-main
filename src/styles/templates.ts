import { css } from 'styled-components';

import { rem } from 'utils/markup';

export const urlContain = (img: string) =>
  `url(${img}) no-repeat center / contain`;

export const containBg = (img: string) => css`
  background: ${urlContain(img)};
`;

export const urlCover = (img: string) => `url(${img}) no-repeat center / cover`;

export const coverBg = (img: string) => css`
  background: ${urlCover(img)};
`;

export const backgroundHover = (base: string, hover: string) => css`
  background: ${base};

  &:hover {
    background: ${hover};
  }
`;

export const colorHover = (base: string, hover: string) => css`
  color: ${base};

  &:hover {
    color: ${hover};
  }
`;

export const fontSize = (size: number, lineHight: number) => css`
  font-size: ${rem(size)};
  line-height: ${rem(lineHight)};
`;

export const lastTwoChildsRadius = (radius: number) => css`
  &:nth-last-child(1) {
    border-bottom-right-radius: ${rem(radius)};
  }

  &:nth-last-child(2) {
    border-bottom-left-radius: ${rem(radius)};
  }
`;

export const colorTransparent = (
  color: [number, number, number],
  opacity: number
) => `
  rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity});
`;

export const borderRadius = (r: number) => css`
  border-radius: ${rem(r)};
`;

export const blur = (value: number) => css`
  backdrop-filter: blur(${rem(value)});
`;

export const squareSides = (value: number) => css`
  width: ${rem(value)};
  height: ${rem(value)};
`;
