export const rem = function pxToRem(px: number): string {
  return `${px / 10}rem`;
};

export default {
  pxToRem: rem,
};
