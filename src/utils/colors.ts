import ColorHash from 'color-hash';

const colorHash = new ColorHash({ lightness: 50, saturation: 50 });

type ColorType = [number, number, number];

export const hslToCssString = (hsl: ColorType) =>
  `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;

export const hslFromString = (s: string) => {
  const hsl = colorHash.hsl(s);
  return hslToCssString(hsl);
};
